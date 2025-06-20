import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useStateContext } from '../StateContext';

export default function Register() {
    const { setIsAuth } = useStateContext();

    const [user, setUser] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handelSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/api/user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            const data = await response.json()

            console.log("Data.sucess ;", data.success);
            console.log("data:", data.authToken);

            if (data.success === true) {
                const authToken = data.authToken;
                localStorage.setItem('isAuth', true);
                setIsAuth(true)
                navigate('/home')
            }

            if (data.success === false) {
                alert(data.errors[0].msg);
            }

        } catch (error) {
            console.log('Server Error : ', error);
        }
    }

    const handelChangeValue = (e) => {
        const { name, value } = e.target;
        setUser(
            { ...user, [name]: value }
        )
    }


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-sm p-8 text-gray-700  bg-white rounded-lg shadow-black shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <form onSubmit={handelSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={user.email}
                            onChange={handelChangeValue}
                            className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-gray-800"
                            placeholder='Enter your email'
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={user.password}
                            onChange={handelChangeValue}
                            className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-gray-800"
                            placeholder='Enter your password'
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-200"
                    >
                        Login
                    </button>

                    <div className="text-center pt-3">
                        <p>
                            Don't have an account? {" "}
                            <Link to="/register" className="font-bold underline">
                                Register here
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}
