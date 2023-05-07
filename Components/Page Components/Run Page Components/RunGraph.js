import { useEffect, useRef } from "react"
import * as d3 from 'd3'

const RunGraph = ({data}) => {
  const svgRef = useRef(null)

  useEffect(() => {
    const svg = d3.select(svgRef.current)

    const width = 500
    const height = 300
    const margin = {top: 20, right: 20, bottom: 30, left: 50}
    const graphWidth = width - margin.left - margin.right
    const graphHeight = height - margin.top - margin.bottom

    const xScale = d3.scaleTime().range([0, graphWidth])
    const yScale = d3.scaleLinear().range([graphHeight, 0])

    const xAxis = d3.axisBottom().scale(xScale)
    const yAxis = d3.axisLeft().scale(yScale)

    const line = d3
      .line()
      .x(d => xScale(d.date))
      .y(d => yScale(d.value))

    data.forEach(d => {
      d.date = new Date(d.date)
      d.value = +d.value
    })

    xScale.domain(d3.extent(data, d => d.date))
    yScale.domain([0, d3.max(data, d => d.value)])

    svg
      .append('g')
      .attr('transform', `translate(${margin.left}, ${graphHeight + margin.top})`)
      .call(xAxis)

    svg
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`)
      .call(yAxis)
  
    svg
      .append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 1.5)
      .attr('d', line)
  
    }, [data])

  return (
    <svg ref={svgRef}>
      
    </svg>
  )
}

export default RunGraph