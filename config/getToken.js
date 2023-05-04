export const getToken = () => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem('user'))?.token;
  }
  return null
}