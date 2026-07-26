"use client";

import { useState } from "react";
import { loginUser } from "@/services/authService";
import { saveToken } from "@/lib/auth";
import { useRouter } from "next/navigation";


export default function LoginPage() {

    const router = useRouter();

    const [form,setForm] = useState({
        username:"",
        password:""
    });


    async function handleSubmit(
        e: React.FormEvent
    ) {

        e.preventDefault();

        try {

            const response = await loginUser(form);


            saveToken(
                response.access_token
            );


            router.push("/dashboard");


        } catch(error){

            console.log(error);

            alert("Login failed");

        }

    }


    return (

        <div className="flex min-h-screen items-center justify-center">

            <form
                onSubmit={handleSubmit}
                className="w-96 space-y-4"
            >

                <h1 className="text-3xl font-bold">
                    Login
                </h1>


                <input
                    className="border p-2 w-full"
                    placeholder="Email"
                    type="email"
                    onChange={(e)=>
                        setForm({
                            ...form,
                            username:e.target.value
                        })
                    }
                />


                <input
                    className="border p-2 w-full"
                    placeholder="Password"
                    type="password"
                    onChange={(e)=>
                        setForm({
                            ...form,
                            password:e.target.value
                        })
                    }
                />


                <button
                    className="bg-black text-white p-2 w-full"
                >
                    Login
                </button>


            </form>

        </div>

    );
}