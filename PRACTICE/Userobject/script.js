let item = {
  name: "phone",
  price: 25000,
  quantity: 1,
};

console.log(item); // Logs the entire 'item' object

//ACCESSING OBJECT PROPERTIES

//1.DOT NOTATION
console.log(item.price);
item.price = 26000; //updating the object
console.log(item.price);

//2.SQUARE BRACKET NOTATION:
console.log(item["price"]);
let key = "price";
console.log(item[key]);
/*WHEN TO USE SQUARE BRACKET NOTATION:
USEFUL WHEN THE PROPERTY NAME IS STORED IN A VARIABLE OR CONTAINS SPECIAL CHARACTERS.*/

//3.NESTED OBJECTS AND ARRAYS
let item1 = {
  name: "phone",
  price: 25000,
  quantity: 1,
  categories: ["electronics", "phones"],
  dimensions: {
    length: 7,
    breadth: 3.5,
    height: 0.5,
  },
};
console.log(item1); // Logs the entire object including nested objects and arrays

//4.ACCESSING NESTED OBJECTS AND ARRAYS

//1.ACCESSING THE ENTIRE NESTED OBJECT:
console.log(item1.dimensions);
//2.ACCESSING PROPERTIES OF THE NESTED OBJECT:
console.log(item1.dimensions.length);
//3.ACCESSING THE ENTIRE ARRAY:
console.log(item1.categories); // Logs the 'categories' array
//4.ACCESSING A SPECIFIC INDEX IN THE ARRAY:
console.log(item1.categories[0]);

//5.OBJECT METHODS
/*METHODS ARE FUNCTIONS DEFINED WITHIN AN OBJECT. 
THEY PERFORM ACTIONS RELATED TO THAT OBJECT.*/

let item2 = {
  name: "phone",
  price: 25000,
  quantity: 1,
  buy: function () {
    console.log("Item added to cart");
  },
  addToList: function () {
    console.log("Item added to cart");
  },
};
//ACCESSING METHODS:
item2.buy();
item2.addToList();

//6.ALTERNATIVE WAYS TO CREATE OBJECTS

let item3 = new Object();
item3.name = "charger";
item3.price = 700;
item3.quantity = 1;

console.log(item3);
