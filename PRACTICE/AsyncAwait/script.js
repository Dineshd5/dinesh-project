// Creating a new promise, simulating the status of someone reaching a destination
let reachA = new Promise((resolve, reject) => {
  const reached = false; // Simulating that the person has not reached the destination
  
  // If reached is true, resolve the promise after 3 seconds
  if (reached == true) setTimeout(resolve, 3000, "Vidya reached");
  // If reached is false, reject the promise with an error message
  else reject("Vidya not reached");
});

// A simple async function that returns a string "hello"
async function fn() {
  return "hello";
}

// Uncommented these lines for testing purposes:
// console.log(fn()); // Logs the Promise object returned by the async function
// fn().then((msg) => console.log(msg)); // Logs the resolved value ("hello")

// Another async function to check the status of reaching the destination
async function asyncstatus() {
  try {
    console.log("hi.."); // Logs a greeting message
    
    // Wait for the result of the reachA promise
    res = await reachA;
    
    // If resolved, log the result
    console.log(res); // This will log "Vidya reached" if the promise resolves
    
    console.log("bye.."); // Logs a farewell message after the promise resolves
  } catch (error) {
    // If the promise is rejected, catch the error and log it
    console.log(error); // Logs "Vidya not reached" if the promise is rejected
  }
}

// Calling the async function to check the status
asyncstatus();
