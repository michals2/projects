const d3 = require("d3");
// const pathsJSON = require("./paths.json");

// console.log(pathsJSON[0]);

// console.log(JSON.parse(pathsJSON));

// console.log(d3.json);

d3.json("./paths.json", function(data, err) {
  console.log(data, err);
});
