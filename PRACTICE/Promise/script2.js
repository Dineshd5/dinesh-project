// Creating a promise that simulates "Vidya" reaching a destination
let reachA = new Promise((resolve, reject) => {
  const reached = true; // Simulates that Vidya has reached the destination

  // If Vidya has reached, resolve the promise after 3 seconds
  if (reached == true) setTimeout(resolve, 3000, "Vidya reached");
  // If Vidya hasn't reached, reject the promise
  else reject("Vidya not reached");
});

// Creating a promise that simulates "Ramya" reaching a destination
let reachB = new Promise((resolve, reject) => {
  const reached = true; // Simulates that Ramya has reached the destination

  // If Ramya has reached, resolve the promise after 1 second
  if (reached == true) setTimeout(resolve, 1000, "Ramya reached");
  // If Ramya hasn't reached, reject the promise
  else reject("Ramya not reached");
});

// Creating a promise that simulates "Latha" reaching a destination
let reachC = new Promise((resolve, reject) => {
  const reached = true; // Simulates that Latha has reached the destination

  // If Latha has reached, resolve the promise after 2 seconds
  if (reached == true) setTimeout(resolve, 2000, "Latha reached");
  // If Latha hasn't reached, reject the promise
  else reject("Latha not reached");
});

// Using Promise.any to wait for the first promise that resolves
Promise.any([reachA, reachB, reachC])
  .then((message) => console.log(message)) // Logs the message of the first promise to resolve
  .catch((message) => console.log(message)); // Logs the rejection if all promises are rejected
