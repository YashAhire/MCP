"use client";

import { useState } from "react";
import { loginUser } from "@/services/authService";
import { saveToken } from "@/lib/auth";
import { useRouter } from "next/navigation";


export default function LoginPage() {

    const router = useRouter();

    const [form, setForm] = useState({
        email: "",
        password: ""
    });


    async function handleSubmit(
        e: React.FormEvent
    ) {

        e.preventDefault();


        const data = await loginUser(form);


        saveToken(
            data.access_token
        );


        router.push("/dashboard");
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
                    onChange={(e)=>setForm({
                        ...form,
                        email:e.target.value
                    })}
                />


                <input
                    className="border p-2 w-full"
                    placeholder="Password"
                    type="password"
                    onChange={(e)=>setForm({
                        ...form,
                        password:e.target.value
                    })}
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
