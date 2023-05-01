import axios from "axios";
import { httpClient } from "@/config/httpClient";

//Register a user
export const register = async (userData) => {
  const response = await httpClient.post('/api/users/register', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

//Login a user
export const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

//Logout user
export const logout = () => {
  localStorage.removeItem('user')
}