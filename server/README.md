# ONNE Copilot — Backend

## Setup

```bash
cd server
python -m venv .venv

# Windows
.venv\Scripts\activate

# Linux/macOS
source .venv/bin/activate

pip install -r requirements.txt
cp .env.example .env
alembic upgrade head
uvicorn main:app --reload --host 127.0.0.1 --port 8000
```

## Variáveis de ambiente

Todas as configurações ficam em `.env`. Para produção com PostgreSQL, altere apenas:

```
DATABASE_URL=postgresql://user:password@localhost:5432/onne_copilot
```

## Usuário inicial

| Campo | Valor |
|---|---|
| Email | admin@onne.local |
| Senha | admin123 |

## Endpoints

| Método | Rota | Descrição |
|---|---|---|
| POST | `/auth/login` | Login |
| POST | `/auth/refresh` | Renovar tokens |
| POST | `/auth/logout` | Logout |
| GET | `/auth/me` | Usuário autenticado |
| GET | `/downloads` | Lista de downloads |
| GET | `/health` | Health check |

## Migrações

```bash
alembic revision --autogenerate -m "descricao"
alembic upgrade head
```
