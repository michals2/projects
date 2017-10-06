/*******************************

Instructions:
    * Take ALL the time you need to read the code, try some tests, jump around
 		* For each of the unit tests below, make edits so that the tests pass.
    * Don't panic! You got this :)

Jasmine tests:
    * After each edit, the tests re-run automatically. (Green indicates success).
    * expect(actual).toBe(expected); is exactly like Assert.AreEqual(expected, actual) 

 Notes:
    * This is timeboxed to 1 hour.
 		* You may use any resources you like, but you need to be able to explain your answers.
 	  * Consult the TODO comments for instructions
 		* Do not modify expect() calls unless there is an INCOMPLETE value. This is how each test is judged for correctness.
    * We'll chat about some of the "Discussion" points 
    
*******************************/

describe("Procore UI Engineers", function() {
  "use strict";

  it("should understand bools", function() {
    function boolean(x, y) {
      // TODO: write a function that returns true if the value of x is true, or the value of y is 10, otherwise return false.
      if (x === true || y === 10) return true;
      return false;
    }

    expect(boolean(true, 99)).toBe(true);
    expect(boolean(false, 10)).toBe(true);
    expect(boolean(false, 99)).toBe(false);
  });

  it("should understand hoisting", function() {
    var y = -1;

    // Discussion: Why does this work before the variable is declared? Wouldn't this introduce a global?
    // x = ++y;
    x = y++;
    x++;

    var x = 1;
    expect(x).toBe(1);
    // TODO: fill in a value for FILL_IN that matches the expected value of X.
  });

  it("should be able to write a for loop", function() {
    // TODO: write a 'for' loop which sums the EVEN numbers in the range [1 to 50] (inclusive)
    let sum = 0;

    for (let i = 2; i <= 50; i += 2) {
      sum += i;
    }

    expect(sum).toBe(650);
  });

  it("should understand object literals", function() {
    // TODO: declare an object literal which has the fields 'name' and 'age'.

    const p = {
      name: "Bob",
      age: 30
    };

    expect(p.name).toBe("Bob");
    expect(p.age).toBe(30);
  });

  it("should understand constructors", function() {
    // TODO: define a constructor function called 'Person' which has the fields 'name' and 'age'.

    function Person(name, age) {
      return {
        name: name,
        age: age
      };
    }

    const p = new Person("Bob", 30);

    expect(p.name).toBe("Bob");
    expect(p.age).toBe(30);
  });

  it("should understand closure", function() {
    var super_secret_key;

    function match(test) {
      return test === super_secret_key;
    }

    // TODO: Fill in the two FILL_IN values for the expectation.
    var before = match("xyz");
    expect(before).toBe(false);

    super_secret_key = "xyz";

    var after = match("xyz");
    expect(after).toBe(true);

    // Discussion: Why does this work?
  });

  it("should understand partial application", function() {
    var add = function(firstNumber) {};

    // Use partial application and the add() function to create an add10 function.
    // add10() should add 10 to a parameter.

    expect(add10(10)).toBe(20);
  });

  it("should be able solve generic interview type questions", function() {
    function palindrome(possiblePalindrome) {
      // TODO: Write a function which tests an input string to determine whether it is the same forwards and backwards.
      return (
        possiblePalindrome === possiblePalindrome.split("").reverse().join("")
      );
    }

    expect(palindrome("rats live on no evil star")).toBe(true);
    expect(palindrome("this is not a palindrome")).toBe(false);
  });

  it("should understand functional programming concepts", function() {
    // TODO: Write a function called remember() which captures some original value and produces a function which
    // returns true if the parameter matches the original value. Think password verification.
    // Be careful not to leak the secret to the caller, but only return if it's right or not.

    function remember(secret) {
      return value => value === secret;
    }

    var match = remember(10);
    var other = remember("bob");

    expect(match(10)).toBe(true);
    expect(match("10")).toBe(false);
    expect(other("bob")).toBe(true);
    expect(other(10)).toBe(false);
  });

  it("should understand callbacks", function() {
    // EXAMPLE: Changing this will have no effect.
    function doWorkWithReturns(value) {
      if (value > 10) {
        return true;
      }

      return false;
    }

    if (doWorkWithReturns(11)) {
      // True. Some things happen.
    } else {
      // False. Other things happen.
    }

    // (IMPORTANT: Don't change these, they're part of the automated spec.)
    var done = jasmine.createSpy("done");
    var fail = jasmine.createSpy("fail");

    // ---------------------------------------
    // Okay, the actual exercise starts here.
    function doWorkWithCallbacks(value, done, fail) {
      // TODO: Re-define the body here so that rather than returning a boolean,
      // it invokes a callback: done for true, and fail for false.
      if (value > 10) done();
      else fail();
    }

    doWorkWithCallbacks(11, done, fail);

    expect(done).toHaveBeenCalled();
    expect(fail).not.toHaveBeenCalled();
  });

  it("should understand privacy in javascript", function() {
    // TODO: Write a maker() function which produces a function which counts the number of times it has been
    // called and returns that value. (Two instances of the function should NOT share the same count.)

    function maker() {
      let count = 0;
      return () => {
        count++;
        return count;
      };
    }

    var func = maker();
    var func_2 = maker();

    expect(func()).toBe(1);
    expect(func_2()).toBe(1);
    expect(func_2()).toBe(2);
    expect(func()).toBe(2);
  });

  it("should understand the switch statement, if only to avoid it. kidding..", function() {
    // TODO: Use a switch statement to convert the numbers 1, 2, 3, 4 to their English language equivalents.
    // The function should have a single return statement.

    expect(translate(1)).toBe("one");
    expect(translate(2)).toBe("two");
    expect(translate(3)).toBe("three");
    expect(translate(4)).toBe("four");
  });

  it("should destroy all switch statements", function() {
    // TODO: Convert the switch statement to a lookup table with the same functionality as before.

    expect(translate(1)).toBe("one");
    expect(translate(2)).toBe("two");
    expect(translate(3)).toBe("three");
    expect(translate(4)).toBe("four");

    // Discussion: What is the relationship between code and data?
  });

  it("should iterate to develop elegant data structures", function() {
    // TODO: Extend the lookup table so that it can translate the numbers to English or Spanish.

    const foo = {
      en: {
        1: "one",
        2: "two",
        3: "three",
        4: "four"
      },
      es: {
        1: "uno",
        2: "dos",
        3: "tres",
        4: "quatro"
      }
    };

    function translate(key, lang) {
      return foo[lang][key]; // foo['es'][1]
    }

    expect(translate(1, "en")).toBe("one");
    expect(translate(2, "en")).toBe("two");
    expect(translate(3, "en")).toBe("three");
    expect(translate(4, "en")).toBe("four");

    expect(translate(1, "es")).toBe("uno");
    expect(translate(2, "es")).toBe("dos");
    expect(translate(3, "es")).toBe("tres");
    expect(translate(4, "es")).toBe("quatro");
  });

  it("should return a new array of transformed values", function() {
    var originalArray = [1, 2, 20, 40, 3, 4];

    // TODO: Return a new array with all values multiplyed by 10

    expect(newArray).toEqual([10, 20, 200, 400, 30, 40]);

    // TODO: Take that new array and filter all values that are less than 199.99.

    expect(filteredArray).toEqual([200, 400]);
  });

  it("should implement the function map()", function() {
    var data = [1, 2, 3, 4];
    // TODO: Implemenet the function map() using any method
    // you would like, including for loops, forEach loops,
    // whatever you would like, you simply may not use the
    // function map() ;)

    // Example:
    // var array = [1,2,3,4];
    // var result = array.map(x => x * 10);
    // result //-> [10,20,30,40]

    // We put your function on the prototyope for ya :)
    Array.prototype.myMapFunction = function(callbackValue) {
      // Implementation goes here
    };

    var result = data.myMapFunction(function(value) {
      return value * 10;
    });

    expect(result).toEqual([10, 20, 30, 40]);
  });

  it("can think recursively", function() {
    // NOTE: the codepen editor supports collapsing this region if you're tired of seeing it.
    var org_chart = {
      root: {
        title: "CEO",
        employees: [
          {
            title: "Chief Financial Officer",
            employees: [
              {
                title: "VP Finance",
                employees: [
                  {
                    title: "Financial Accounting Manager",
                    employees: [
                      {
                        title: "Financial Accountant III"
                      },
                      {
                        title: "Financial Accountant II"
                      },
                      {
                        title: "Financial Accountant I"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            title: "Chief Information Officer",
            employees: [
              { tile: "Admin. Assistant" },
              {
                title: "VP Information Security",
                employees: [{ tile: "Director Information Security" }]
              },
              {
                title: "VP Enterprise Data",
                employees: [
                  {
                    tile: "DBA Lead",
                    employees: [{ tile: "DBA II" }, { tile: "DBA I" }]
                  },
                  { tile: "Data Developer III" },
                  { tile: "Reporting Analyst II" }
                ]
              },
              {
                title: "VP Network Infrastructure",
                employees: [
                  { tile: "Sys Ops Manager" },
                  { tile: "Network Ops Manager" }
                ]
              }
            ]
          }
        ]
      }
    };

    function employee_count(node) {
      // TODO: Provide the total employee count for the entire org in this data structure.
      // NOTE: It's possible to solve this problem without using recursion, but it's probably more difficult.
    }

    expect(employee_count(org_chart.root)).toBe(20);
  });
});
