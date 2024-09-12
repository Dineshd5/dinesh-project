/*A Redundant Function
Write a function redundant that takes in a string 
str and returns a function that returns str.*/
//method 1
// Define the `redundant` function that takes a string `str` as an argument.
function redundant(str) {
  // Return an anonymous function (a closure) that returns the original string `str`.
  return function () {
    return str;
  };
}

// Examples:

// Example 1: Pass the string "apple" to the `redundant` function.
const f1 = redundant("apple");
// Call the returned function `f1` to get the string "apple".
console.log(f1()); // Output: "apple"

// Example 2: Pass the string "pear" to the `redundant` function.
const f2 = redundant("pear");
// Call the returned function `f2` to get the string "pear".
console.log(f2()); // Output: "pear"

// Example 3: Pass an empty string "" to the `redundant` function.
const f3 = redundant("");
// Call the returned function `f3` to get the empty string "".
console.log(f3()); // Output: ""

//Convert Age to Days
//method 1
function CalAge(Age) {
  return Age * 365;
}
console.log(CalAge(50) + " days");

//method 2
let calAge = (Age) => Age * 365;
console.log(calAge(20) + " days");

/*Create a function that returns true if the first array can be nested inside the second and false otherwise.

arr1 can be nested inside arr2 if:

arr1's min is greater than arr2's min.
arr1's max is less than arr2's max.*/

// Define the canNest function as an arrow function
// Takes two arrays, arr1 and arr2, as input
const canNest = (arr1, arr2) =>
  // Find the minimum value in arr1 using Math.min and the spread operator
  // Compare it to the minimum value in arr2
  // Check if arr1's minimum is greater than arr2's minimum
  Math.min(...arr1) > Math.min(...arr2) &&
  // Find the maximum value in arr1 using Math.max and the spread operator
  // Compare it to the maximum value in arr2
  // Check if arr1's maximum is less than arr2's maximum
  Math.max(...arr1) < Math.max(...arr2);

// Example usage:
// [1, 2, 3, 4] has a min of 1 and a max of 4
// [0, 5] has a min of 0 and a max of 5
// 1 > 0 and 4 < 5, so this will return true
console.log(canNest([1, 2, 3, 4], [0, 5])); // true

// [3, 1] has a min of 1 and a max of 3
// [4, 0] has a min of 0 and a max of 4
// 1 > 0 and 3 < 4, so this will return true
console.log(canNest([3, 1], [4, 0])); // true

// [9, 9, 8] has a min of 8 and a max of 9
// [8, 9, 10] has a min of 8 and a max of 10
// 8 is not greater than 8, so this will return false
console.log(canNest([9, 9, 8], [8, 9, 10])); // false

// [1, 2, 3, 4] has a min of 1 and a max of 4
// [2, 3] has a min of 2 and a max of 3
// 1 is not greater than 2, so this will return false
console.log(canNest([1, 2, 3, 4], [2, 3])); // false

// Define the canNest with plain function
// Takes two arrays, arr1 and arr2, as input
function canNest(arr1, arr2) {
  // Find the minimum value in arr1 using Math.min and the spread operator
  // Math.min(...arr1) spreads out the elements of arr1 and finds the smallest one
  const min1 = Math.min(...arr1);

  // Find the minimum value in arr2 using Math.min and the spread operator
  const min2 = Math.min(...arr2);

  // Find the maximum value in arr1 using Math.max and the spread operator
  // Math.max(...arr1) spreads out the elements of arr1 and finds the largest one
  const max1 = Math.max(...arr1);

  // Find the maximum value in arr2 using Math.max and the spread operator
  const max2 = Math.max(...arr2);

  // Check if arr1's minimum value is greater than arr2's minimum value
  // AND if arr1's maximum value is less than arr2's maximum value
  // If both conditions are true, return true; otherwise, return false
  return min1 > min2 && max1 < max2;
}

// Example usage:
// [1, 2, 3, 4] has a min of 1 and a max of 4
// [0, 5] has a min of 0 and a max of 5
// 1 > 0 and 4 < 5, so this will return true
console.log(canNest([1, 2, 3, 4], [0, 5])); // true

// [3, 1] has a min of 1 and a max of 3
// [4, 0] has a min of 0 and a max of 4
// 1 > 0 and 3 < 4, so this will return true
console.log(canNest([3, 1], [4, 0])); // true

// [9, 9, 8] has a min of 8 and a max of 9
// [8, 9, 10] has a min of 8 and a max of 10
// 8 is not greater than 8, so this will return false
console.log(canNest([9, 9, 8], [8, 9, 10])); // false

// [1, 2, 3, 4] has a min of 1 and a max of 4
// [2, 3] has a min of 2 and a max of 3
// 1 is not greater than 2, so this will return false
console.log(canNest([1, 2, 3, 4], [2, 3])); // false
