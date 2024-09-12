let isEven = function (num) {
  return num % 2 == 0; // we’re checking if number modulas% 2 equal to 0 and return back to the function.
};
console.log(isEven(5)); //false
let arr = [2, 3, 5, 6, 10];
let findSum = function (arr) {
  //if user gave an input array itself this function is going to find that
  let sum = 0; // first, we will initialize the variable sum
  for (let val of arr) {
    // we know that we can take the elements in array using for of
    //this value stores the all value one by one in the array arr
    sum += val; //we can add that value one by one in this sum
  }
  return sum; //let’s return the value that has benn added in sum
};
console.log(findSum(arr)); //result:26 -here we passed the array itself as an argument rather then passing numbers usually just mentioning the array name is enough
