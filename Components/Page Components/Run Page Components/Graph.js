//TODO: Graph should be a 2x2 grid until a certain screen width
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { Line } from 'react-chartjs-2'
import styles from '@/styles/Page Component Styles/Run Page Styles/Graph.module.css'
import { convertToTimeFormat } from '@/config/convertToTimeFormat'

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

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