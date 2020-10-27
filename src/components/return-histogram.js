import React from "react";

import { StaticQuery, graphql } from "gatsby";
import * as d3 from "d3";

class ReturnHistogram extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // set the dimensions and margins of the graph
    var margin = { top: 10, right: 30, bottom: 50, left: 55 },
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

    d3.json("/" + this.props.dataUrls["SANDP_YEARLY"], function (activeData) {
      let returns = d3
        .map(activeData, function (d) {
          return d.cagr;
        })
        .keys();

      // Max and min rounded to outter tenth
      let returnsMin = Math.floor(Math.min(...returns) * 10) / 10;
      let returnsMax = Math.ceil(Math.max(...returns) * 10) / 10;

      // set the ranges
      var x = d3
        .scaleLinear()
        .domain([returnsMin, returnsMax])
        .rangeRound([0, width]);
      var y = d3.scaleLinear().range([height, 0]);

      // set the parameters for the histogram
      var histogram = d3
        .histogram()
        .value(function (d) {
          return d.cagr;
        })
        .domain(x.domain())
        .thresholds([-0.4, -0.3, -0.2, -0.1, 0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6]);

      // append the svg object to the histogram element
      // append a 'group' element to 'svg'
      // moves the 'group' element to the top left margin
      var svg = d3
        .select("#histogram")
        .append("svg")
        //.attr("width", width + margin.left + margin.right)
        //.attr("height", height + margin.top + margin.bottom)
        .attr(
          "viewBox",
          `0 0 ${width + margin.left + margin.right} ${
            height + margin.top + margin.bottom
          }`
        )
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      // group the data for the bars
      let bins = histogram(activeData);

      // Scale the range of the data in the y domain
      y.domain([
        0,
        d3.max(bins, function (d) {
          return d.length;
        }),
      ]);

      // Interaction
      var mouseover = function (d) {
        let years = [];
        for (let i = 0; i < d.length; i++) {
          years.push(d[i].years);
        }
        document.getElementById("selected-years").innerText = years.join(", ");
        d3.select(this).transition().duration(100).style("opacity", 0.8);
      };

      var mouseleave = function (d) {
        document.getElementById("selected-years").innerText = "";
        d3.select(this).transition().duration(100).style("opacity", 1);
      };

      // Color
      const NEGATIVE_COLOR = "#a0544c"; // Dark Red
      const POSITIVE_COLOR = "#7a884e"; // Dark Green

      var binColor = function (value) {
        if (value < 0) {
          return NEGATIVE_COLOR;
        } else {
          return POSITIVE_COLOR;
        }
      };

      // append the bar rectangles to the svg element
      svg
        .selectAll("rect")
        .data(bins)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", 1)
        .attr("transform", function (d) {
          return "translate(" + x(d.x0) + "," + y(d.length) + ")";
        })
        .attr("width", function (d) {
          return x(d.x1) - x(d.x0) - 1;
        })
        .attr("height", function (d) {
          return height - y(d.length);
        })
        .style("fill", function (d) {
          return binColor(d.x0);
        })
        .on("mouseover", mouseover)
        .on("mouseleave", mouseleave);

      // add the x Axis
      svg
        .append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickFormat(d3.format(".0%")));

      // add the y Axis
      svg.append("g").call(d3.axisLeft(y));

      // Axis labels
      svg
        .append("g")
        .attr("transform", `translate(${-40},${height / 2})`)
        .append("text")
        .attr("text-anchor", "middle")
        .style("font-size", "20px")
        .attr("transform", "rotate(-90)")
        .text("Number of Years");

      svg
        .append("text")
        .attr("x", width / 2)
        .attr("y", height + 50)
        .attr("text-anchor", "middle")
        .style("font-size", "20px")
        .text("One Year Returns");

      svg
        .append("g")
        .attr("transform", `translate(${700},${0})`)
        //.append("rect")
        //.attr("width", "200")
        //.style("height", "300")
        //.style("fill", "white")
        //.style("stroke", "black")
        .append("foreignObject")
        .attr("width", 200)
        .attr("height", 400)
        .append("xhtml:div")
        .html(`<div id="selected-years"></div>`);

      // Hide loading div
      let element = document.getElementById("histogram-cover");
      element.classList.add("hidden");
    });
  }

  render() {
    return (
      <div className="cover-outer">
        <div id="histogram-cover" className="cover-inner">
          <div class="sk-folding-cube">
            <div class="sk-cube1 sk-cube"></div>
            <div class="sk-cube2 sk-cube"></div>
            <div class="sk-cube4 sk-cube"></div>
            <div class="sk-cube3 sk-cube"></div>
          </div>
        </div>
        <div id="histogram"></div>
      </div>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        dataUrls {
          SANDP_YEARLY
        }
      }
    `}
    render={data => <ReturnHistogram dataUrls={data.dataUrls} />}
  />
);
