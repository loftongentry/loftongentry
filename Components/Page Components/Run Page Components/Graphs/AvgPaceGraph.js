import { useEffect, useRef } from "react"
import * as d3 from 'd3'

const RunGraph = ({ data }) => {
  const svgRef = useRef()

  useEffect(() => {
    //Taking the runData returned from MongoDB and creating a new data object that is better for displaying my data on a graph
    const chartData = data.map(item => ({
      date: item.date,
      avgPace: item.avgPace,
    }))

    const margin = { top: 20, right: 20, bottom: 30, left: 50 }
    const width = 960 - margin.left - margin.right
    const height = 500 - margin.top - margin.bottom

    const svg = d3.select(svgRef.current)

    //Maps a continuous time domain to a continuous output range, such as mapping a date value to a position along a time axis
    const x = d3.scaleTime()
      //Returns an array of evenly spaced numbers from the first element array to the last element in the array minus 1 (Basically just for generating tick marks on a graph)
      .range([0, width])
      /*
      Sets the domain of the time scale to the earliest data and most recent date. (Domain is basically the maximum and minimum values that an axis can handle)
      `d3.extent` finds the maximum and minimum values as specified in the data set
      */
      .domain(d3.extent(chartData, d => d.date))
      .nice()

    //Maps a continuous input domain to a continuous output range such a mapping a data value to a position along an axis or pixel size
    const y = d3.scaleLinear()
      .range([height, 0])
      .nice()

    //creates a new array called values that contains all the keys of the first object in the chartData array except for the key 'date'. (The only other key is avgPace)
    const values = Object.keys(chartData[0]).filter(key => key !== "date");

    //Sets the domain of the y-scale to the minimum and maxiumum values found (In this case it is only avgPace, but it can be used for multiple keys)
    y.domain([
      d3.min(chartData, d => d3.min(values, value => d[value])),
      d3.max(chartData, d => d3.max(values, value => d[value]))
    ])

    //Create a line generator function
    const line = d3.line()
      //Sets the x coordinate of each data point to be the date value of the data point, scaled using the 'x' scale
      .x(d => x(d.date))
      //Sets the y coordinate of each data point to be the date value of the data point, scaled using the 'y' scale
      .y(d => y(d.avgPace))

    //Maps over the array of keys in 'values' to create an array of line objects
    const paths = values?.map(value => {
      //Creates an object for each 'value' which contains a 'value' key with the name of the value and a 'path' key with a D3 selection of a new 'path' element created on the 'svg' element
      return {
        value: value,
        path: svg
          .append('path')
          .datum(chartData)
          //These are all styling attributes of the lines that are generated
          .attr('fill', 'none')
          .attr('stroke', 'steelBlue')
          .attr('stroke-width', 1.5)
          //Sets the 'd' attribute of the path element to the line generated by the line function for the current value
          .attr('d', line.y(d => y(d[value])))
      }
    })
    console.log(paths)
    //Generates a horizontal axis with tick marks and labels based on the x scale that was previously defined and appends it to the bottom of the SVG
    svg
      .append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(x))

    //Generates a vertical axis with tick marks and labels based on the y scale that was previously defined and appends it to the left side of the SVG
    svg.append('g').call(d3.axisLeft(y))

    //Adding the legend
    // const legend = svg
    //   .selectAll('.legend')
    //   .data(paths)
    //   .enter()
    //   .append('g')
    //   .attr('class', 'legend')
    //   .attr('transform', (d, i) => `translate(0, ${i * 20})`)

    // legend
    //   .append('rect')
    //   .attr('x', width - 18)
    //   .attr('width', 18)
    //   .attr('height', 18)
    //   .style('fill', d => d.path.attr('stroke'))

    // legend
    //   .append('text')
    //   .attr('x', width - 24)
    //   .attr('y', 9)
    //   .attr('dy', '.35em')
    //   .style('text-anchor', 'end')
    //   .text(d => d.value)
    console.log(typeof chartData[0].avgPace)
  }, [data])

  
  return (
    <svg ref={svgRef}>

    </svg>
  )
}

export default RunGraph