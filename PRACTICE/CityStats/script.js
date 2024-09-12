document.querySelector("button").addEventListener("click", displayStats);

function displayStats() {
  let input = document.getElementById("inputID");
  let city = input.options[input.selectedIndex].value; // TO GET VALUE OF OPTIONS

  let population = 0,
    literacyRate = 0,
    language = "";

  switch (city) {
    case "Bengaluru":
      population = 8443675;
      literacyRate = 88.71;
      language = "Kannada"; // this line is like statement
      break; // to stop from executing continuously
    case "Chennai":
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

  let resultText = `The Indian city of ${city} has a population of ${population}. Language spoken is ${language} and literacy rate is ${literacyRate}%.`;

  let existingResult = document.getElementById("result");
  if (existingResult) {
    existingResult.remove();
  }

  let resultDiv = document.createElement("div");
  resultDiv.id = "result";

  document.getElementById("wrapper").appendChild(resultDiv);
  document.getElementById("result").innerHTML = resultText;
}
