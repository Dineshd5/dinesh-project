//Return the First Element in an Array
//Create a function that takes an array containing
//only numbers and return the first element.
// method 1
function getFirstValue(...arr) {
  //spread operator
  let arr1 = arr[0];
  return arr1;
}
console.log(getFirstValue(10, 5, 8));
// method 2
function FirstValue(arr2) {
  return arr2[0];
}
console.log(FirstValue((arr2 = [5, 8, 9])));
//method 3 arrow function
const getValue = (arr3) => arr3[0];
console.log(getValue((arr3 = [8, 9])));
/*Triangular Number Sequence
This Triangular Number Sequence is generated from a pattern of dots that form a triangle. 
The first 5 numbers of the sequence, or dots, are:1, 3, 6, 10, 15
This means that the first triangle has just one dot, the second one has three dots, 
the third one has 6 dots and so on.Write a function that returns the number of dots when 
given its corresponding triangle number of the sequence.*/
function triangularNumber(n) {
  // Calculate the nth triangular number using the formula (n * (n + 1)) / 2
  return (n * (n + 1)) / 2;
}

// Examples:

// The first triangular number: (1 * (1 + 1)) / 2 = 1
console.log(triangularNumber(1)); // Output: 1

// The second triangular number: (2 * (2 + 1)) / 2 = 3
console.log(triangularNumber(2)); // Output: 3

// The third triangular number: (3 * (3 + 1)) / 2 = 6
console.log(triangularNumber(3)); // Output: 6

// The fourth triangular number: (4 * (4 + 1)) / 2 = 10
console.log(triangularNumber(4)); // Output: 10

// The fifth triangular number: (5 * (5 + 1)) / 2 = 15
console.log(triangularNumber(5)); // Output: 15

//Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).
function sumPolygon(n) {
  // Calculate the sum of the interior angles of a polygon using the formula (n - 2) * 180
  return (n - 2) * 180;
}

// Example usage:
console.log(sumPolygon(4)); // Output: 360 (for a quadrilateral)

//There is a single operator in JavaScript, capable of providing the remainder of a division operation.
// Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder,
// possibly zero. Return that value.

function remainder(x, y) {
  return x % y;
}
remainder(1, 3);

//Create a function that takes voltage and current and returns the calculated power.
function circuitPower(voltage, current) {
  return (P = voltage * current);
}
circuitPower(250, 50);
//Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function addition(num) {
  return (num += 1);
}
addition(5);

//Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
function minMax(arr) {
  // Use Math.min and Math.max to find the minimum and maximum values in the array
  // The spread operator (...) is used to pass the array elements as individual arguments
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  // Return the minimum and maximum values as an array
  return [min, max];
}

// Example usage:
console.log(minMax([1, 2, 3, 4, 5])); // Output: [1, 5]
console.log(minMax([2334454, 5])); // Output: [5, 2334454]
console.log(minMax([1])); // Output: [1, 1]
