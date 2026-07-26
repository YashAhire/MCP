from sqlalchemy.orm import Session
from app.database.models.expense import Expense
from app.schemas.expense import ExpenseCreate


def create_expense(db: Session, expense: ExpenseCreate):

    new_expense = Expense(
        title=expense.title,
        amount=expense.amount,
        category=expense.category,
    )

    db.add(new_expense)
    db.commit()
    db.refresh(new_expense)

    return new_expense


def get_all_expenses(db: Session):

    return db.query(Expense).all()