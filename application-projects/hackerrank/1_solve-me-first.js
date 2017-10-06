function main() {
  var n = parseInt(readLine());
  ar = readLine().split(" ");
  ar = ar.map(Number);
  var result = aVeryBigSum(n, ar);
  process.stdout.write("" + result + "\n");
}
