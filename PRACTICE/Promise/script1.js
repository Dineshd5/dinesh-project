// Function to simulate a coin toss using a promise
function tossCoin() {
  return new Promise((resolve, reject) => {
    const rand = Math.floor(Math.random() * 2); // Generate a random number (0 or 1)

    // If the random number is 0, resolve the promise (heads)
    if (rand == 0) resolve();
    // If the random number is 1, reject the promise (tails)
    else reject();
  });
}

// Call the tossCoin function
tossCoin()
  // If the promise resolves (heads), log a winning message
  .then(() => console.log("Congrats! it's heads you won"))
  
  // If the promise is rejected (tails), log a losing message
  .catch(() => console.log("sorry ! you lost it's tail"));
