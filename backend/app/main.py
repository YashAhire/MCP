from fastapi import FastAPI

from app.database.db import engine, Base
from app.routers import expense
from app.database.models import User, Expense


Base.metadata.create_all(bind=engine)


app = FastAPI(
    title="AI Productivity Hub",
    version="1.0"
)


app.include_router(
    expense.router
)


@app.get("/")
def home():
    return {
        "message": "AI Productivity Hub Backend Running 🚀"
    }