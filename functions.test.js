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
