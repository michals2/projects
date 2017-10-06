const buttons = {
  2: "ABC",
  3: "DEF",
  4: "GHI",
  5: "JKL",
  6: "MNO",
  7: "PQRS",
  8: "TUV",
  9: "WXYZ"
};

function recur(numbers, depth, prev = "") {
  if (numbers.length === 0) return "";

  const letters = buttons[numbers[0]];

  for (let i = 0; i < letters.length; i++) {
    const concat = prev + letters[i];
    const total = concat + recur(numbers.slice(1), depth, concat);
    if (total.length === depth) console.log(total);
  }
}

function stringCombinations(numbers) {
  recur(numbers, numbers.length);
}

stringCombinations("22");

/*
  AD
  AE
  AF

  BD
  BE
  BF

  CD
  CE
  CF
*/
