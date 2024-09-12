var name = "dinesh";
reversed_name = name.split("").reverse().join("");
console.log(reversed_name);

// you declared a object that is string
// and you again created a object named reversedname and you assigned split,reverse and you joined that
// this way you can reverse the string

function reverseWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}
let sentence = "hello world";
console.log(reverseWords(sentence));

// in this method you created a funtion named reversewords and passed sentence param
// and you returning the value by splitting  it first individually
// and mapping it seperate by reversing ,joining and at last you joined everything

function combineArrays(arr1, arr2) {
  return arr1.concat(arr2);
}
const arr1 = [5, 4, 7];
const arr2 = [5, 5, 5];
console.log(combineArrays(arr1, arr2));

// first you declared a function name combine arrays
// and declared two param inside that and you returning it by concating that
// which means combining both into single one then you declaring a value for that param  and logging that

var sortValue = [5, 3, 4, 2, 1, 6, 10, 8, 9];
var newValue = sortValue.sort((a, b) => b - a);
console.log(newValue);

var sortValue = [5, 3, 4, 2, 1, 6, 10, 8, 9];
var newValue = sortValue.sort((a, b) => a - b);
console.log(newValue);

// here you created an array named
// sortvalue and declared a numbers and you created
// variable named newvalue and you sorted that by
// calling the declaed value before and sorting that by two arguments
// which is 'a' is first number and b is second number
// The comparator subtracts a from b for each pair of elements.
// If the result is negative, a comes before b.
// If the result is positive, b comes before a.
// If the result is zero, the order remains unchanged.

function sorting(number) {
  return number.sort((a, b) => a - b);
}
var number = [5, 4, 2, 1, 3, 6, 7, 8, 10, 9];
console.log(sorting(number));

function market(apples) {
  return apples.sort((a, b) => b - a);
}
var apples = [4, 6, 2, 7, 1, 3, 5, 8, 9, 10];
centerApples = Math.floor(apples.length / 2);
console.log(centerApples);

var chocolates = [1, 1, 3, 3, 4, 5, 6, 4, 7, 8, 8, 9, 10, 2];

chocolatesNumber = new Set(chocolates);
console.log(chocolatesNumber);

chocolatesNumberone = new Set();
chocolatesNumberone.add(1);
chocolatesNumberone.add("dinesh");
console.log(chocolatesNumberone);

let cars = ["audi", "bmw", "benz"];

function newCar(cars) {
  // Add "ferrari" to the array
  cars.push("ferrari");

  // Return the array after joining its elements into a string
  return cars.join();
}

console.log(newCar(cars)); // Output: "audi,bmw,benz,ferrari"

// We use the push() method to add "ferrari" to the cars array.
// Then, we use the join() method to join the elements of the array into a single string.
// We return this string from the newCar function.
// We call the newCar function with the cars array and log the result.

const num = 6;

function timing() {
  return setTimeout(() => {
    console.log(num);
  }, 1000);
}

timing();

const nu = 8;
let count = 0;

function time() {
  if (count < 8) {
    setTimeout(function () {
      console.log(nu);
      count++;
      time(); // Call time() recursively
    }, 1000); // 1000 milliseconds = 1 second
  }
}

time();

let button = document.querySelector("button");
button.addEventListener("click", calculate);

function calculate() {
  let english = Number(document.getElementById("english").value);

  let tamil = Number(document.getElementById("tamil").value);

  let Hindi = Number(document.getElementById("Hindi").value);
  let result = "";
  let group1 = english + tamil;
  let group2 = english + Hindi;

  if (group1 > group2) result = group1 + " marks";
  else if (group2 > group1) result = group2 + " marks";
  else {
    result = "none";
  }
  let resultdiv = document.createElement("div");
  document.getElementById("wrapper").appendChild(resultdiv);
  let text = ` ${result}`;
  resultdiv.innerHTML = text;
}
