import { useState } from "react"
import { Link } from "react-router";
import arrow from "../assets/arrow.jpg"

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="flex">
            <div className="w-full md:w-1/2 p-8 md:p-12">
                <form className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm">
                    <div className="flex justify-center mb-6">
                        <h2 className="text-xl font-medium">
                            Ecommerce
                        </h2>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-center">
                        Hey there! 👋 
                    </h2>

                    <p className="text-center mb-6">
                        Enter your username and password to login
                    </p>

                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">
                            Email
                        </label>

                        <input 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border rounded"
                            placeholder="Enter your email address"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">
                            Password
                        </label>

                        <input 
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border p-2 rounded"
                            placeholder="Enter your password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-black w-full text-white p-2 font-semibold rounded-lg hover:bg-gray-800 transition"
                    >
                        Sign in
                    </button>

                    <p className="mt-6 text-center text-sm">
                        Don't have an account?
                        <Link to='/register' className="text-blue-500">
                            Register
                        </Link>
                    </p>
                </form>               
            </div>

            <div className="hidden md:block w-1/2">
                <div className="h-full flex flex-col justify-center items-center">
                    <img 
                        src={arrow}
                        className="h-[750px] w-full object-cover"
                    />
                </div>
            </div>
            
        </div>
    )
}
