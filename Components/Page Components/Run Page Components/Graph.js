//TODO: Graph should be a 2x2 grid until a certain screen width
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { Line } from 'react-chartjs-2'
import styles from '@/styles/Page Component Styles/Run Page Styles/Graph.module.css'
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const convertToTimeFormat = (totalSeconds) => {
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  const formattedHours = hours.toString().padStart(2, '0')
  const formatterMinutes = hours > 0 ? minutes.toString().padStart(2, '0') : minutes.toString().padStart(1, '0')
  const formattedSeconds = seconds.toString().padStart(2, '0')

  let timeFormat = ''
  if (hours > 0) {
    timeFormat = `${formattedHours}:${formatterMinutes}:${formattedSeconds}`
  } else if (minutes > 0) {
    timeFormat = `${formatterMinutes}:${formattedSeconds}`
  } else {
    timeFormat = `${formattedSeconds}`
  }

  return timeFormat
}

const Graph = ({ data, graphName, dataPropName, timeFormatting }) => {
  let datasets = []

  if (Array.isArray(dataPropName)) {
    datasets = dataPropName.map((propName, index) => ({
      label: graphName[index],
      data: data()?.map(d => ({
        x: d.date.substring(0, 10),
        y: d[propName],
      })),
      backgroundColor: ['lightblue', 'red'],
      borderColor: 'gray',
      borderWidth: 1,
    }))
  } else {
    datasets = [{
      label: graphName,
      data: data()?.map(d => ({
        x: d.date.substring(0, 10),
        y: d[dataPropName],
      })),
      backgroundColor: 'lightblue',
      borderColor: 'gray',
      borderWidth: 1,
    }]
  }

  const runData = {
    datasets: datasets,
  }

  const options = {
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const datasetLabel = context.dataset.label || ''
            const dataPoint = context.parsed.y
            const formattedValue = timeFormatting ? convertToTimeFormat(dataPoint) : dataPoint

            return `${datasetLabel}: ${formattedValue}`
          }
        }
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        ticks: {
          callback: (value) => timeFormatting ? convertToTimeFormat(value) : value,
        }
      }
    },
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

export default Graph