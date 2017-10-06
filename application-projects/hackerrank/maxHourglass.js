function hourglassSum(arr, [i, j]) {
  // console.log(`*i-${i}, j-${j}`);
  return (
    arr[i + 0][j + 0] +
    arr[i + 0][j + 1] +
    arr[i + 0][j + 2] +
    arr[i + 1][j + 1] +
    arr[i + 2][j + 0] +
    arr[i + 2][j + 1] +
    arr[i + 2][j + 2]
  );
}

exports.maxHourglassSum = arr => {
  let max = -Infinity;
  for (let i = 0; i <= arr.length - 3; i++) {
    for (let j = 0; j <= arr.length - 3; j++) {
      max = Math.max(max, hourglassSum(arr, [i, j]));
    }
  }
  return max;
};

