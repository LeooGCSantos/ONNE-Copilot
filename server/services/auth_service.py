import hashlib
from datetime import datetime, timezone

from fastapi import Request
from sqlalchemy.orm import Session

from core.security import (
    create_access_token,
    create_refresh_token,
    hash_password,
    safe_decode_token,
    verify_password,
    verify_token_type,
)
from models import LoginHistory, Role, RoleName, User, UserSession


def hash_refresh_token(token: str) -> str:
    return hashlib.sha256(token.encode()).hexdigest()


class AuthService:
    def __init__(self, db: Session):
        self.db = db

    def authenticate(self, email: str, password: str) -> User | None:
        user = self.db.query(User).filter(User.email == email).first()
        if user is None or not user.is_active:
            return None
        if not verify_password(password, user.hashed_password):
            return None
        return user

    def record_login(
        self,
        email: str,
        success: bool,
        user_id: int | None = None,
        request: Request | None = None,
    ) -> None:
        ip_address = request.client.host if request and request.client else None
        user_agent = request.headers.get("user-agent") if request else None

        entry = LoginHistory(
            user_id=user_id,
            email=email,
            ip_address=ip_address,
            user_agent=user_agent,
            success=success,
        )
        self.db.add(entry)
        self.db.commit()

    def create_tokens(self, user: User) -> tuple[str, str, UserSession]:
        access_token = create_access_token(
            subject=str(user.id),
            extra={"role": user.role.name.value},
        )
        refresh_token, expires_at = create_refresh_token(subject=str(user.id))

        session = UserSession(
            user_id=user.id,
            refresh_token_hash=hash_refresh_token(refresh_token),
            expires_at=expires_at,
        )
        self.db.add(session)
        self.db.commit()
        self.db.refresh(session)

        return access_token, refresh_token, session

    def refresh_tokens(self, refresh_token: str) -> tuple[str, str] | None:
        payload = safe_decode_token(refresh_token)
        if payload is None or not verify_token_type(payload, "refresh"):
            return None

        token_hash = hash_refresh_token(refresh_token)
        session = (
            self.db.query(UserSession)
            .filter(
                UserSession.refresh_token_hash == token_hash,
                UserSession.revoked_at.is_(None),
            )
            .first()
        )

        if session is None:
            return None

        expires_at = session.expires_at
        if expires_at.tzinfo is None:
            expires_at = expires_at.replace(tzinfo=timezone.utc)

        if expires_at < datetime.now(timezone.utc):
            return None

        user = self.db.query(User).filter(User.id == session.user_id).first()
        if user is None or not user.is_active:
            return None

        session.revoked_at = datetime.now(timezone.utc)
        self.db.commit()

        access_token, new_refresh_token, _ = self.create_tokens(user)
        return access_token, new_refresh_token

    def logout(self, refresh_token: str) -> bool:
        token_hash = hash_refresh_token(refresh_token)
        session = (
            self.db.query(UserSession)
            .filter(
                UserSession.refresh_token_hash == token_hash,
                UserSession.revoked_at.is_(None),
            )
            .first()
        )

        if session is None:
            return False

        session.revoked_at = datetime.now(timezone.utc)
        self.db.commit()
        return True


class SeedService:
    def __init__(self, db: Session):
        self.db = db

    def seed_roles(self) -> None:
        roles = [
            (RoleName.ADMIN, "Administrador com acesso total"),
            (RoleName.ANALISTA, "Analista de suporte técnico"),
            (RoleName.RH, "Recursos humanos"),
        ]

        for name, description in roles:
            exists = self.db.query(Role).filter(Role.name == name).first()
            if exists is None:
                self.db.add(Role(name=name, description=description))

        self.db.commit()

    def seed_admin(self, email: str, password: str) -> None:
        admin_role = self.db.query(Role).filter(Role.name == RoleName.ADMIN).first()
        if admin_role is None:
            return

        exists = self.db.query(User).filter(User.email == email).first()
        if exists is not None:
            return

        user = User(
            email=email,
            hashed_password=hash_password(password),
            full_name="Administrador",
            role_id=admin_role.id,
            is_active=True,
        )
        self.db.add(user)
        self.db.commit()
