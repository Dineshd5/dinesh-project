let select = document.querySelectorAll(".currency"); // Select all elements with the class 'currency' (dropdowns) and store them in a NodeList.
let btn = document.getElementById("btn"); // Get the button element by its ID 'btn'.
let input = document.getElementById("input"); // Get the input element by its ID 'input' where the user enters the amount.

fetch("https://api.frankfurter.app/currencies") // Fetch the list of available currencies from the API.
  .then((res) => res.json()) // Convert the response into JSON format.
  .then((res) => displayDropDown(res)); // Call the displayDropDown function to populate the dropdowns with the currencies.

function displayDropDown(res) {
  // This function takes the currency data from the API and populates the dropdowns.
  
  let curr = Object.entries(res); // Convert the currency object into an array of key-value pairs.
  
  // Loop through the array to create <option> elements for both dropdowns.
  for (let i = 0; i < curr.length; i++) {
    let opt = ` <option value="${curr[i][0]}">${curr[i][0]}</option> `; // Create an option element for each currency.
    
    // Add the currency option to both dropdowns.
    select[0].innerHTML += opt; // Add the option to the first dropdown.
    select[1].innerHTML += opt; // Add the option to the second dropdown.
  }
}

btn.addEventListener("click", () => {
  // Add a click event listener to the button.

  let curr1 = select[0].value; // Get the selected value from the first dropdown.
  let curr2 = select[1].value; // Get the selected value from the second dropdown.
  let inputVal = input.value; // Get the amount entered by the user.
  
  // Check if both selected currencies are the same.
  if (curr1 === curr2) {
    alert("choose different currency"); // If they are the same, alert the user to choose different currencies.
  } else {
    convert(curr1, curr2, inputVal); // If they are different, call the convert function to perform the conversion.
  }
});

function convert(curr1, curr2, inputVal) {
  // This function performs the currency conversion using the selected currencies and input value.

  const host = "api.frankfurter.app"; // Store the API host in a variable for better code readability and maintainability.
  
  // Fetch the conversion rate from the API, using the selected currencies and input value.
  fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)
    .then((resp) => resp.json()) // Convert the response into JSON format.
    .then((data) => {
      // Once the data is received, extract the conversion rate.
      
      // Set the value of the 'result' input field to the converted amount.
      document.getElementById("result").value = Object.entries(data.rates)[0][1];
    });
}
