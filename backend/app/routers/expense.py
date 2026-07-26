from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.db import get_db
from app.schemas.expense import ExpenseCreate, ExpenseResponse
from app.auth.dependencies import get_current_user
from app.database.models.user import User
from app.services.expense_service import (
    create_expense,
    get_all_expenses,
)

router = APIRouter(
    prefix="/expenses",
    tags=["Expenses"],
)


@router.post("/", response_model=ExpenseResponse)
def add_expense(
    expense: ExpenseCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return create_expense(
        db,
        expense,
        current_user.id,
    )


@router.get("/", response_model=list[ExpenseResponse])
def list_expenses(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return get_all_expenses(
        db,
        current_user.id,
    )