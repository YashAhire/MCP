import api from "@/lib/api";


export interface Expense {

    id:number;
    title:string;
    amount:number;
    category:string;
    expense_date:string;

}



export async function getExpenses(){

    const response = await api.get(
        "/expenses/"
    );

    return response.data;

}



export async function createExpense(
    data:any
){

    const response = await api.post(
        "/expenses/",
        data
    );

    return response.data;

}