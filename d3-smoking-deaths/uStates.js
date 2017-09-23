
const getPaths = new Promise((resolve, reject) => {
  d3.json("./data/paths.json", data => {
    resolve(data);
  });
})

const getStateData = new Promise((resolve, reject) => {
  d3.json("./data/smoking-deaths.json", data => {
    const smokingLimits=[8, 25];
    const lifeLimits=[75, 82];
    const formattedData = {};
    data.forEach(e => {
      const smokingPercent = (e.percentSmokers-smokingLimits[0]) / (smokingLimits[1]-smokingLimits[0]);
      const lifePercent = (e.lifeExpectancy-lifeLimits[0]) / (lifeLimits[1]-lifeLimits[0]);
      formattedData[e.abbreviation] = {
        percentSmokers: +[e.percentSmokers],
        lifeExpectancy: +[e.lifeExpectancy],
        smokingColor: d3.interpolate("#ffffcc", "#800026")(smokingPercent),
        lifeColor: d3.interpolate("#ffffcc", "#800026")(lifePercent),
      }
    })
    resolve(formattedData);
  });
})

Promise.all([getPaths, getStateData]).then(values => { 
  const [pathsData, stateData] = values;
  populateMap(pathsData, stateData)
}, reason => {
  console.log(reason)
});

function populateMap(pathsData, stateData) {

  function drawStates(htmlID, stateData, toolTip) {
    
    function mouseOver(pathData) {
      // pathData: {id: stateAbbteviation, n: name, d: pathData}
      
      d3
        .select("#tooltip")
        .transition()
        .duration(200)
        .style("opacity", 0.9);

      d3
        .select("#tooltip")
        .html(toolTip(pathData.n, stateData[pathData.id]))
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

    d3
      .select(htmlID)
      .selectAll(".state")
      .data(pathsData)
      .enter()
      .append("path")
      .attr("class", "state")
      .attr("d", d => d.d )
      .style("fill",  d => stateData[d.id].smokingColor)
      .on("mouseover", mouseOver)
      .on("mouseout", mouseOut);
  }

  function tooltipHtml(stateName, stateData) {
    /* function to create html content string in tooltip div. */
    return (
      `<h4>${stateName}</h4>` +

      "<table>" +
      
      "<tr><td>% Smokers</td><td>" +
      stateData.percentSmokers +
      "</td></tr>" +
      
      "<tr><td>Life Exp</td><td>" +
      stateData.lifeExpectancy +
      "</td></tr>" +

      "</table>"
    );
  }

  /* draw states on html id #statesvg */
  drawStates("#statesvg", stateData, tooltipHtml);
}
