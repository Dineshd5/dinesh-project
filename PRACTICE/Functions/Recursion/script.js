//recursion factorial

function factorial(n) {
  // Base case: This condition checks if n is 1.
  // If n is 1, we simply return 1 because the factorial of 1 is 1.
  // This is the simplest form of the problem and it stops further recursive calls.
  if (n == 1) return 1;

  // Recursive case: If n is not 1, we need to calculate the factorial.
  // We do this by multiplying n by the result of factorial(n - 1).
  // This means we are breaking down the problem into a smaller subproblem
  // and solving it step by step until we reach the base case.
  return n * factorial(n - 1);
}

// Explanation of the execution flow:

// When we call factorial(5), here's what happens step-by-step:

// factorial(5)
//   n is 5, which is not 1, so we return 5 * factorial(4)
// factorial(4)
//   n is 4, which is not 1, so we return 4 * factorial(3)
// factorial(3)
//   n is 3, which is not 1, so we return 3 * factorial(2)
// factorial(2)
//   n is 2, which is not 1, so we return 2 * factorial(1)
// factorial(1)
//   n is 1, which matches our base case, so we return 1

// Now, let's see how these return values are used:

// factorial(1) returns 1
// factorial(2) returns 2 * 1 = 2
// factorial(3) returns 3 * 2 = 6
// factorial(4) returns 4 * 6 = 24
// factorial(5) returns 5 * 24 = 120

// So, console.log(factorial(5)) outputs 120
console.log(factorial(5)); // Output: 120

//Problem: Sum of an Array
//Write a recursive function that calculates the
//sum of all elements in an array of numbers.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // The array of numbers we want to sum
let arrayindex = arr.length - 1;
// Start with the last index of the array (which is 8, because the array has 9 elements)

function sumof(arrayindex) {
  // Base Case: If we've reached the first element of the array, return its value
  if (arrayindex == 0) return arr[0];

  /* Recursive Case: Add the current element to the sum of the rest of the array
  // This line does two things:
  // 1. It accesses the current element with `arr[arrayindex]`
  // 2. It calls `sumof` again with the next lower index (`arrayindex - 1`)*/
  return arr[arrayindex] + sumof(arrayindex - 1);
}

console.log(sumof(arrayindex)); // Call the function and log the result
