function displayTime() {
  // Create a new Date object to get the current date and time
  let dateTime = new Date();

  // Get the current hour in 24-hour format
  let hr = dateTime.getHours();

  // Get the current minutes and format them to always have two digits
  let min = padZero(dateTime.getMinutes());

  // Get the current seconds and format them to always have two digits
  let sec = padZero(dateTime.getSeconds());

  // If the hour is greater than 12, convert to 12-hour format and display "PM"
  if (hr > 12) {
    hr = hr - 12; // Subtract 12 to convert 24-hour time to 12-hour time
    document.getElementById("ampm").innerHTML = "PM"; // Display PM
  } else {
    // If the hour is less than or equal to 12, display "AM"
    document.getElementById("ampm").innerHTML = "AM";
  }

  // Update the HTML elements with the current hour, minutes, and seconds
  document.getElementById("hours").innerHTML = padZero(hr); // Display the formatted hour
  document.getElementById("mins").innerHTML = min; // Display the formatted minutes
  document.getElementById("seconds").innerHTML = sec; // Display the formatted seconds
}

// Call displayTime() every 500 milliseconds to continuously update the time
setInterval(displayTime, 500);

// Function to add a leading zero to numbers less than 10
function padZero(num) {
  return num < 10 ? "0" + num : num; // If the number is less than 10, add a leading zero
}
