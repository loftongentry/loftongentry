import { useEffect, useRef } from "react"
import * as d3 from 'd3'

const RunGraph = ({ data }) => {
  
  const svgRef = useRef()

  useEffect(() => {
    //Taking the runData returned from MongoDB and creating a new data object that is better for displaying my data on a graph
    const chartData = data.map(item => ({
      date: item.date,
      runTime: item.runTime,
      runDistance: item.runDistance,
      avgPace: item.avgPace,
      avgHeartRate: item.avgHeartRate,
      activeCalories: item.activeCalories,
      totalCalories: item.totalCalories
    }))

    //Parameters of the size of the graph
    const margin = { top: 20, right: 20, bottom: 30, left: 50 }
    const width = 960 - margin.left - margin.right
    const height = 500 - margin.top - margin.bottom

    const svg = d3.select(svgRef.current)

    //Create a new element with a new time scale based on helper functions
    const x = d3.scaleTime()
      //Returns an array of evenly spaced numbers from the first element array to the last element in the array minus 1
      .range([0, width])
      //Sets the domain of the time scale to the earliest data and most recent date
      .domain(d3.extent(chartData, d => d.date))
      //Make sure that the start and end are on round date values
      .nice()
    
    const y = d3.scaleLinear().range([height, 0])

    const values = Object.keys(chartData[0]).filter((key) => key !== "date");

    y.domain([
      d3.min(chartData, d => d3.min(values, value => d[value])),
      d3.max(chartData, d => d3.max(values, value => d[value]))
    ])

    const line = d3.line()
      .x(d => x(d.date))
      .y(d => values?.map(value => y(d[value])))

    const paths = values?.map(value => {
      return {
        value: value,
        path: svg
          .append('path')
          .datum(chartData)
          .attr('fill', 'none')
          .attr('stroke', 'steelBlue')
          .attr('stroke-width', 1.5)
          .attr('d', line.y(d => y(d[value])))
      }
    })

    //Adding the X-axis
    svg
      .append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(x))

    //Adding the Y-axis
    svg.append('g').call(d3.axisLeft(y))

    //Adding the legend
    const legend = svg
      .selectAll('.legend')
      .data(paths)
      .enter()
      .append('g')
      .attr('class', 'legend')
      .attr('transform', (d, i) => `translate(0, ${i * 20})`)

    legend
      .append('rect')
      .attr('x', width -18)
      .attr('width', 18)
      .attr('height', 18)
      .style('fill', d => d.path.attr('stroke'))

    legend
      .append('text')
      .attr('x', width -24)
      .attr('y', 9)
      .attr('dy', '.35em')
      .style('text-anchor', 'end')
      .text(d => d.value)

  }, [data])

  return (
    <svg ref={svgRef}>

    </svg>
  )
}

export default RunGraph