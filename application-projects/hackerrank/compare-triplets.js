process.stdin.resume();
process.stdin.setEncoding("ascii");

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on("data", function(data) {
  input_stdin += data;
});

process.stdin.on("end", function() {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function solve(a0, a1, a2, b0, b1, b2) {
  // Complete this function
}

function solve2(a, b) {
  // Complete this function
  const result = [0, 0];
  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) result[0] += 1;
    else if (a[i] < b[i]) result[1] += 1;
  }
  return result;
}

function main() {
  var a = readLine().split(" ").map(e => parseInt(e));
  var b = readLine().split(" ").map(e => parseInt(e));
  var result = solve2(a, b);
  console.log(result.join(" "));
}
