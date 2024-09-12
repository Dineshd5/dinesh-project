// Define an array with duplicate values
let arr = [4, 6, 2, 3, 1, 1, 3, 5, 7, 8, 4, 3];

// Use reduce to remove duplicates from the array
let RemoveDup = arr.reduce((unique, el) => {
  // Check if the current element is already in the unique array
  if (!unique.includes(el)) {
    // If not, add it to the unique array
    unique.push(el);
  }
  // Return the unique array for the next iteration
  return unique;
}, []); // Start with an empty array as the initial value

// Log the array with duplicates removed
console.log(RemoveDup);
// Output: [4, 6, 2, 3, 1, 5, 7, 8]

//abbreviate by gathering first letter of each word
let name = "Robert Andrew George";

let FirstWord = name
  .split(" ")
  .map((word) => word[0])
  .join("");
console.log(FirstWord);
//find the sum of positive numbers only
// Array of numbers
let input = [6, -5, 7, -2, 4, 6, -1];

// Sum of positive numbers only
let sumOfPositives = input.reduce((total, num) => {
    // Add to total only if the number is positive
    if (num > 0) {
        return total + num;
    } else {
        return total; // Otherwise, just return the current total
    }
}, 0); // Start the total at 0

console.log(sumOfPositives); // Output: 23
/*Explanation:
reduce((total, num) => { ... }, 0):

This function iterates over each element in the array.
total is the accumulator that holds the running total.
num is the current element being processed.
The second argument 0 initializes the total to 0.
if (num > 0):

This condition checks if the current number (num) is positive.
If num is positive, it gets added to total.
Returning the Total:

If num is positive, it's added to the total. If not, the total remains unchanged.*\