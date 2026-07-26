"use client";

import { useEffect, useState } from "react";
import {
    getExpenses,
    createExpense
} from "@/services/expenseService";


export default function ExpensesPage(){


    const [expenses,setExpenses] = useState<any[]>([]);


    const [loading,setLoading] = useState(true);


    const [error,setError] = useState("");



    const [form,setForm] = useState({

        title:"",
        amount:"",
        category:""

    });



    async function loadExpenses(){

        try{

            setLoading(true);

            const data = await getExpenses();

            setExpenses(data);

            setError("");

        }
        catch(err){

            setError(
                "Failed to load expenses"
            );

        }
        finally{

            setLoading(false);

        }

    }



    async function addExpense(
        e:React.FormEvent
    ){

        e.preventDefault();


        if(
            !form.title ||
            !form.amount ||
            !form.category
        ){

            alert(
                "Please fill all fields"
            );

            return;

        }


        try{


            await createExpense({

                ...form,

                amount:Number(form.amount)

            });


            setForm({

                title:"",
                amount:"",
                category:""

            });


            loadExpenses();


        }
        catch(err){

            alert(
                "Failed to add expense"
            );

        }


    }




    useEffect(()=>{

        loadExpenses();

    },[]);




    return (

        <div className="min-h-screen bg-gray-50 p-10">


            <h1 className="text-4xl font-bold mb-8">
                Expense Tracker 💰
            </h1>



            <div className="bg-white p-6 rounded-xl shadow mb-10">


                <h2 className="text-xl font-semibold mb-4">
                    Add Expense
                </h2>


                <form
                onSubmit={addExpense}
                className="space-y-4"
                >


                    <input

                    className="border rounded p-3 w-full"

                    placeholder="Expense title"

                    value={form.title}

                    onChange={
                        e=>setForm({
                            ...form,
                            title:e.target.value
                        })
                    }

                    />



                    <input

                    className="border rounded p-3 w-full"

                    placeholder="Amount"

                    type="number"

                    value={form.amount}

                    onChange={
                        e=>setForm({
                            ...form,
                            amount:e.target.value
                        })
                    }

                    />



                    <input

                    className="border rounded p-3 w-full"

                    placeholder="Category"

                    value={form.category}

                    onChange={
                        e=>setForm({
                            ...form,
                            category:e.target.value
                        })
                    }

                    />



                    <button

                    className="bg-black text-white px-6 py-3 rounded"

                    >

                    Add Expense

                    </button>


                </form>


            </div>





            <h2 className="text-2xl font-bold mb-5">
                Your Expenses
            </h2>




            {
                loading && (

                    <p>
                        Loading expenses...
                    </p>

                )
            }



            {
                error && (

                    <p className="text-red-500">
                        {error}
                    </p>

                )
            }




            {
                !loading &&
                expenses.length===0 && (

                    <div className="bg-white p-8 rounded-xl shadow">

                        <p>
                            No expenses found.
                        </p>

                    </div>

                )
            }





            <div className="grid md:grid-cols-3 gap-5">


            {
                expenses.map(
                    (expense)=>(
                        
                    <div

                    key={expense.id}

                    className="bg-white rounded-xl shadow p-6"

                    >


                        <h3 className="text-xl font-bold">

                            {expense.title}

                        </h3>



                        <p className="text-gray-500 mt-2">

                            {expense.category}

                        </p>



                        <p className="text-3xl font-bold mt-5">

                            ${expense.amount}

                        </p>



                        <p className="text-sm text-gray-400 mt-3">

                            {expense.expense_date}

                        </p>



                    </div>

                    )
                )
            }


            </div>


        </div>

    )

}