// 1
function foo() {
  return 5;
}

let myVar = foo;

// 4
let arr = [1, 2, 3];
arr[arr.length] = 4;
// console.log(arr);

function foo1()
{
  return {
    bar: "hello"
  };
}

function foo2()
{
  return 
  {
    bar: "hello"
  };
}

console.log(foo1());
console.log(foo2());