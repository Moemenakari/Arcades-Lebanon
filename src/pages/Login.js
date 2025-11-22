// src/pages/Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Storage key for the list of registered users (Mock Database)
const USERS_STORAGE_KEY = 'registeredUsers';
// Storage key for the current login status
const LOGIN_STATUS_KEY = 'isLoggedIn';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isRegistering, setIsRegistering] = useState(false); // State to toggle between Register and Login
    const navigate = useNavigate();

    // Check current login status
    const isLoggedIn = localStorage.getItem(LOGIN_STATUS_KEY) === 'true';

    // Function to retrieve registered users from localStorage
    const getRegisteredUsers = () => {
        const usersJson = localStorage.getItem(USERS_STORAGE_KEY);
        // If data exists, parse it; otherwise, return an empty array
        return usersJson ? JSON.parse(usersJson) : [];
    };

    // Function to handle new user registration
    const handleRegister = (e) => {
        e.preventDefault();
        setError('');

        const users = getRegisteredUsers();

        // 1. Check if the username already exists
        if (users.find(user => user.username === username)) {
            setError('This username is already taken. Please choose another one.');
            return;
        }

        // 2. Add the new user (Mock Database update)
        const newUser = { username, password };
        users.push(newUser);
        localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));

        // 3. Automatic login after successful registration
        localStorage.setItem(LOGIN_STATUS_KEY, 'true');
        alert(`User ${username} registered successfully! You are now logged in.`);
        navigate('/sellmachines'); // Redirect to a protected page
    };

    // Function to handle user login
    const handleLogin = (e) => {
        e.preventDefault();
        setError('');

        const users = getRegisteredUsers();

        // 1. Search for the user in the mock database
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            // 2. Successful login for a registered user
            localStorage.setItem(LOGIN_STATUS_KEY, 'true');
            navigate('/sellmachines'); 
        } else if (username === 'admin' && password === '123') {
            // 3. Maintain Admin login capability
            localStorage.setItem(LOGIN_STATUS_KEY, 'true');
            navigate('/sellmachines');
        } else {
            // 4. Failed login
            setError('Invalid username or password.');
        }
    };

    // Function to handle user logout
    const handleLogout = () => {
        localStorage.removeItem(LOGIN_STATUS_KEY); // Remove login status
        navigate('/'); // Redirect to the home page
    };

    // Determine which function to call on form submission
    const handleSubmit = isRegistering ? handleRegister : handleLogin;

    return (
        <div className="flex items-center justify-center min-h-[70vh] bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-xl">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    {isLoggedIn 
                        ? 'User Dashboard' 
                        : isRegistering ? 'Register New User' : 'User Login'}
                </h2>

                {isLoggedIn ? (
                    // State: User is logged in
                    <div className="text-center">
                        <p className="text-lg text-green-600 mb-4">
                            Welcome! You now have access to protected pages.
                        </p>
                        <button
                            onClick={handleLogout}
                            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-200"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    // State: User is not logged in (Show Login/Register form)
                    <form onSubmit={handleSubmit}>
                        {error && (
                            <p className="text-red-500 text-center mb-4">{error}</p>
                        )}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your username"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <div className="flex flex-col space-y-4">
                            <button
                                type="submit"
                                className={`w-full py-2 rounded-lg text-white font-bold transition duration-200 ${isRegistering ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-700'}`}
                            >
                                {isRegistering ? 'Register Account' : 'Login'}
                            </button>
                            <button
                                type="button"
                                onClick={() => setIsRegistering(!isRegistering)}
                                className="w-full text-sm text-gray-600 hover:text-gray-800"
                            >
                                {isRegistering ? 'Already have an account? Click to Login' : 'Don\'t have an account? Click to Register'}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Login;
