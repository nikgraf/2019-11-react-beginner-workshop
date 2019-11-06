import React, { Component } from "react";
import { scaleTime, scaleLinear } from "d3-scale";
import { select } from "d3-selection";
import { extent, max } from "d3-array";
import { axisBottom, axisLeft } from "d3-axis";
import { timeParse } from "d3-time-format";
import { line } from "d3-shape";

// parse the date / time
const parseTime = timeParse("%d-%b-%y");
const data = [
  {
    date: parseTime("1-May-12"),
    close: 22.13
  },
  {
    date: parseTime("30-Apr-12"),
    close: 10.98
  },
  {
    date: parseTime("28-Apr-12"),
    close: 2.0
  }
];

// set the dimensions and margins of the graph
const margin = { top: 20, right: 20, bottom: 30, left: 50 };
const width = 960 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;
// set the ranges
const x = scaleTime().range([0, width]);
const y = scaleLinear().range([height, 0]);
// define the line
const valueline = line()
  .x(d => x(d.date))
  .y(d => y(d.close));

class D3Chart extends Component {
  constructor(props) {
    super(props);
    this.element = React.createRef();
  }

  componentDidMount() {
    // append the svg obgect to the element
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    const svg = select(this.element.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);
    // Scale the range of the data
    x.domain(extent(data, d => d.date));
    y.domain([0, max(data, d => d.close)]);
    // Add the valueline path.
    svg
      .append("path")
      .data([data])
      .attr("class", "line")
      .attr("d", valueline)
      .attr("style", "fill: none; stroke: steelblue; stroke-width: 2px;");
    // Add the X Axis
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(axisBottom(x));
    // Add the Y Axis
    svg.append("g").call(axisLeft(y));
  }

  render() {
    return <div className="d3-wrapper" ref={this.element} />;
  }
}

export default D3Chart;
