console.log("hello..."); // Logs "hello..." immediately (f1)

function sync() {
  console.log("step 1"); // Logs "step 1" as part of the sync function (f3)
  console.log("step 2"); // Logs "step 2" as part of the sync function (f4)
  console.log("step 3"); // Logs "step 3" as part of the sync function (f5)
}

sync(); // Calls the sync function, executing all console logs within it (f2)

let a = 100; // Declares variable a with value 100
let b = 20;  // Declares variable b with value 20
let c = a + b; // Declares variable c with the sum of a and b

// Schedules a log of "step 1" after 4000 ms (4 seconds)
setTimeout(() => console.log("step 1"), 4000); // (f6)

// Schedules a log of "step 2" after 2000 ms (2 seconds)
setTimeout(() => console.log("step 2"), 2000); // (f7)

// Schedules a log of "step 3" after 1000 ms (1 second)
setTimeout(() => console.log("step 3"), 1000); // (f8)

console.log("bye"); // Logs "bye" immediately (f9)

// Schedules a recurring log of "HI" every 2000 ms (2 seconds)
setInterval(() => console.log("HI"), 2000); // Keeps logging "HI" every 2 seconds
