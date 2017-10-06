console.log("a" > "b");
console.log("a" < "b");

console.log("Alex" < "Michael");
console.log("Alex" > "Michael");

console.log("Victor" > "Veronica");
console.log("Victor" < "Veronica");

console.log("victor".localeCompare("veronica"));
console.log("ve".localeCompare("vi"));
console.log("a".localeCompare("b"));
console.log("b".localeCompare("a"));

function maxDifference(a) {
  let maxDif = -Infinity;
  let cache = [a[0]];
  for (let i = 1; i < a.length; i++) {
    const currMaxDifference = differenceHelper(a[i], cache);
    if (currMaxDifference > maxDif) maxDif = currMaxDifference;
    cache.push(a[i]);
  }
  return maxDif;
}

function differenceHelper(e, a) {
  return a.reduce((acc, curr) => {
    if (e - curr > a) return e - curr;
    return a;
  }, 0);
}
