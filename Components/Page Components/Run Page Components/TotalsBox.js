import styles from '@/styles/Page Component Styles/Run Page Styles/TotalsBox.module.css'
import { convertToTimeFormat } from '@/config/convertToTimeFormat'

const TotalsBox = ({ data }) => {
  console.log(data)
  
  return (
    <div className={styles.boxContainer}>
      <div>
        <h4>Totals</h4>
        <p>Total Time Ran: {convertToTimeFormat(`${data[0].totalRunTime}`)}</p>
        <p>Total Distance Run: {`${data[0].totalRunTime}`}</p>
        <p>Total Active Calories Burned: {`${data[0].totalActiveCalories}`}</p>
        <p>Total Calories Burned: {`${data[0].absoluteTotalCalories}`}</p>
      </div>
      <div>
        <h4>Average Per Run</h4>
        <p>Average Run Time: {convertToTimeFormat(`${data[0].avgRunTime}`)}</p>
        <p>Average Run Distance: {`${data[0].avgRunDistance}`}</p>
        <p>Average Pace: {convertToTimeFormat(`${data[0].avgPace}`)}</p>
        <p>Average Heart Rate: {`${data[0].absoluteHeartRate}`}</p>
        <p>Average Active Calories: {`${data[0].averageActiveCalories}`}</p>
        <p>Average Total Calories: {`${data[0].avgTotalCalories}`}</p>
      </div>
    </div>
  )
}

export default TotalsBox