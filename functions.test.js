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
  expect(double([1, 2, 3])).toStrictEqual([1, 4, 9]);
});

// Tests filterEven function
test("filters out even numbers from array", () => {
  expect(filterEven([1, 2, 3, 4])).toStrictEqual([2, 4]);
  expect(filterEven([5, 6, 12, 32, 9])).toStrictEqual([6, 12, 32]);
});
