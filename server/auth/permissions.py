from enum import Enum


class Permission(str, Enum):
  OVERVIEW_VIEW = "overview:view"
  TICKETS_VIEW = "tickets:view"
  TICKETS_MANAGE = "tickets:manage"
  DOWNLOADS_VIEW = "downloads:view"
  KB_VIEW = "kb:view"
  KB_MANAGE = "kb:manage"
  FINANCEIRO_VIEW = "financeiro:view"
  FINANCEIRO_REQUEST = "financeiro:request"
  FINANCEIRO_MANAGE = "financeiro:manage"
  RH_VIEW = "rh:view"
  RH_MANAGE = "rh:manage"
  SETTINGS_VIEW = "settings:view"
  SETTINGS_MANAGE = "settings:manage"
  USERS_MANAGE = "users:manage"


ROLE_PERMISSIONS: dict[str, set[Permission]] = {
    "admin": set(Permission),
    "analista": {
        Permission.OVERVIEW_VIEW,
        Permission.TICKETS_VIEW,
        Permission.TICKETS_MANAGE,
        Permission.DOWNLOADS_VIEW,
        Permission.KB_VIEW,
        Permission.FINANCEIRO_VIEW,
        Permission.FINANCEIRO_REQUEST,
    },
    "rh": {
        Permission.OVERVIEW_VIEW,
        Permission.DOWNLOADS_VIEW,
        Permission.KB_VIEW,
        Permission.FINANCEIRO_VIEW,
        Permission.FINANCEIRO_MANAGE,
        Permission.RH_VIEW,
        Permission.RH_MANAGE,
    },
}


def role_has_permission(role_name: str, permission: Permission) -> bool:
    permissions = ROLE_PERMISSIONS.get(role_name, set())
    return permission in permissions
