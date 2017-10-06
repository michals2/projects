function minMax(arr) {
  const sorted = arr.sort((a, b) => a - b);
  const min = sorted.slice(0, 4).reduce((a, c) => a + c);
  const max = sorted.slice(sorted.length - 4).reduce((a, c) => a + c);
  return [min, max];
}

console.log(minMax([1, 2, 3, 4, 5]));
