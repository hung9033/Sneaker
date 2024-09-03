import axios, { AxiosError } from "axios"
import { useEffect, useState } from "react"
import { SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
type Register = {
    name: string,
    email: string,
    password: string,
}
type Login = {
    email: string,
    password: string,
}
type User = {
    email: string,
    name: string,
    password: string,
}
export const useAuth = () => {
    const navigate = useNavigate();
    const [users, setUser] = useState<User[]>([]);
    const Login: SubmitHandler<Login> = async (data) => {
        try {
            const res = await axios.post("/auth/login", data);
            if (res.data.status) {
                localStorage.setItem("token", res.data.accessToken);
                navigate('/admin');
                toast.success(res.data.message);
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.error("Login error: ", error);
            toast.error(`${error}`);
        }
    };

    const Register: SubmitHandler<Register> = async (data) => {
        try {
            await axios.post("/auth/register", data);
            navigate("/login")
            toast.success("Đăng ký thành công")
        } catch (error) {
            toast.error(`${error}`)
        }
    };

    const getAllUsers = async () => {
        try {
            const { data } = await axios.get("/auth/users");
            setUser(data)
            console.log(data);
            

        } catch (error) {
            toast.error((error as AxiosError)?.message)
        }
    }
    useEffect(() => {
        getAllUsers()
    }, [])
    
    return { Login, Register, users }
}
