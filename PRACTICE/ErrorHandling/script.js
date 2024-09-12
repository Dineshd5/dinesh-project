try {
  let num = prompt("Enter a number");
  if (num === "") throw "cannot be empty";
  if (isNaN(num)) throw "enter a valid number";
  console.log(num ** 2);
} catch (error) {
  console.log(error);
} finally {
  console.log("Bye");
}
