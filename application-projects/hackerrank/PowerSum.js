function processData(input) {
  //Enter your code here
  const arr = input.split("\n").map(Number);
  processDataRecur(arr);
}

function processDataRecur(arr) {
  console.log(arr);
  [base, exp] = arr;
  
  // base case
  if (Math.pow(base, 1 / exp) < 1) return 0;

  const sqr = Math.floor(Math.pow(base, 1 / exp));
  console.log(sqr);
  for (let i = sqr; i > 1; i--) {
    processDataRecur([i, exp]);
  }
}

// 10 = 1^2 + 3^2;
console.log(processData("10\n2"));
