from pydantic import BaseModel
from datetime import date


class ExpenseCreate(BaseModel):
    title: str
    amount: float
    category: str


class ExpenseResponse(BaseModel):
    id: int
    title: str
    amount: float
    category: str
    expense_date: date

    class Config:
        from_attributes = True