import { useEffect, useState } from "react"
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"
import LoginForm from "@/Components/Page Components/Run Page Components/LoginForm"
import RegisterForm from '@/Components/Page Components/Run Page Components/RegisterForm'
import RunDataForm from "@/Components/Page Components/Run Page Components/RunDataForm"
import { logout } from "./api/authenticationAPI"
import { getRuns } from "./api/runAPI"
import styles from '@/styles/Page Styles/Runs.module.css'
import buttonStyles from '@/styles/Global Component Styles/Button.module.css'
import Graph from "@/Components/Page Components/Run Page Components/Graphs/Graph"

const runs = () => {
  const [modalLoginOpen, setModalLoginOpen] = useState(false)
  const [modalRegisterOpen, setModalRegisterOpen] = useState(false)
  const [modalRunForm, setModalRunForm] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [runData, setRunData] = useState([])

  useEffect(() => {
    const user = window.localStorage.getItem('user')
    if (user) {
      getRuns().then(runs => setRunData(runs))
      setLoggedIn(true)
    }
  }, [])

  const handleLogout = () => {
    logout()
    setLoggedIn(false)
  }

  const chartData = runData?.map(d => ({
    date: d.date,
    runTime: d.runTime,
    runDistance: d.runDistance,
    avgPace: d.avgPace,
    avgHeartRate: d.avgHeartRate,
    activeCalories: d.activeCalories,
    totalCalories: d.totalCalories,
  }))

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
      <div className={styles.graphContainer}>
        {runData.length > 0 &&
          <div>
            <Graph
              graphName='Run Time'
              dataPropName='runTime'
              data={() => runData?.map(d => ({
                date: d.date,
                runTime: d.runTime,
              }))}
            />
            <Graph
              graphName='Run Distance'
              dataPropName='runDistance'
              data={() => runData?.map(d => ({
                date: d.date,
                runDistance: d.runDistance
              }))}
            />
            <Graph
              graphName='Average Pace'
              dataPropName='avgPace'
              data={() => runData?.map(d => ({
                date: d.date,
                avgPace: d.avgPace
              }))}
            />
            <Graph
              graphName='Average Heart Rate'
              dataPropName='avgHeartRate'
              data={() => runData?.map(d => ({
                date: d.date,
                avgHeartRate: d.avgHeartRate
              }))}
            />
            <Graph
              graphName={['Active Calories', 'Total Calories']}
              dataPropName={['activeCalories', 'totalCalories']}
              data={() => runData?.map(d => ({
                date: d.date,
                activeCalories: d.activeCalories,
                totalCalories: d.totalCalories,
              }))}
            />
          </div>
        }
      </div>
    </>
  )
}

export default runs