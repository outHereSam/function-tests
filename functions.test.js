const {
  capitalize,
  reverse,
  isPalindrome,
  wordCount,
  double,
  filterEven,
  sum,
  average,
  fullName,
  isAdult,
  filterByAge,
} = require("./functions");

// Test for capitalize function
test("takes string and returns string capitalized", () => {
  expect(capitalize("greatness")).toBe("Greatness");
});

// Test for reverse function
test("takes string and returns string reversed", () => {
  expect(reverse("reverse")).toBe("esrever");
});

// Test for isPalindrome function
test("checks if string is a palindrome", () => {
  expect(isPalindrome("palindrome")).toBe(false);
  expect(isPalindrome("deed")).toBe(true);
  expect(isPalindrome("kayak")).toBe(true);
  expect(isPalindrome("never odd or even")).toBe(true);
  expect(isPalindrome("We panic in a pew")).toBe(true);
});

// Word count test
test("counts number of words in string", () => {
  expect(wordCount("This is great")).toBe(3);
  expect(wordCount("keyboard")).toBe(1);
  expect(wordCount("straight to the gulag")).toBe(4);
});

// double function test
test("doubles every number in array", () => {
  expect(double([1, 2, 3])).toStrictEqual([2, 4, 6]);
});

// Tests filterEven function
test("filters out even numbers from array", () => {
  expect(filterEven([1, 2, 3, 4])).toStrictEqual([2, 4]);
  expect(filterEven([5, 6, 12, 32, 9])).toStrictEqual([6, 12, 32]);
});

// Tests sum function
test("calculates the sum of all numbers in array", () => {
  expect(sum([1, 2, 3, 4])).toBe(10);
  expect(sum([2, 4, 6])).toBe(12);
});

// Tests average function
test("calculates the average of numbers in array", () => {
  expect(average([1, 2, 3])).toBe(2);
  expect(average([2, 4, 5, 1])).toBe(3);
});

// Tests fullname function
test("returns full name of a person object", () => {
  expect(fullName({ firstName: "Sam", lastName: "Danquah" })).toBe(
    "Sam Danquah"
  );
});

// Tests isAdult function
test("checks if a person is 18 years or older", () => {
  expect(isAdult({ age: 18 })).toBe(true);
  expect(isAdult({ age: 15 })).toBe(false);
});
