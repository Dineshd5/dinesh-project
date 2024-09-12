//using arrow function
let arr = [2, 3, 5, 6, 10];
let sumOfArr = (arr) => {
  // if only one parameter exists we don’t need to give parantheses()
  // if it had three ot two input like this (l,b,h) we should give parantheses
  // if no input has present you can just mention only parantheses like this ()
  let sum = 0;
  for (let val of arr) {
    sum += val;
  }
  return sum;
};
console.log(sumOfArr(arr));

let area = (r) => Math.PI * (r * r);
console.log(area(7));
function* myGenerator() {
  yield 'Apple';
  yield 'Banana';
  yield 'Cherry';
}

const gen = myGenerator();

console.log(gen.next().value); // 'Apple'
console.log(gen.next().value); // 'Banana'
console.log(gen.next().value); // 'Cherry'