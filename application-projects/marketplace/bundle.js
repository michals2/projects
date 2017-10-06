(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// state
var activeField = "life";
var colors = {
  smoking: "#800026",
  life: "#2977f4",
  white: "#ffffff"
};

var getPaths = new Promise(function (resolve, reject) {
  d3.json("./data/paths.json", function (data) {
    resolve(data);
  });
});

var getStateData = new Promise(function (resolve, reject) {
  d3.json("./data/smoking-deaths.json", function (data) {
    var smokingLimits = [8, 25];
    var lifeLimits = [75, 82];
    var formattedData = {};
    data.forEach(function (e) {
      var smokingPercent = (e.percentSmokers - smokingLimits[0]) / (smokingLimits[1] - smokingLimits[0]);
      var lifePercent = (e.lifeExpectancy - lifeLimits[0]) / (lifeLimits[1] - lifeLimits[0]);
      formattedData[e.abbreviation] = {
        percentSmokers: +[e.percentSmokers],
        lifeExpectancy: +[e.lifeExpectancy],
        smokingColor: d3.interpolate(colors.white, colors.smoking)(smokingPercent),
        lifeColor: d3.interpolate(colors.white, colors.life)(lifePercent)
      };
    });
    resolve(formattedData);
  });
});

Promise.all([getPaths, getStateData]).then(function (values) {
  var _values = _slicedToArray(values, 2),
      pathsData = _values[0],
      statesData = _values[1];

  populateMap(pathsData, statesData);
});

function populateMap(pathsData, statesData) {

  function drawMap(pathsData, statesData) {

    var svg = d3.select("#statesSVG");
    var toggleButton = d3.select("#toggleButton");

    svg.selectAll(".state").data(pathsData).enter().append("path").attr("class", "state").attr("d", function (d) {
      return d.d;
    }).style("fill", function (d) {
      return activeField === "smoking" ? statesData[d.id].smokingColor : statesData[d.id].lifeColor;
    }).on("mouseover", mouseOver).on("mouseout", mouseOut);

    toggleButton.on("click", toggleData);

    // holds definition of gradients
    var defs = svg.append("defs");
    var linearGradient1 = defs.append("linearGradient").attr("id", "linear-gradient-1").selectAll("stop").data([{ offset: "0%", color: colors.white }, { offset: "100%", color: colors.smoking }]).enter().append("stop").attr("offset", function (d) {
      return d.offset;
    }).attr("stop-color", function (d) {
      return d.color;
    });

    var linearGradient2 = defs.append("linearGradient").attr("id", "linear-gradient-2").selectAll("stop").data([{ offset: "0%", color: colors.white }, { offset: "100%", color: colors.life }]).enter().append("stop").attr("offset", function (d) {
      return d.offset;
    }).attr("stop-color", function (d) {
      return d.color;
    });

    svg.append("rect").attr("class", "scale").attr("width", 300).attr("height", 20).attr("transform", "translate(330,600)").style("fill", "url(#linear-gradient-1)");
    svg.append("rect").attr("class", "scale").attr("width", 300).attr("height", 20).attr("transform", "translate(330,630)").style("fill", "url(#linear-gradient-2)");

    svg.append("text").text("% Smokers").attr("font-family", "sans-serif").attr("font-size", "15px").attr("transform", "translate(220,615)");
    svg.append("text").text("Life Expectancy").attr("font-family", "sans-serif").attr("font-size", "15px").attr("transform", "translate(220,645)");
    svg.append("text").text("8%").attr("font-family", "sans-serif").attr("font-size", "15px").attr("transform", "translate(340,615)");
    svg.append("text").text("25%").attr("font-family", "sans-serif").attr("font-size", "15px").attr("transform", "translate(590,615)");
    svg.append("text").text("75 yrs").attr("font-family", "sans-serif").attr("font-size", "15px").attr("transform", "translate(340,645)");
    svg.append("text").text("82 yrs").attr("font-family", "sans-serif").attr("font-size", "15px").attr("transform", "translate(580,645)");
  }

  function toggleData() {
    activeField = activeField === "smoking" ? "life" : "smoking";
    d3.select("#statesSVG").selectAll(".state").style("fill", function (d) {
      return activeField === "smoking" ? statesData[d.id].smokingColor : statesData[d.id].lifeColor;
    });
  }

  function mouseOver(pathData) {
    // pathData: {id: stateAbbteviation, n: name, d: pathData}
    d3.select("#tooltip").transition().duration(200).style("opacity", 0.9);

    d3.select("#tooltip").html(tooltipHtml(pathData.n, statesData[pathData.id])).style("left", d3.event.pageX + "px").style("top", d3.event.pageY - 28 + "px");
  }

  function mouseOut() {
    d3.select("#tooltip").transition().duration(500).style("opacity", 0);
  }

  function tooltipHtml(stateName, stateData) {
    /* function to create html content string in tooltip div. */
    return "<h4>" + stateName + "</h4>\n      <table>\n      <tr><td>% Smokers</td><td>" + stateData.percentSmokers + "</td></tr>\n      <tr><td>Life Expectancy</td><td>" + stateData.lifeExpectancy + "</td></tr>\n      </table>";
  }

  drawMap(pathsData, statesData);
}

},{}]},{},[1]);
