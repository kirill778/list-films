"use client"
import { useState } from "react";
import { users } from "../assets/users .json"

interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

function checkUser(email: string, password: string) {
    if (email === "john.doe@example.com" && password === "123456") {
        window.location.href = "/home";
    }
    return false;
}

export default function Login() {
    const [users, setUsers] = useState<User[]>([]);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <div className="flex justify-center items-center h-screen">
            
            <form className="flex flex-col gap-4 w-50 items-center">
                <h1 className="text-2xl font-bold">Login</h1>
                <input type="text" placeholder="Email" className="border border-gray-300 rounded-md p-2" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" className="border border-gray-300 rounded-md p-2" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className="bg-blue-500 text-white rounded-md p-2 w-20" onClick={(e) => {
                    e.preventDefault();
                    checkUser(email, password);
                }}>Login</button>
            </form>
        </div>
    )
}