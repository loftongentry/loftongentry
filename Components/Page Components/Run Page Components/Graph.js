//TODO: Graph should be a 2x2 grid until a certain screen width
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { Line } from 'react-chartjs-2'
import styles from '@/styles/Page Component Styles/Graph.module.css'
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const Graph = ({ data, graphName, dataPropName }) => {
  let dataPropValue

  if(Array.isArray(dataPropName)) {
    dataPropValue = dataPropName.map((propName, index) => ({
      label: graphName[index],
      data: data()?.map(d => d[propName]),
      backgroundColor: 'lightblue',
      borderColor: 'gray',
      borderWidth: 1,
    }))
  } else{
    dataPropValue = [{
      label: graphName,
      data: data()?.map(d => d[dataPropName]),
      backgroundColor: 'lightblue',
      borderColor: 'gray',
      borderWidth: 1,
    }]
  }

  const runData = {
    labels: data()?.map(d => d.date.substring(0,10)),
    datasets: dataPropValue,
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

export default Graph