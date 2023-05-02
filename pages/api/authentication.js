import axios from "axios";
import { httpClient } from "@/config/httpClient";

//Register a user
export const register = async (userData) => {
  try {
    const response = await httpClient.post('/api/users/register', userData)

    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
  } catch (error) {
    throw new Error(error.response.data.message)
  }
}

//Login a user
export const login = async (userData) => {
  try {
    const response = await httpClient.post('/api/users/login', userData)

    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
  } catch (error) {
    throw new Error(error.response.data.message)
  }
}

//Logout user
export const logout = () => {
  localStorage.removeItem('user')
}