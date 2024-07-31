let button = document.querySelector("button");
button.addEventListener("click", DisplayStats);
let resultdiv = document.createElement("div");
resultdiv.id = "result";
function DisplayStats() {
  const input = document.getElementById("input");
  const city = input.options[input.selectedIndex].value;
  let literacyRate = 0,
    population = 0,
    language = "";
  switch (city) {
    case "Bengaluru":
      population = 8443675;
      literacyRate = 88.71;
      language = "Kannada"; // this line is like statement
      break; // to stop from executing continuously

    case "chennai":
      population = 4646732;
      literacyRate = 90.2;
      language = "Tamil";
      break;
    case "Mumbai":
      population = 12442373;
      literacyRate = 89.73;
      language = "Marathi";
      break;

    case "Delhi":
      population = 16787941;
      literacyRate = 86.2;
      language = "Hindi";
      break;
  }
  let text = `The Indian city of ${city} has a population of ${population}. Language spoken is ${language} and literacy rate is ${literacyRate} %.`;

  document.getElementById("wrapper").appendChild(resultdiv);
  document.getElementById("result").innerHTML = text;
}
