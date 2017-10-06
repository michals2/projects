const assert = require("assert");
const { maxHourglassSum } = require("../maxHourglass");

// should be 13
const arr1 = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 9, 2, -4, -4, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, -1, -2, -4, 0]
];

// should be 19
const arr2 = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];

describe("test suite", () => {
  it("should work with different dimension arrays", () => {
    assert.notEqual(1, maxHourglassSum(arr2));
    assert.equal(19, maxHourglassSum(arr2));
  });
});
