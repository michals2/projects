
// state
let activeField = "life"
const colors = {
  smoking: "#800026",
  life: "#2977f4",
  white: "#ffffff"
}

const getPaths = new Promise((resolve, reject) => {
  d3.json("./data/paths.json", data => {
    resolve(data);
  });
})

const getStateData = new Promise((resolve, reject) => {
  d3.json("./data/smoking-deaths.json", data => {
    const smokingLimits = [8, 25];
    const lifeLimits = [75, 82];
    const formattedData = {};
    data.forEach(e => {
      const smokingPercent = (e.percentSmokers - smokingLimits[0]) / (smokingLimits[1] - smokingLimits[0]);
      const lifePercent = (e.lifeExpectancy - lifeLimits[0]) / (lifeLimits[1] - lifeLimits[0]);
      formattedData[e.abbreviation] = {
        percentSmokers: +[e.percentSmokers],
        lifeExpectancy: +[e.lifeExpectancy],
        smokingColor: d3.interpolate(colors.white, colors.smoking)(smokingPercent),
        lifeColor: d3.interpolate(colors.white, colors.life)(lifePercent),
      }
    })
    resolve(formattedData);
  });
})

Promise.all([getPaths, getStateData])
  .then(values => {
    const [pathsData, statesData] = values;
    populateMap(pathsData, statesData)
  });

function populateMap(pathsData, statesData) {

  function drawMap(pathsData, statesData) {

    const svg = d3.select("#statesSVG");
    const toggleButton = d3.select("#toggleButton");

    svg.selectAll(".state")
      .data(pathsData)
      .enter()
      .append("path")
      .attr("class", "state")
      .attr("d", d => d.d)
      .style("fill", d => {
        return activeField === "smoking" ?
          statesData[d.id].smokingColor
          : statesData[d.id].lifeColor
      })
      .on("mouseover", mouseOver)
      .on("mouseout", mouseOut);

    toggleButton.on("click", toggleData);

    // holds definition of gradients
    var defs = svg.append("defs");
    var linearGradient1 = defs.append("linearGradient")
      .attr("id", "linear-gradient-1")
      .selectAll("stop")
      .data([
        { offset: "0%", color: colors.white },
        { offset: "100%", color: colors.smoking }
      ])
      .enter().append("stop")
      .attr("offset", d => d.offset)
      .attr("stop-color", d => d.color);

    var linearGradient2 = defs.append("linearGradient")
      .attr("id", "linear-gradient-2")
      .selectAll("stop")
      .data([
        { offset: "0%", color: colors.white },
        { offset: "100%", color: colors.life }
      ])
      .enter().append("stop")
      .attr("offset", d => d.offset)
      .attr("stop-color", d => d.color);



    svg.append("rect")
      .attr("class", "scale")
      .attr("width", 300)
      .attr("height", 20)
      .attr("transform", "translate(330,600)")
      .style("fill", "url(#linear-gradient-1)");
    svg.append("rect")
      .attr("class", "scale")
      .attr("width", 300)
      .attr("height", 20)
      .attr("transform", "translate(330,630)")
      .style("fill", "url(#linear-gradient-2)");
      
    svg.append("text")
      .text("% Smokers")
      .attr("font-family", "sans-serif")
      .attr("font-size", "15px")
      .attr("transform", "translate(220,615)")
    svg.append("text")
      .text("Life Expectancy")
      .attr("font-family", "sans-serif")
      .attr("font-size", "15px")
      .attr("transform", "translate(220,645)")
    svg.append("text")
      .text("8%")
      .attr("font-family", "sans-serif")
      .attr("font-size", "15px")
      .attr("transform", "translate(340,615)")
    svg.append("text")
      .text("25%")
      .attr("font-family", "sans-serif")
      .attr("font-size", "15px")
      .attr("transform", "translate(590,615)")
    svg.append("text")
      .text("75 yrs")
      .attr("font-family", "sans-serif")
      .attr("font-size", "15px")
      .attr("transform", "translate(340,645)")
    svg.append("text")
      .text("82 yrs")
      .attr("font-family", "sans-serif")
      .attr("font-size", "15px")
      .attr("transform", "translate(580,645)")
  }

  function toggleData() {
    activeField = activeField === "smoking" ? "life" : "smoking"
    d3
      .select("#statesSVG")
      .selectAll(".state")
      .style("fill", d => {
        return activeField === "smoking" ?
          statesData[d.id].smokingColor
          : statesData[d.id].lifeColor
      })

  }

  function mouseOver(pathData) {
    // pathData: {id: stateAbbteviation, n: name, d: pathData}
    d3
      .select("#tooltip")
      .transition()
      .duration(200)
      .style("opacity", 0.9);

    d3
      .select("#tooltip")
      .html(tooltipHtml(pathData.n, statesData[pathData.id]))
      .style("left", `${d3.event.pageX}px`)
      .style("top", `${d3.event.pageY - 28}px`);
  }

  function mouseOut() {
    d3
      .select("#tooltip")
      .transition()
      .duration(500)
      .style("opacity", 0);
  }

  function tooltipHtml(stateName, stateData) {
    /* function to create html content string in tooltip div. */
    return (
      `<h4>${stateName}</h4>
      <table>
      <tr><td>% Smokers</td><td>${stateData.percentSmokers}</td></tr>
      <tr><td>Life Expectancy</td><td>${stateData.lifeExpectancy}</td></tr>
      </table>`
    );
  }

  drawMap(pathsData, statesData);
}
