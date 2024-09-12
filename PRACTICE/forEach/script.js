// Array containing the branch names
//problem 1
let arr = ["ECE", "IT", "CSC", "EEE"];

// Use forEach to loop through each value in the array
arr.forEach((val) => {
  // Create a new <option> element for the dropdown menu
  const opt = document.createElement("option");

  // Set the text inside the <option> element to the current array value
  opt.textContent = val;

  // Set the value attribute of the <option> element to the current array value
  opt.value = val;

  // Find the <select> element with the ID 'branch' and append the new <option> to it
  document.getElementById("branch").appendChild(opt);
});

//problem2
// Initialize an array containing the names of different branches
let arr1 = ["ECE", "CSC", "IT", "EEE", "MECH", "CIVIL"];

// Use forEach to loop through each value in the array
arr1.forEach((val1) => {
  // Create a new <option> element for the dropdown menu
  let option = document.createElement("option");

  // Set the text content of the <option> element to the current branch name
  option.textContent = val1;

  // Set the value attribute of the <option> element to the current branch name
  option.value = val1;

  // Find the <select> element with the ID 'Sum' and append the new <option> to it
  document.getElementById("branch1").appendChild(option);
});

//problem 3  find the sum of positive numbers only
// Initialize an array with positive and negative numbers
let numbers = [6, -5, 7, -2, 4, 6, -1];

// Initialize a variable to keep track of the sum of positive numbers
let sumOfPositiveNumbers = 0;

// Use forEach to loop through each number in the array
numbers.forEach((num) => {
  // Check if the current number is positive
  if (num > 0) {
    // Add the positive number to the sum
    sumOfPositiveNumbers += num;
  }
});

console.log(sumOfPositiveNumbers);
