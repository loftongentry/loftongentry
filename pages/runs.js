import { useEffect, useState } from "react"
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"
import LoginForm from "@/Components/Page Components/Run Page Components/LoginForm"
import RegisterForm from '@/Components/Page Components/Run Page Components/RegisterForm'
import RunDataForm from "@/Components/Page Components/Run Page Components/RunDataForm"
import { logout } from "./api/authenticationAPI"
import { getRuns } from "./api/runAPI"
import styles from '@/styles/Page Styles/Runs.module.css'
import buttonStyles from '@/styles/Global Component Styles/Button.module.css'
import RunGraph from "@/Components/Page Components/Run Page Components/RunGraph"

const data = [
  { date: "2022-01-01", value: 100 },
  { date: "2022-01-02", value: 150 },
  { date: "2022-01-03", value: 200 },
  { date: "2022-01-04", value: 170 },
  { date: "2022-01-05", value: 220 },
  { date: "2022-01-06", value: 250 },
  { date: "2022-01-07", value: 200 }
];

const runs = () => {
  const [modalLoginOpen, setModalLoginOpen] = useState(false)
  const [modalRegisterOpen, setModalRegisterOpen] = useState(false)
  const [modalRunForm, setModalRunForm] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [runData, setRunData] = useState([])

  useEffect(() => {
    const user = window.localStorage.getItem('user')
    if (user) {
      setLoggedIn(true)
      getRuns().then(runs => setRunData(runs))
    }
  }, [])

  const handleLogout = () => {
    logout()
    setLoggedIn(false)
  }

  return (
    <>
      <header className={styles.header}>
        {!loggedIn ?
          (<div><button className={buttonStyles.button} onClick={() => setModalLoginOpen(prev => !prev)}>
            <FaSignInAlt /> Login
          </button>
            <button className={buttonStyles.button} onClick={() => setModalRegisterOpen(prev => !prev)}>
              <FaUser /> Register
            </button>
          </div>)
          :
          (<div>
            <button className={buttonStyles.button} onClick={() => setModalRunForm(prev => !prev)}>
              Register New Run
            </button>
            <button className={buttonStyles.button} onClick={handleLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </div>)}
      </header>
      {modalLoginOpen && (<LoginForm closeModal={() => setModalLoginOpen(prev => !prev)} />)}
      {modalRegisterOpen && (<RegisterForm closeModal={() => setModalRegisterOpen(prev => !prev)} />)}
      {modalRunForm && (<RunDataForm closeModal={() => setModalRunForm(prev => !prev)} />)}
      {/* {runData && <RunGraph data={runData}/>} */}
      <RunGraph data={data} />
    </>
  )
}

export default runs