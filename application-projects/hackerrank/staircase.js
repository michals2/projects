function staircase(n) {
  let output = "";
  for (let i = 1; i <= n; i++) {
    output += Array(n-i).join(" ") + Array(i).join("*") + "\n"
  }
  return output;
}

console.log(staircase(6));
