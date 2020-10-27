import React from "react";

import { StaticQuery, graphql } from "gatsby";
import * as d3 from "d3";

const LABEL_STEP = 10; // How many years between axis labels
const LABEL_SIZE = 8;
const MAJOR_GRIDLINES = 10;
const MAJOR_GRIDLINES_SPACING = 1;

// Unfortunate adjustment variables to make chart look good
const X_AXIS_STRETCH = 4;
const X_AXIS_TRANSLATE_X = 10;
const X_AXIS_TRANSLATE_Y = 0;

const Y_AXIS_STRETCH = -26;
const Y_AXIS_TRANSLATE_X = 11.4;
const Y_AXIS_TRANSLATE_Y = 13;
const Y_AXIS_ROTATION = 45;
const Y_AXIS_LABEL_TRANSLATE_X = 2;
const Y_AXIS_LABEL_TRANSLATE_Y = 5;

const ADDITIONAL_SQUARE_LENGTH = 0.3;

class ReturnPyramid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.id = "pyramid-" + (Math.random() * 100000000).toFixed();
  }

  arrayOfLength(length, value) {
    let array = [];
    for (let i = 0; i < length; i++) {
      array.push(i * value);
    }
    return array;
  }

  componentDidMount() {
    // set the dimensions and margins of the graph
    const CHART_MARGIN = 12;
    const NON_CHART_MARGIN_TOP = 35;
    const NON_CHART_MARGIN_BOTTOM = 20;
    var margin = {
        top: CHART_MARGIN,
        right: CHART_MARGIN,
        bottom: CHART_MARGIN,
        left: CHART_MARGIN,
      },
      width = 450 - margin.left - margin.right,
      height = 450 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3
      .select("#" + this.id)
      .append("svg")
      //.attr("width", width + margin.left + margin.right)
      //.attr("height", height + margin.top + margin.bottom)
      .attr(
        "viewBox",
        `0 0 ${width + margin.left + margin.right} ${
          height +
          margin.top +
          margin.bottom +
          NON_CHART_MARGIN_BOTTOM +
          NON_CHART_MARGIN_TOP
        }`
      )
      .append("g")
      .attr(
        "transform",
        "translate(" + 0 + "," + (margin.top + NON_CHART_MARGIN_TOP) + ")"
      );

    /*
    let controlPanel = svg.append("g").attr("translate", "translate(500,300)");
    controlPanel
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", 300)
      .attr("height", 300)
      .style("stroke", "black");

    controlPanel
      .append("foreignObject")
      .attr("width", 100)
      .attr("height", 100)
      .append("xhtml:body")
      .html(
        `<div>
          <input type="radio" name="gender" value="male"> Male<br>
          <input type="radio" name="gender" value="female"> Female<br>
          <input type="radio" name="gender" value="other"> Other<br>
        </div>`
      )
      .on("click", function (d, i) {
        console.log(svg.select("#check").node().checked);
      });
      */

    /*
      .on("click", function () {
        console.log("HELLO!!");
        



        //select new data
        if (dataIndex == 1) {
          dataIndex = 2;
        } else {
          dataIndex = 1;
        }
        //rejoin data
        var circle = svgDoc
          .select("g")
          .selectAll("circle")
          .data(eval("dataArray" + dataIndex));

        circle.exit().remove(); //remove unneeded circles
        circle.enter().append("circle").attr("r", 0); //create any new circles needed

        //update all circles to new positions
        circle
          .transition()
          .duration(500)
          .attr("cx", function (d, i) {
            var spacing = lineLength / eval("dataArray" + dataIndex).length;
            return xBuffer + i * spacing;
          })
          .attr("cy", yBuffer)
          .attr("r", function (d, i) {
            return d;
          });

        d3.select("text").text("dataset" + dataIndex);
        */

    d3.json(
      "/" + this.props.dataUrls[this.props.mode],
      function (activeData) {
        var startYears = d3
          .map(activeData, function (d) {
            return d.startYear;
          })
          .keys();
        var endYears = d3
          .map(activeData, function (d) {
            return d.endYear;
          })
          .keys();

        // Build color scale
        const MIN_THRESHOLD = -0.03;
        const VERY_BAD_THRESHOLD = 0;
        const LITTLE_BAD_THRESHOLD = 0.03;
        const NEUTRAL_THRESHOLD = 0.07;
        const LITTLE_GOOD_THRESHOLD = 0.1;
        const MAX_THRESHOLD = 0.13;

        const VERY_BAD_COLOR = "#a0544c"; // Dark Red
        const LITTLE_BAD_COLOR = "#cda49b"; // Light Red
        const NEUTRAL_COLOR = "#cfccb6"; // Neutral
        const LITTLE_GOOD_COLOR = "#9aa675"; // Light Green
        const VERY_GOOD_COLOR = "#7a884e"; // Dark Green

        const COLOR_BAND_HEIGHT = 5;
        const COLOR_BAND_WIDTH = 125;

        let colorScale = d3
          .scaleLinear()
          .domain([MIN_THRESHOLD, MAX_THRESHOLD])
          .range([0, COLOR_BAND_WIDTH])
          .clamp(true);

        var myColor = function (value) {
          if (value < VERY_BAD_THRESHOLD) {
            return VERY_BAD_COLOR;
          } else if (value < LITTLE_BAD_THRESHOLD) {
            return LITTLE_BAD_COLOR;
          } else if (value < NEUTRAL_THRESHOLD) {
            return NEUTRAL_COLOR;
          } else if (value < LITTLE_GOOD_THRESHOLD) {
            return LITTLE_GOOD_COLOR;
          } else {
            return VERY_GOOD_COLOR;
          }
        };

        // Create color legend
        const COLOR_LEGEND_X = 10;
        const COLOR_LEGEND_Y = 170;

        let colorLegend = svg
          .append("g")
          .attr("transform", `translate(${COLOR_LEGEND_X},${COLOR_LEGEND_Y})`);

        let innerColorBand = colorLegend
          .append("g")
          .attr("transform", `translate(${0},${5})`);
        innerColorBand
          .append("rect")
          .attr("x", colorScale(MIN_THRESHOLD))
          .attr("y", 0)
          .attr(
            "width",
            colorScale(VERY_BAD_THRESHOLD) - colorScale(MIN_THRESHOLD)
          )
          .attr("height", COLOR_BAND_HEIGHT)
          .style("fill", VERY_BAD_COLOR);
        innerColorBand
          .append("rect")
          .attr("x", colorScale(VERY_BAD_THRESHOLD))
          .attr("y", 0)
          .attr(
            "width",
            colorScale(LITTLE_BAD_THRESHOLD) - colorScale(VERY_BAD_THRESHOLD)
          )
          .attr("height", COLOR_BAND_HEIGHT)
          .style("fill", LITTLE_BAD_COLOR);
        innerColorBand
          .append("rect")
          .attr("x", colorScale(LITTLE_BAD_THRESHOLD))
          .attr("y", 0)
          .attr(
            "width",
            colorScale(NEUTRAL_THRESHOLD) - colorScale(LITTLE_BAD_THRESHOLD)
          )
          .attr("height", COLOR_BAND_HEIGHT)
          .style("fill", NEUTRAL_COLOR);
        innerColorBand
          .append("rect")
          .attr("x", colorScale(NEUTRAL_THRESHOLD))
          .attr("y", 0)
          .attr(
            "width",
            colorScale(LITTLE_GOOD_THRESHOLD) - colorScale(NEUTRAL_THRESHOLD)
          )
          .attr("height", COLOR_BAND_HEIGHT)
          .style("fill", LITTLE_GOOD_COLOR);
        innerColorBand
          .append("rect")
          .attr("x", colorScale(LITTLE_GOOD_THRESHOLD))
          .attr("y", 0)
          .attr(
            "width",
            colorScale(MAX_THRESHOLD) - colorScale(LITTLE_GOOD_THRESHOLD)
          )
          .attr("height", COLOR_BAND_HEIGHT)
          .style("fill", VERY_GOOD_COLOR);

        let colorBandLabels = colorLegend
          .append("g")
          .style("font-size", "8px")
          .style("fill", "black")
          .attr("font-weight", 700)
          .attr("text-anchor", "middle")
          .attr("transform", `translate(${0},${0})`);

        let formatPercentage = function (input) {
          return "+" + Math.floor(input * 100) + "%";
        };

        colorBandLabels
          .append("text")
          .attr("x", colorScale(VERY_BAD_THRESHOLD))
          .attr("y", 0)
          .text(formatPercentage(VERY_BAD_THRESHOLD));

        colorBandLabels
          .append("text")
          .attr("x", colorScale(LITTLE_BAD_THRESHOLD))
          .attr("y", 0)
          .text(formatPercentage(LITTLE_BAD_THRESHOLD));

        colorBandLabels
          .append("text")
          .attr("x", colorScale(NEUTRAL_THRESHOLD))
          .attr("y", 0)
          .text(formatPercentage(NEUTRAL_THRESHOLD));

        colorBandLabels
          .append("text")
          .attr("x", colorScale(LITTLE_GOOD_THRESHOLD))
          .attr("y", 0)
          .text(formatPercentage(LITTLE_GOOD_THRESHOLD));

        // Create the tooltip
        let tooltip = colorLegend.append("g");
        tooltip
          .attr("text-anchor", "left")
          .style("border", "solid")
          .style("border-width", "2px")
          .style("border-radius", "5px")
          .style("font-size", "13px")
          .style("fill", "black");

        const TOOLTIP_LINE_SPANING = 15;
        const TOOLTIP_Y_OFFSET = 15;

        const POINTER_Y_OFFSET = 15;
        let pointer = tooltip
          .append("path")
          .attr("transform", `translate(${colorScale(0)},${POINTER_Y_OFFSET})`)
          .attr("d", d3.symbol().type(d3.symbolTriangle).size(35))
          .style("opacity", 0);

        let cagrReturn = tooltip
          .append("text")
          .attr("x", 0)
          .attr("y", TOOLTIP_Y_OFFSET + TOOLTIP_LINE_SPANING * 1)
          .text("Select a square");

        let startYear = tooltip
          .append("text")
          .attr("x", 0)
          .attr("y", TOOLTIP_Y_OFFSET + TOOLTIP_LINE_SPANING * 2)
          .text("on the chart to");

        let endYear = tooltip
          .append("text")
          .attr("x", 0)
          .attr("y", TOOLTIP_Y_OFFSET + TOOLTIP_LINE_SPANING * 3)
          .text("see returns");

        // Three function that change the tooltip when user hover / move / leave a cell
        var mouseover = function (d) {
          cagrReturn.text("Return: " + (d.return * 100).toFixed(2) + "%");
          startYear.text("Start: Jan " + d.startYear);
          endYear.text("End: Jan " + d.endYear);
          pointer
            .style("opacity", 1)
            .transition()
            .duration(500)
            .attr(
              "transform",
              `translate(${colorScale(d.return)},${POINTER_Y_OFFSET})`
            );
          d3.select(this).style("stroke", "black");

          // Move this to the top by removing it and adding it back
          //let parent = d3.select(this.parentNode);
          //let saved = d3.select(this).remove();
          //parent.node().appendChild(saved.node());
        };

        var mouseleave = function (d) {
          cagrReturn.text("Return: -");
          startYear.text("Start: Jan -");
          endYear.text("End: Jan -");
          pointer.style("opacity", 0);
          d3.select(this).style("stroke", null);
        };

        // X locations
        let xMin =
          Math.floor(Math.min(...endYears) / MAJOR_GRIDLINES) * MAJOR_GRIDLINES;
        let xMax =
          Math.ceil(Math.max(...endYears) / MAJOR_GRIDLINES) * MAJOR_GRIDLINES;
        let xPeriods = Math.ceil((xMax - xMin) / MAJOR_GRIDLINES);
        let x1 = d3
          .scaleBand()
          .domain(endYears)
          .range([0, width + 1])
          .padding(0.0);
        let x2 = d3
          .scaleQuantize()
          .domain([xMin, xMax + 1]) // +1 makes the white grid lines go where I like them
          .range(this.arrayOfLength(xPeriods, MAJOR_GRIDLINES_SPACING));

        // Y locations
        let yMin =
          Math.floor(Math.min(...startYears) / MAJOR_GRIDLINES) *
          MAJOR_GRIDLINES;
        let yMax =
          Math.ceil(Math.max(...startYears) / MAJOR_GRIDLINES) *
          MAJOR_GRIDLINES;
        let yPeriods = Math.ceil((yMax - yMin) / MAJOR_GRIDLINES);
        let y1 = d3
          .scaleBand()
          .domain(startYears)
          .range([0, height])
          .padding(0.0);
        let y2 = d3
          .scaleQuantize()
          .domain([yMin, yMax])
          .range(this.arrayOfLength(yPeriods, MAJOR_GRIDLINES_SPACING));

        svg
          .selectAll()
          .data(activeData, function (d) {
            return d.endYear + ":" + d.startYear;
          })
          .enter()
          .append("rect")
          .attr("x", function (d) {
            // x1 put the squares at even distances
            // x2 for every decade, shift the squares right a bit
            return x1(d.endYear) + x2(d.endYear);
          })
          .attr("y", function (d) {
            // y1 put the squares at even distances
            // y2 for every decade, shift the squares down a bit

            return y1(d.startYear) + y2(d.startYear);
          })
          .attr("rx", 0)
          .attr("ry", 0)
          .attr("width", function (d) {
            return x1.bandwidth() + ADDITIONAL_SQUARE_LENGTH;
          })
          .attr("height", function (d) {
            return y1.bandwidth() + ADDITIONAL_SQUARE_LENGTH;
          })
          .style("fill", function (d) {
            return myColor(d.return);
          })
          //.style("stroke-width", 4)
          //.style("stroke", "none")
          //.style("opacity", 0.8)
          .on("mouseover", mouseover)
          //.on("mousemove", mousemove)
          .on("mouseleave", mouseleave);

        // Build X axis:
        let labeledYearsX = endYears.filter(v => v % LABEL_STEP === 0);

        let xAxisScale = d3
          .scaleBand()
          .domain(labeledYearsX)
          .range([0, width + xPeriods + X_AXIS_STRETCH])
          .padding(0.01);
        svg
          .append("g")
          .style("font-size", LABEL_SIZE)
          .call(d3.axisTop(xAxisScale).tickSize(4))
          .attr(
            "transform",
            `translate(${X_AXIS_TRANSLATE_X},${X_AXIS_TRANSLATE_Y})`
          )
          .select(".domain")
          .remove();

        // Build Y axis:
        let labeledYearsY = startYears.filter(v => v % LABEL_STEP === 0);
        let yAxisScale = d3
          .scaleBand()
          .domain(labeledYearsY)
          .range([
            0,
            Math.sqrt(
              Math.pow(height + yPeriods + Y_AXIS_STRETCH, 2) +
                Math.pow(width + xPeriods + Y_AXIS_STRETCH, 2)
            ),
          ])
          .padding(0.01);
        let yAxis = svg
          .append("g")
          .style("font-size", LABEL_SIZE)
          .attr(
            "transform",
            `translate(${Y_AXIS_TRANSLATE_X},${Y_AXIS_TRANSLATE_Y}) rotate(${-Y_AXIS_ROTATION})`
          )
          .call(d3.axisLeft(yAxisScale).tickSize(4));
        yAxis.select(".domain").remove();
        yAxis
          .selectAll("text")
          .attr(
            "transform",
            `rotate(${Y_AXIS_ROTATION}) translate(${Y_AXIS_LABEL_TRANSLATE_X},${Y_AXIS_LABEL_TRANSLATE_Y})`
          );

        // Add withdrawal label
        const WITHDRAWAL_LABEL_X = 10;
        const WITHDRAWAL_LABEL_Y = -36;
        let withdrawalLabel = svg.append("g");
        withdrawalLabel
          .append("rect")
          .attr("x", WITHDRAWAL_LABEL_X)
          .attr("y", WITHDRAWAL_LABEL_Y)
          .attr("rx", 4)
          .attr("ry", 4)
          .attr("width", 165)
          .attr("height", 15)
          .style("fill", "black");
        withdrawalLabel
          .append("text")
          .attr("x", WITHDRAWAL_LABEL_X + 4)
          .attr("y", WITHDRAWAL_LABEL_Y + 12)
          .attr("text-anchor", "left")
          .style("font-size", "13px")
          .style("fill", "white")
          .text("Money withdrawn in Jan of");

        // Add invested label
        const INVEST_LABEL_X = 10;
        const INVEST_LABEL_Y = 105;
        let investLabel = svg.append("g");
        if (this.props.mode === "CAGR_URL") {
          investLabel
            .append("rect")
            .attr("x", INVEST_LABEL_X)
            .attr("y", INVEST_LABEL_Y)
            .attr("rx", 4)
            .attr("ry", 4)
            .attr("width", 60)
            .attr("height", 40)
            .style("fill", "black");
        } else {
          investLabel
            .append("rect")
            .attr("x", INVEST_LABEL_X)
            .attr("y", INVEST_LABEL_Y)
            .attr("rx", 4)
            .attr("ry", 4)
            .attr("width", 60)
            .attr("height", 53)
            .style("fill", "black");
        }
        investLabel
          .append("text")
          .attr("x", INVEST_LABEL_X + 4)
          .attr("y", INVEST_LABEL_Y + 12)
          .attr("text-anchor", "left")
          .style("font-size", "13px")
          .style("fill", "white")
          .text("Money");
        investLabel
          .append("text")
          .attr("x", INVEST_LABEL_X + 4)
          .attr("y", INVEST_LABEL_Y + 26)
          .attr("text-anchor", "left")
          .style("font-size", "13px")
          .style("fill", "white")
          .text("invested");

        if (this.props.mode === "CAGR_URL") {
          investLabel
            .append("text")
            .attr("x", INVEST_LABEL_X + 4)
            .attr("y", INVEST_LABEL_Y + 38)
            .attr("text-anchor", "left")
            .style("font-size", "13px")
            .style("fill", "white")
            .text("in Jan of");
        } else {
          investLabel
            .append("text")
            .attr("x", INVEST_LABEL_X + 4)
            .attr("y", INVEST_LABEL_Y + 38)
            .attr("text-anchor", "left")
            .style("font-size", "13px")
            .style("fill", "white")
            .text("starting");
          investLabel
            .append("text")
            .attr("x", INVEST_LABEL_X + 4)
            .attr("y", INVEST_LABEL_Y + 50)
            .attr("text-anchor", "left")
            .style("font-size", "13px")
            .style("fill", "white")
            .text("in Jan of");
        }

        //this.props.mode;

        // Add title to graph
        /*
        svg
          .append("text")
          .attr("x", 0)
          .attr("y", -70)
          .attr("text-anchor", "9left")
          .style("font-size", "22px")
          .text(this.props.title);

        // Add subtitle to graph
        svg
          .append("text")
          .attr("x", 0)
          .attr("y", -50)
          .attr("text-anchor", "left")
          .style("font-size", "14px")
          .style("fill", "grey")
          .style("max-width", 400)
          .text("When you start and when you finish");
          */

        // Hide loading div
        let element = document.getElementById(this.id + "-cover");
        element.classList.add("hidden");
      }.bind(this)
    );
  }

  render() {
    return (
      <div className="cover-outer">
        <div id={this.id + "-cover"} className="cover-inner">
          <div className="sk-folding-cube">
            <div className="sk-cube1 sk-cube"></div>
            <div className="sk-cube2 sk-cube"></div>
            <div className="sk-cube4 sk-cube"></div>
            <div className="sk-cube3 sk-cube"></div>
          </div>
        </div>
        <div id={this.id}></div>
      </div>
    );
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        dataUrls {
          IRR_URL
          CAGR_URL
          IRR_DCA_URL
        }
      }
    `}
    render={data => (
      <ReturnPyramid
        title={props.title}
        mode={props.mode}
        dataUrls={data.dataUrls}
      />
    )}
  />
);
