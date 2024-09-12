//for loop
for (let i = 1; i <= 5; i++) {
  console.log("HELLO");
} //WE GET HELLO FIVE TIMES

for (let i = 1; i <= 5; i++) {
  console.log(i);
} // We Get Result 1, 2, 3, 4,5

for (let i = 5; i >= 1; i--) {
  console.log(i);
} // We Get Result 5,4,3,2,1

//while loop
let i = 20;
while (i >= 1) {
  console.log(i);
  i--;
}
//do while loop
do {
  console.log(i); //Code We Want to Repeat
  i--;
} while (i >= 8); //we can give while at last

// while (true) {
//   let num = Number(prompt("enter a number"));
//   if (!isNaN(num)) break; // WE USED (!) NEGETATION OPERATOR HERE
// }
//continue
for (let i = 0; i <= 20; i++) {
  if (i % 3 == 0) continue;
  console.log(i);
}
//FOR OF (for arrays)
let arr = ["pizza", "burger", "sandwich", "frenchfries"];

//using for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i].toUpperCase()); //used i to get array index
}
//using for of loop
for (let fastfoods of arr) {
  // for of stores every arr indexes in fastfoods in every iteration of arr
  console.log(fastfoods);
}

//FOR IN ( for objects)
item = {
  studentname: "dinesh",
  class: 10,
  marks: 423,
};

for (const key in item) {
  // for in stores every key values in every iteration of object in the variable key

  //   First Iteration:
  // key is "studentname".
  // item[key] is item["studentname"], which is "dinesh".

  //   Why key.marks Doesn't Work

  // key is a String: In each iteration, key is a string representing the property name of the object.
  // Accessing Property on String: When you write key.marks,
  //  you are trying to access the property marks on the string stored in key,
  //  which doesn't make sense because key itself is not an object but a string. Strings do not have a property named marks.
  console.log(item);
}






