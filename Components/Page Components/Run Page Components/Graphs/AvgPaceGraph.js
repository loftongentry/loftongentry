import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { Line } from 'react-chartjs-2'
import styles from '@/styles/Graph.module.css'
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const AvgPaceGraph = ({ data }) => {
  const chartData = data?.map(d => ({
    date: d.date.substring(0, 10),
    avgPace: d.avgPace,
  }))

  const runData = {
    labels: chartData?.map(d => d.date),
    datasets: [{
      data: chartData?.map(d => d.avgPace),
    }]
  }

  const options = {
    maintainAspectRatio: false,
  }

  return (
    <div className={styles.graphWrapper}>
      <Line
        data={runData}
        options={options}
        height={400}
      />
    </div>
  )
}

export default AvgPaceGraph