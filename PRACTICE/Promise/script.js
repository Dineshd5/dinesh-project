// Function that simulates a tatkal booking process
function tatkalBook() {
  // Returns a new Promise object
  return new Promise((resolve, reject) => {
    let bookingSuccess = true; // Simulates the success of the booking process

    // If booking is successful, resolve the promise with the amount
    if (bookingSuccess) resolve(850); // Booking success, transfer 850 Rs
    else reject(); // If booking fails, reject the promise
  });
}

// Calling the tatkalBook function
tatkalBook()
  // If the booking succeeds, log a success message with the transferred amount
  .then((amt) => console.log(`"Thanks buddy! I have transferred ${amt} Rs"`))

  // If the booking fails, catch the rejection and log a fallback message
  .catch(() => console.log("Thanks for trying! I will book a bus"));



  