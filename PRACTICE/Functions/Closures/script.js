let a = 100; // declaring a variable
function func1() {
  //Defining a function `func1`
  let b, c; /*USUALLY, AFTER WE'VE DEFINED A FUNCTION, 
             AND DECLARED  ANY VARIABLES INSIDE IT ARE CALLED LOCAL VARIABLES,
             MEANING THEY ARE DECLARED SPECIFICALLY FOR THAT 
             PARTICULAR FUNCTION AND CAN ONLY BE USED INSIDE 
             THAT FUNCTION.*/
  console.log("a is ", a); // inside the function, logging the value of `a`
}

func1(); // calling the function, it outputs "a is 100" as expected
a = 200; // changing the value of `a` to 200
func1(); // calling the function again, it outputs updated value "a is 200"

/*•	IN JAVASCRIPT, WHEN YOU CREATE A FUNCTION, YOU CAN NOT ONLY USE VARIABLES 
THAT ARE DEFINED INSIDE THAT FUNCTION (KNOWN AS LOCAL VARIABLES), BUT YOU CAN 
ALSO ACCESS VARIABLES THAT ARE DEFINED OUTSIDE OF THE FUNCTION, IN THE 
SURROUNDING SCOPE. THIS MEANS THAT FUNCTIONS CAN USE VARIABLES FROM 
THE OUTER ENVIRONMENT WHERE THEY WERE CREATED.*/

/*•	WE CAN RETURN A FUNCTION FROM ANOTHER FUNCTION, 
WHICH IS A KEY CONCEPT IN CLOSURES.*/

/*WE SAW THAT `map`, `filter`, AND OTHER METHODS ARE HIGHER-ORDER FUNCTIONS
BECAUSE WE PASS A FUNCTION AS A PARAMETER.

SIMILARLY, IF A FUNCTION RETURNS ANOTHER FUNCTION, 
IT IS ALSO CONSIDERED A HIGHER-ORDER FUNCTION.*/
function outerFunction() {
  let outerVariable = "I am from outerFunction"; // A variable inside the outer function
  function innerFunction() {
    console.log(outerVariable); // The inner function uses the variable from the outer function
  }
  return innerFunction; // NOW the outer function returns the inner function
}
const closureFunction = outerFunction(); //We're receiving it in closureFunction here because the outerFunction is going to return the inner function  function, the outer function runs and gives you the inner function
closureFunction(); // this still works because the inner function remembers the outer variable

//Let’s dive into another simple example using an analogy.
function kitchen() {
  // The kitchen is where the magic happens.
  let fridge = "IceCream"; // Inside the kitchen, there's a fridge, and it's got some ice cream in it.

  function openFridge() {
    // You decide to open the fridge.
    let bowl = "Scoop of IceCream"; // You take out a bowl and scoop some ice cream into it.
    console.log("You have in your bowl:", bowl); // You enjoy the ice cream from your bowl.
    console.log("You remember:", fridge); // While eating, you still remember the ice cream came from the fridge.
  }

  openFridge(); // You open the fridge to get the ice cream.
}

kitchen(); // You enter the kitchen.

function outer(name) {
  // Defining a function `outer` with a parameter `name`
  console.log("Hello", name); // Logging a greeting with the `name` parameter

  return function inner() {
    // Returning the inner function instead of calling it
    console.log("Hello again", name); // The inner function still has access to `name`
  };
}
let call1 = outer("dinesh");
// calling `outer` and passing 'dinesh' as the parameter, storing the returned function in `call1`
call1(); // Calling the stored function, outputs 'Hello again, dinesh'
let call2 = outer("babu"); // Calling `outer` with a different name
call2();
call1();

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

let add5 = makeAdder(5);
console.log(add5(10));

let add10 = makeAdder(10);
console.log(add10(50));
console.log(add5(50));


