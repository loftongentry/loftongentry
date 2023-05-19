import styles from '@/styles/Page Component Styles/Run Page Styles/TotalsBox.module.css'
import { convertToTimeFormat } from '@/config/convertToTimeFormat'

const TotalsBox = ({ data }) => {
  console.log(data)

  return (
    <div className={styles.boxContainer}>
      <div className={styles.boxWrapper}>
        <p className={styles.boxHeader}>Totals</p>
        <p>Total Time Ran: <strong>{convertToTimeFormat(`${data[0].totalRunTime}`)}</strong></p>
        <p>Total Distance Run: <strong>{`${data[0].totalRunTime}`}</strong></p>
        <p>Total Active Calories Burned: <strong>{`${data[0].totalActiveCalories}`}</strong></p>
        <p>Total Calories Burned: <strong>{`${data[0].absoluteTotalCalories}`}</strong></p>
      </div>
      <div className={styles.boxWrapper}>
        <p className={styles.boxHeader}>Average Per Run</p>
        <p>Average Run Time: <strong>{convertToTimeFormat(`${data[0].avgRunTime}`)}</strong></p>
        <p>Average Run Distance: <strong>{`${data[0].avgRunDistance}`}</strong></p>
        <p>Average Pace: <strong>{convertToTimeFormat(`${data[0].avgPace}`)}</strong></p>
        <p>Average Heart Rate: <strong>{`${data[0].absoluteAvgHeartRate}`}</strong></p>
        <p>Average Active Calories: <strong>{`${data[0].avgActiveCalories}`}</strong></p>
        <p>Average Total Calories: <strong>{`${data[0].avgTotalCalories}`}</strong></p>
      </div>
    </div>
  )
}

export default TotalsBox