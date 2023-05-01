import axios from "axios";

//Register a user
export const register = async (userData) => {
  const response = await axios.post('http://localhost:5000/api/users/register', userData)

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