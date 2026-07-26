"use client";

import { useRouter } from "next/navigation";
import { removeToken } from "@/lib/auth";
import { useAuth } from "@/hooks/useAuth";

export default function DashboardPage(){

    useAuth()

    const router = useRouter();


    function logout(){

        removeToken();

        router.push("/login");

    }


    return (

        <div className="min-h-screen p-10">


            <div className="flex justify-between items-center">


                <h1 className="text-4xl font-bold">
                    AI Productivity Hub 🚀
                </h1>


                <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-2 rounded"
                >
                    Logout
                </button>


            </div>



            <h2 className="text-2xl mt-10">
                Welcome 👋
            </h2>



            <div className="grid grid-cols-2 gap-6 mt-10">


                <div
                    onClick={()=>{
                        router.push("/expenses")
                    }}
                    className="border rounded p-6 hover:shadow cursor-pointer"
                    >

                    <h3 className="text-xl font-bold">
                        💰 Expense Tracker
                    </h3>

                    <p>
                        Manage your expenses
                    </p>

                </div>



                <div className="border rounded p-6 hover:shadow">

                    <h3 className="text-xl font-bold">
                        🌤 Weather MCP
                    </h3>

                    <p>
                        Get weather information
                    </p>

                </div>




                <div className="border rounded p-6 hover:shadow">

                    <h3 className="text-xl font-bold">
                        🐙 GitHub Analyzer
                    </h3>

                    <p>
                        Analyze GitHub profile
                    </p>

                </div>




                <div className="border rounded p-6 hover:shadow">

                    <h3 className="text-xl font-bold">
                        📄 Resume Analyzer
                    </h3>

                    <p>
                        AI resume analysis
                    </p>

                </div>


            </div>


        </div>

    );
}