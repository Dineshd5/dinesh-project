// Select elements from the DOM (Document Object Model)
let button = document.getElementById("add"); // The button to add new to-dos
let todoList = document.getElementById("todoList"); // The container where to-dos will be displayed
let input = document.getElementById("input"); // The input field where the user types the to-do

// Array to store the list of to-dos
let todos = [];

// Load the stored to-dos from local storage when the page loads
window.onload = () => {
  // Retrieve the 'todos' array from local storage and parse it (if available), or set an empty array if it's null
  todos = JSON.parse(localStorage.getItem("todos")) || [];

  // Display each to-do from the stored list on the page
  todos.forEach((todo) => addtodo(todo));
}; 

// Add an event listener to the "Add" button
button.addEventListener("click", () => {
  // Push the new to-do (from the input field) into the 'todos' array
  todos.push(input.value);

  // Update local storage with the new 'todos' array, converted to a JSON string
  localStorage.setItem("todos", JSON.stringify(todos));

  // Log the updated 'todos' array for debugging purposes
  console.log(todos);

  // Call the 'addtodo' function to display the new to-do on the page
  addtodo(input.value);

  // Clear the input field after the to-do has been added
  input.value = "";
});

// Function to add a to-do item to the DOM
function addtodo(todo) {
  // Create a new paragraph element to represent the to-do
  let para = document.createElement("p");

  // Set the text of the paragraph to the to-do content
  para.innerText = todo;

  // Append the new paragraph to the 'todoList' in the DOM
  todoList.appendChild(para);

  // Add a single-click event listener to cross out the to-do (mark it as completed)
  para.addEventListener("click", () => {
    para.style.textDecoration = "line-through"; // Apply the line-through style to the text
    remove(todo); // Remove the to-do from the list (update local storage)
  });

  // Add a double-click event listener to completely remove the to-do from the page and the list
  para.addEventListener("dblclick", () => {
    todoList.removeChild(para); // Remove the to-do paragraph from the DOM
    remove(todo); // Remove the to-do from the 'todos' array and local storage
  });
}

// Function to remove a to-do from the array and update local storage
function remove(todo) {
  // Find the index of the to-do in the 'todos' array
  let index = todos.indexOf(todo);

  // If the to-do is found in the array, remove it using 'splice'
  if (index > -1) todos.splice(index, 1);

  // Update local storage with the modified 'todos' array
  localStorage.setItem("todos", JSON.stringify(todos));
}

