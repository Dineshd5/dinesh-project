/*Problem:
 Write a recursive function called countdown
that takes a number n as an argument and prints the numbers 
from n down to 1.If n is less than or equal to 0,
the function should print "Liftoff!"*/
function countdown(n) {
  if (n <= 0) {
    console.log("Liftoff!"); // Print "Liftoff!" when the countdown reaches 0
    return; // Exit the function
  }

  console.log(n); // Print the current value of n
  countdown(n - 1); // Recursively call countdown with n-1
}

countdown(5); // Start the countdown from 5

