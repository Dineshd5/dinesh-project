const btn = document.getElementById("btn");
const colortext = document.getElementById("color");
const wrap = document.getElementById("wrap");
btn.addEventListener("click", changebg);
let hexVal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
function randomHexval() {
  let arrindex = Math.floor(Math.random() * hexVal.length);
  // Math.random() does not take any arguments.
  // It simply generates a random floating-point number between 0 (inclusive) and 1
  return hexVal[arrindex];
  // this will return the hexVal index values like 0 to f randomly that we stored in arrindex back to the function randomHexval()
  // The return statement in a function is used to:
  // 1.Output a Value: Send a value back to where the function was called.
  // 2.Stop Execution: Exit the function immediately.
}

function changebg() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += randomHexval();
    //this will loop the randomHexval() function six times and
    // add that index value in hexColor variable with Joining hash(#)
    wrap.style.backgroundColor = hexColor; //TO CHANGE BACKGOUND COLOUR
    colortext.innerHTML = hexColor; // TO CHANGE TEXT
  }
}
