from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.db import get_db
from app.database.models import Expense


router = APIRouter(
    prefix="/expenses",
    tags=["Expenses"]
)


@router.post("/")
def add_expense(
    title: str,
    amount: float,
    category: str,
    db: Session = Depends(get_db)
):

    expense = Expense(
        title=title,
        amount=amount,
        category=category
    )

    db.add(expense)
    db.commit()
    db.refresh(expense)

    return expense



@router.get("/")
def get_expenses(
    db: Session = Depends(get_db)
):

    expenses = db.query(Expense).all()

    return expenses