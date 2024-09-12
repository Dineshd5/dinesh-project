// Importing the Car class and the named functions from car.js
import Car, { fillGas, repair } from "./car.js"; // Importing the default export (Car class) and Importing named exports (functions)

let user1 = {
  // object
  name: "Ramya",
  age: 22, //property:value
  login() {
    console.log("you are logged in");
  },
  logout() {
    //method
    console.log("you are logged out");
  },
};

let user2 = {
  name: "Dinesh",
  age: 23,
  login() {
    console.log("Hi", this.name);
    console.log("you are logged in");
  },
  logout() {
    console.log("you are logged out");
  },
};

let user3 = {
  name: "babu",
  age: 23,
  login() {
    console.log("Hi", this.name);
    //`this` REFERS TO THE SPECIFIC OBJECT WE'RE CURRENTLY WORKING WITH
    console.log("you are logged in");
  },
  logout() {
    console.log("you are logged out");
  },
};
user3.login(); // invoking a method
user2.login();

/*•	INSTEAD OF MANUALLY CREATING MULTIPLE OBJECTS LIKE THIS, 
WE CAN DEFINE A CLASS. A CLASS SERVES AS A TEMPLATE(BLUPRINT,PATTERN) 
SPECIFYING THE DATA EACH USER SHOULD HOLD, LIKE NAME AND AGE.
WE CAN ALSO ADD MORE PROPERTIES SUCH AS EMAIL AND PASSWORD IF NEEDED. */

class User {
  /* we can define methods as usually like this 
  but you can't give data like let name = 'Raj' openly here 
  because we creating this like an common template for everyone
  if we gave name: Ram like this that means every user name will 
  be consider as ram that not right way to do */

  /*so, to solve this we can write a "constructor" 
it's just a method but it's name is constructor it is default in class*/
  static numberOfUsers = 0; // Static variables are shared by all instances of the class.
  // There's only one copy of 'numberOfUsers', regardless of how many objects we create.
  constructor(name, age) {
    //SINCE WE ONLY HAVE TWO VARIABLES (name AND age), WE CAN RECEIVE THEM AS PARAMETERS IN THE CONSTRUCTOR LIKE THIS:
    /*THESE (name AND age) ARE STORED SEPARATELY 
    IN EACH User OBJECT `userOne`, `userTwo`, ETC.
     AND ARE UNIQUE TO EACH OBJECT. THESE ARE CALLED
     instance variables*/
    this.name = name; // this 'name' and 'age' here is property of the newly created object
    this.age = age;
    User.numberOfUsers++; // In the constructor, we increment 'numberOfUsers++' to track the user count.
    // This ensures the count increases automatically each time a new object is created.

    //HOWEVER, STATIC VARIABLES MUST BE ACCESSED USING THE CLASS NAME, NOT THROUGH OBJECTS.
    //SO, TO INCREMENT THIS VARIABLE, WE WOULD USE `User. numberOfUsers ++`, AS IT’S A COMMON
    // VARIABLE FOR THE CLASS ITSELF, NOT THE INDIVIDUAL OBJECTS.

    /*'numberOfUsers' = 0 // TO KEEP TRACK OF HOW MANY USERS HAVE BEEN CREATED. 
    PLACING THIS VARIABLE INSIDE THE CONSTRUCTOR WOULD BE A POOR CHOICE BECAUSE
     IT WOULD BE INITIALIZED SEPARATELY FOR EVERY OBJECT, MAKING IT IMPOSSIBLE TO TRACK THE TOTAL.*/
  }
  login() {
    console.log("Hi", this.name);
    console.log("you are logged in");
  } //we don't need comma's here,
  logout() {
    console.log("you are logged out");
  }
  static displayTotalUsers() {
    //WE CAN ALSO DEFINE STATIC METHODS.
    console.log("Total Number Of Users", User.displayTotalUsers);
  }
}
//to create an "object" for this class
let userOne = new User("vidya", 21);
/*WHEN WE PASS THE "name" AND "age" LIKE THIS,WHAT HAPPENS 
IS THE `constructor` METHOD IS CALLED IMMEDIATELY WHEN 
THE "OBJECT" IS CREATED. THE `constructor`RECEIVES THIS 
DATA AND INITIALIZES IT MEANS (DECLARE IT) FOR THE OBJECT. */

let userTwo = new User("Ram", 35);
let userThree = new User("vasanthi", 48); // This is the value of the property,and 'userTwo' is object name, we can create as many objects we want like this
console.log("numberOfUsers", User.numberOfUsers); // WE WOULD SEE THE COUNT INCREMENT TO `3`,
//THE REASON THIS WORKS IS THAT THE CONSTRUCTOR INCREMENTS ` numberOfUsers ++` EACH TIME IT IS CALLED WHEN A NEW OBJECT IS CREATED.
User.displayTotalUsers; // WE CAN INVOKE THIS METHOD BY CALLING `User.displaytotalusers()` INSTEAD OF USING `console.log` DIRECTLY.
//WHEN WE CALL IT, WE’LL SEE `"Total Number Of Users is 3"` IN THE console.
//STATIC METHODS ARE INVOKED USING THE CLASS NAME.•	A GOOD ANALOGY IS `Math.sqrt()`,

//inheritance
class Paiduser extends User {
  //IN JAVASCRIPT, WE USE THE `extends` KEYWORD TO CREATE A SUBCLASS THAT INHERITS FROM A PARENT CLASS.

  constructor(name, age) {
    //ADDING EXTRA VARIABLES IN SUBCLASS CONSTRUCTOR:
    super(name, age);
    this.storage = 100;
    //THE `super()` KEYWORD IS USED TO CALL THE CONSTRUCTOR OF THE PARENT CLASS (`User`). SINCE THE PARENT CLASS (`User`) ALREADY HANDLES `name` AND `age`, WE PASS THOSE VALUES TO IT USING `super(name, age)`.
    //THIS WAY, THE `PaidUser` CLASS CAN REUSE THE LOGIC FOR `name` AND `age` FROM THE `User` CLASS, AND WE ONLY NEED TO ADD THE EXTRA FEATURES (LIKE `STORAGE`).
  }
  message() {
    console.log("You have 100Gb free Storage");
  }
  //overriding

  login() {
    console.log("Thank you for your support");
    return this; /*IN ORDER TO SUPPORT METHOD CHAINING, 
    WE NEED TO "return" THE OBJECT (`this`) AT THE END OF THE METHODS. 
    BY RETURNING `this`, THE OBJECT IS RETURNED AFTER EACH METHOD CALL,
    WHICH ALLOWS THE NEXT METHOD TO BE INVOKED ON IT.*/
  }
  //overriding ALLOWS A SUBCLASS TO REPLACE A METHOD FROM THE PARENT CLASS WITH ITS OWN VERSION.
}

let Paiduser1 = new Paiduser("Dhana", 30);
Paiduser1.login(); // WHEN WE CALL paidUser1.login(), IT CALLS THE login() METHOD FROM THE User CLASS BECAUSE  PaidUser INHERITS ALL THE METHODS FROM User.
// "userOne.message()" this will raise an error because the base class can't inherit the derived class

//method chaining
Paiduser1.login().message();

//PROTOTYPE IN JAVASCRIPT

function Userr(name, age) {
  //INSTEAD OF A CLASS, YOU WOULD DEFINE A FUNCTION THAT ACTS AS A CONSTRUCTOR.
  this.name = name;
  this.age = age;
}

Userr.prototype.login = function () {
  //TO AVOID DUPLICATING METHODS IN EVERY INSTANCE, YOU CAN USE THE `PROTOTYPE` TO ATTACH METHODS:
  console.log("hi " + this.name + " congrats You are logged in ");
};
user1 = new Userr("Abdul", 24);
user1.login();

// get and set

class Temperature {
  constructor(temp) {
    this._temp = temp; /*HERE, WE USE THE "UNDERSCORE" (`_`) BEFORE THE `temp`
     VARIABLE TO SIGNIFY THAT IT’S A PRIVATE PROPERTY, WHICH MEANS IT SHOULD 
     NOT BE DIRECTLY ACCESSED "OUTSIDE" THE CLASS.*/
  }
  get temp() {
    /*•	THE `get` METHOD IS USED TO RETRIEVE THE VALUE OF A PROPERTY,
 BUT IT ALSO ALLOWS YOU TO MANIPULATE OR FORMAT THE VALUE BEFORE RETURNING IT.*/

    return `${this._temp} degree celcius`;
    /* the this.'temp' and get "temp" name should not be 'same'
    it will gives an "error" so we user 'underscore'(_)* example see in the above "constructor"*/
  }

  // Setter for temperature with validation
  set temp(temp) {
    /*THE `set` METHOD IS USED TO ASSIGN A VALUE TO THE PROPERTY. 
    IT ALLOWS YOU TO CONTROL AND VALIDATE THE VALUE BEFORE SETTING IT.*/
    if (temp > 100) temp = 100;
    this._temp = temp;
  }
}
let temp1 = new Temperature(25);
// console.log(temp1._temp) //this should not be used right way to access is by using "get"
console.log(temp1.temp);

temp1.temp = 150;
console.log(temp1.temp); // Output: 100° Celsius (due to the validation)

//modules

// Creating an instance of the Car class
let car1 = new Car();
car1.drive(); // Output: Driving

// Using the functions
fillGas(); // Output: Filling Gas
repair(); // Output: Repairing
