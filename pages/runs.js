import { useEffect, useState } from "react"
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"
import LoginForm from "@/Components/Page Components/Run Page Components/LoginForm"
import RegisterForm from '@/Components/Page Components/Run Page Components/RegisterForm'
import RunDataForm from "@/Components/Page Components/Run Page Components/RunDataForm"
import { logout } from "./api/authenticationAPI"
import styles from '@/styles/Page Styles/Runs.module.css'
import buttonStyles from '@/styles/Global Component Styles/Button.module.css'

const runs = () => {
  const [modalLoginOpen, setModalLoginOpen] = useState(false)
  const [modalRegisterOpen, setModalRegisterOpen] = useState(false)
  const [modalRunForm, setModalRunForm] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const user = window.localStorage.getItem('user')
    if (user) {
      setLoggedIn(true)
    }
  }, [])

  const handleLogin = () => {
    setModalLoginOpen(prev => !prev)
  }

  const handleRegister = () => {
    setModalRegisterOpen(prev => !prev)
  }

  const handleRunForm = () => {
    setModalRunForm(prev => !prev)
  }

  const handleLogout = () => {
    logout()
    setLoggedIn(false)
  }

  return (
    <>
      <header className={styles.header}>
        {!loggedIn ?
          (<div><button className={buttonStyles.button} onClick={handleLogin}>
            <FaSignInAlt /> Login
          </button>
            <button className={buttonStyles.button} onClick={handleRegister}>
              <FaUser /> Register
            </button>
          </div>)
          :
          (<div>
            <button className={buttonStyles.button} onClick={handleRunForm}>
              Register New Run
            </button>
            <button className={buttonStyles.button} onClick={handleLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </div>)}
      </header>
      {modalLoginOpen && (<LoginForm closeModal={handleLogin} />)}
      {modalRegisterOpen && (<RegisterForm closeModal={handleRegister} />)}
      {modalRunForm && (<RunDataForm closeModal={handleRunForm} />)}
    </>
  )
}

export default runs