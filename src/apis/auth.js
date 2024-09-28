import axios from "axios"

// const BACKEND_URL = 'http://localhost:3000/api'
const BACKEND_URL = 'https://vistaar-backend.onrender.com/api'


export const login = async (email, password) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/login`, {
            email,
            password
        })
        return response.data
    } catch (error) {
        if (error.response) {
            throw error.response.data;
        } else if (error.request) {
            throw new Error('No response received from server');
        } else {
            throw new Error('Error setting up the request');
        }
    }
}

export const signup = async (name, email, password) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/signup`,
            {
                name, email, password
            }
        )
        return response.data
    } catch (error) {
        if (error.response) {
            throw error.response.data;
        } else if (error.request) {
            throw new Error('No response received from server');
        } else {
            throw new Error('Error setting up the request');
        }
    }
}