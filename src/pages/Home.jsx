import React from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Default import for jwt-decode

const Home = () => {
    const navigate = useNavigate();

    // Decode the token and extract the username
    const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
    const decodedToken = token ? jwtDecode(token) : null;
    const username = decodedToken?.name;

    const handleLogout = () => {
        localStorage.clear(); // Clear local storage on logout
        navigate('/login'); // Redirect to the login page
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
            <h1 className="text-4xl font-bold mb-6">
                Welcome, {username || 'Guest'}!
            </h1>
            <button
                onClick={handleLogout}
                className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition-all duration-300"
            >
                Logout
            </button>
        </div>
    );
};

export default Home;
