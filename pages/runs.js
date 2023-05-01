import { useState } from "react"
import { FaSignInAlt, FaSignOutAlt, FaUser} from "react-icons/fa"
import LoginForm from "@/Components/Page Components/Run Page Components/LoginForm"
import RegisterForm from '@/Components/Page Components/Run Page Components/RegisterForm'
import styles from '../styles/Page Styles/Runs.module.css'
import buttonStyles from '../styles/Page Component Styles/Button.module.css'

const runs = () => {
  const [modalLoginOpen, setModalLoginOpen] = useState(false)
  const [modalRegisterOpen, setModalRegisterOpen] = useState(false)
  const [modalUserOpen, setModalUserOpen] = useState(false)


  const handleLogin = () => {
    setModalLoginOpen(prev => !prev)
  }

  const handleRegister = () => {
    setModalRegisterOpen(prev => !prev)
  }

  const handleUserOpen = () => {
    setModalUserOpen(prev => !prev)
  }

  return (
    <>
      <header className={styles.header}>
        <button className={buttonStyles.button} onClick={handleLogin}>
          <FaSignInAlt /> Login
        </button>
        <button className={buttonStyles.button} onClick={handleRegister}>
          <FaUser /> Register
        </button>
      </header>
      {modalLoginOpen && (<LoginForm closeModal={handleLogin}/>)}
      {modalRegisterOpen && (<RegisterForm closeModal={handleRegister}/>)}
    </>
  )
}

export default runs