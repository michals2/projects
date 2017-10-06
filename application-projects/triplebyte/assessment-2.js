/*
  The deletion distance between two strings is the minimum sum of ASCII
  values of characters that you need to delete in the two strings in 
  order to have the same string. The deletion distance between cat and
  at is 99, because you can just delete the first character of cat and
  the ASCII value of 'c' is 99. The deletion distance between cat and 
  bat is 98 + 99, because you need to delete the first character of both
  words. Of course, the deletion distance between two strings can't be 
  greater than the sum of their total ASCII values, because you can always 
  just delete both of the strings entirely.Implement an efficient function
  to find the deletion distance between two strings.You can refer to the
  Wikipedia article on the algorithm for edit distance if you want to. 
  The algorithm there is not quite the same as the algorithm required here,
  but it's similar.

*/

// const s = 'B';
// console.log(s.charCodeAt(0))

// const s2 = "cba";
// console.log(s2.split("").sort().join(""));

function strToObj(str) {
  return str.split("").reduce((a, c) => {
    if (!a[c]) a[c] = 1;
    else a[c]++;
    return a;
  }, {});
}

// console.log(strToObj("abcc"));
// const obj = { a: 1, b: 2 };
// const keys = Object.keys(obj);
// console.log(keys)

console.log("aabbcddppppmmmzzdjjnnleeeerroitt".replace(/(.)\1+/g, ""));

function ascii_deletion_distance(str1, str2) {
  const deletions = {};
  const str1Obj = strToObj(str1);
  const str2Obj = strToObj(str2);
  const totalObj = strToObj(str1.concat(str2));
  let ASCIIdelta = 0;

  for (let letter in totalObj) {
    if (str2Obj[letter] && !str1Obj[letter])
      // letter in 2 but not 1
      deletions[letter] = str2Obj[letter];
    else if (str1Obj[letter] && !str2Obj[letter])
      // letter in 1 but not 2
      deletions[letter] = str1Obj[letter];
    else
      // letter occurs in both 1 and 2
      deletions[letter] = Math.abs(str1Obj[letter] - str2Obj[letter]);
  }
  // return deletions;
  for (let letter in deletions) {
    ASCIIdelta += letter.charCodeAt(0) * deletions[letter];
  }
  return ASCIIdelta;
}

console.log(ascii_deletion_distance("at", "cat"), 99);
console.log(ascii_deletion_distance("boat", "got"), 298);
console.log(ascii_deletion_distance("thought", "sloughs"), 674);
