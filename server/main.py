from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from core.config import get_settings
from database.session import SessionLocal
from middlewares.security import SecurityHeadersMiddleware
from routers import auth, downloads
from services.auth_service import SeedService

settings = get_settings()


@asynccontextmanager
async def lifespan(app: FastAPI):
    db = SessionLocal()
    try:
        seed = SeedService(db)
        seed.seed_roles()
        seed.seed_admin(settings.seed_admin_email, settings.seed_admin_password)
    finally:
        db.close()
    yield


app = FastAPI(
    title=settings.app_name,
    version="1.0.0",
    lifespan=lifespan,
)

app.add_middleware(SecurityHeadersMiddleware)
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(downloads.router)


@app.get("/health")
def health():
    return {"status": "ok"}
