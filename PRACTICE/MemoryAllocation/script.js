//primitive datatypes
let age = 25; // number
let name = "Dinesh"; // string
let isstudent = true; // boolean
let bignum = 9007199254740991n; // bigint
let id = symbol("id"); // symbol
let data = undefined; // undefined
let person = null; // null
/*PRIMITIVE VALUES ARE STORED DIRECTLY IN THE LOCATION THAT THE VARIABLE ACCESSES.
THEY ARE STORED ON THE STACK, WHICH IS A FASTER ACCESS MEMORY AREA.
 */

//Reference Datatypes
let numbers = [1, 2, 3]; // Array
let greet = function() { console.log("Hello!"); }; // Function
let prsn = { name: "Dinesh", age: 25 }; // Object

/*REFERENCE VALUES ARE STORED IN THE HEAP, 
WHICH IS AN AREA OF MEMORY USED FOR DYNAMIC ALLOCATION.
THE VARIABLE THAT CONTAINS A REFERENCE TYPE DOES NOT 
STORE THE ACTUAL DATA, BUT INSTEAD HOLDS A REFERENCE (OR POINTER) 
TO THE LOCATION IN MEMORY WHERE THE OBJECT IS STORED.*/
