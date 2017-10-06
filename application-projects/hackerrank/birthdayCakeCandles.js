function birthdayCakeCandles(n, ar) {
  // Complete this function
  const sorted = ar.sort((a, b) => b-a);
  console.log(sorted);
  let count = 0;
  for (let i = 0; ar[i] === ar[0]; i++) {
    count = count + 1;
  }
  return count;
}

console.log(birthdayCakeCandles(10, [18, 90, 90, 13, 90, 75, 90, 8, 90, 43]));
