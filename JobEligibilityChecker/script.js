let button = document.querySelector("button");
button.addEventListener("click", check);
// Get the selected radio button
let resultdiv = document.createElement("div");
resultdiv.id = "result";

function check() {
  let selectedRadio = document.querySelector('input[name="option"]:checked');
  // 'input[name="option"]:checked' is the CSS selector used here:
  // input[name="option"] selects all <input> elements with the name attribute set to "option". This is used to target the radio buttons.
  // :checked is a pseudo-class that selects only the radio button that is currently checked.
  // Get the value of the selected radio button
  let selectedRadioValue = selectedRadio ? selectedRadio.value : "";
  let result = "";
  switch (selectedRadioValue) {
    case "Illiterate":
      result = "Not-Eligible";
      break;
    case "HighSchool":
      result = "Eligible";
      break;
    case "UG":
      result = "Eligible";
      break;
    case "PG":
      result = "Not-Eligible";
      break;
    case "Doctorate":
      result = "Not-Eligible";
      break;
    default:
      result = "No option selected";
      break;
  }

  resultdiv.innerHTML = result;

  document.getElementById("wrapper").appendChild(resultdiv);
}
