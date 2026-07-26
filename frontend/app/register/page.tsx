"use client";


import { useState } from "react";
import { registerUser } from "@/services/authService";
import { useRouter } from "next/navigation";


export default function RegisterPage(){

    const router = useRouter();


    const [form,setForm] = useState({

        name:"",
        email:"",
        password:""

    });



    async function handleSubmit(
        e:React.FormEvent
    ){

        e.preventDefault();


        await registerUser(form);


        router.push("/login");

    }



    return (

        <div className="flex min-h-screen items-center justify-center">


            <form
            onSubmit={handleSubmit}
            className="w-96 space-y-4"
            >


                <h1 className="text-3xl font-bold">
                    Register
                </h1>


                <input
                className="border p-2 w-full"
                placeholder="Name"
                onChange={
                    e=>setForm({
                        ...form,
                        name:e.target.value
                    })
                }
                />


                <input
                className="border p-2 w-full"
                placeholder="Email"
                onChange={
                    e=>setForm({
                        ...form,
                        email:e.target.value
                    })
                }
                />


                <input
                className="border p-2 w-full"
                placeholder="Password"
                type="password"
                onChange={
                    e=>setForm({
                        ...form,
                        password:e.target.value
                    })
                }
                />


                <button
                className="bg-black text-white px-4 py-2 w-full"
                >
                    Register
                </button>


            </form>


        </div>

    )

}