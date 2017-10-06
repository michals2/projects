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

function stringCombinations(numbers, prev = "") {
  if (!numbers.length) {
    return console.log(prev);
  }

  const letters = buttons[numbers[0]];

  for (let i = 0; i < letters.length; i++) {
    const concat = prev + letters[i];
    stringCombinations(numbers.slice(1), concat);
  }
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
