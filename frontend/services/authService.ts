import api from "@/lib/api";


export interface RegisterData {
    name: string;
    email: string;
    password: string;
}


export interface LoginData {
    username: string;
    password: string;
}


export async function registerUser(
    data: RegisterData
) {
    const response = await api.post(
        "/auth/register",
        data
    );

    return response.data;
}



export async function loginUser(
    data: LoginData
) {

    const formData = new URLSearchParams();

    formData.append(
        "username",
        data.username
    );

    formData.append(
        "password",
        data.password
    );


    const response = await api.post(
        "/auth/login",
        formData,
        {
            headers:{
                "Content-Type":"application/x-www-form-urlencoded"
            }
        }
    );


    return response.data;
}