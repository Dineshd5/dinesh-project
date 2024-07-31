let button = document.querySelector("button");
button.addEventListener("click", displayValue);
let finalresult = document.createElement("div");
finalresult.id = "finalresult";

button.addEventListener("mouseenter", () => {
  wrapper.classList.add("hovered");
  body.classList.add("hovered");
  //to style
});

button.addEventListener("mouseleave", () => {
  wrapper.classList.remove("hovered");
  body.classList.remove("hovered");
  //to style
});

function displayValue() {
  let input = document.getElementById("inputvalue").value;
  let inputRegex = /(\d+)\s*([\+\-\*\/])\s*(\d+)/; // Matches a number, an operator, and another number
  let inputmatch = input.match(inputRegex);
  Number(inputmatch.shift());
  let operator1 = Number(inputmatch[0]),
    operator2 = Number(inputmatch[2]),
    operand = inputmatch[1];

  switch (operand) {
    case "+":
      result = operator1 + operator2;
      break;
    case "/":
      result = operator1 / operator2;
      break;
    case "*":
      result = operator1 * operator2;
      break;
    case "-":
      result = operator1 - operator2;

      break;

    default:
      result = "Invalid operator";
  }

  document.getElementById("wrapper").appendChild(finalresult);
  let Text = `Result: ${result}`;
  finalresult.innerHTML = Text;
}
