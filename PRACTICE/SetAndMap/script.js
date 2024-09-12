//INITIALIZATION AND CREATION OF `set` OBJECTS:
let arr = [1, 1, 2, 3, 4, 3, 5, 5, 5, 5, 10, 8];
let mySet1 = new Set(arr); //THE 'Sets' AUTOMATICALLY REMOVE DUPLICATES AND STORE UNIQUE VALUES.
console.log(arr);
console.log(mySet1);

//ADDING ELEMENTS TO A NEW `set` OBJECT (`myset2`):
let mySet2 = new Set();
mySet2.add(4); //NUMBERS
mySet2.add(5); //NUMBERS
mySet2.add("pqr"); //STRING
mySet2.add({ a: 1, b: 2 }); //OBJECT
mySet2.add(4); //ADDING `4` AGAIN HAS NO EFFECT, AS `SET` ONLY STORES UNIQUE VALUES.
console.log(mySet2);

//ADDITIONAL OPERATIONS ON `mySet2`:
let obj = { a: 1, b: 2 };
mySet2.add(obj);
console.log(mySet2);
console.log(mySet2.size);
console.log(mySet2.has(6));
console.log(mySet2.has(4));
console.log(mySet2.delete(4));
console.log(mySet2);

//CONVERTING `SET` TO AN ARRAY:
let arr2 = Array.from(mySet2);
console.log(arr2);

//CREATING AND MANAGING A MAP

let map1 = new Map(); //INITIALIZES AN EMPTY `Map` object
map1.set("a", 1);
//THIS LINE ADDS A KEY-VALUE PAIR TO THE `Map` OBJECT `map1`.
//THE KEY IS `'a'` AND THE VALUE IS `1`.
//AFTER THIS LINE, `map1` LOOKS LIKE THIS: Map (1) {'a' => 1}
map1.set("b", 2);
map1.set("a", 3);
/*THIS LINE UPDATES THE VALUE ASSOCIATED WITH THE KEY `'a'` TO `3`
IMPORTANT: IN A `Map`, KEYS MUST BE UNIQUE, SO WHEN YOU TRY TO ADD A KEY THAT ALREADY EXISTS, 
THE VALUE IS UPDATED INSTEAD OF CREATING A NEW ENTRY.*/
console.log(map1); //output: Map (2) {'a' => 3, 'b' => 2}

console.log(map1.has("a"));
map1.delete("a");
map1.set("d", 2);
map1.set("e", 3);
console.log(map1);

//2. ITERATING OVER THE MAP

for (let i of map1) {
  //THIS LOOP ITERATES OVER `map1`, LOGGING EACH KEY-VALUE PAIR AS AN ARRAY.{
  console.log(i);
}

//THIS LOOP ITERATES OVER `map1`,DECONSTRUCTING EACH KEY-VALUE PAIR
//INTO `k` (KEY) AND `v` (VALUE), AND LOGS ONLY WHAT'S IN THE CONSOLE
for (let [k, v] of map1) {
  console.log(k);
}
for (let [k, v] of map1) {
  console.log(v);
}

//we can also use this method to iterate
for (let k of map1.keys()) {
  console.log(k);
}
for (let v of map1.values()) {
  console.log(v);
}

//3.USING `foreach` TO ITERATE OVER THE MAP
map1.forEach((v, k) => {
  console.log("key", k, "value", v);
});

// 4. CREATING A MAP FROM A 2D ARRAY
let kvarray = [
  ["a", 1],
  ["b", 1],
];
let map2 = new Map(kvarray); //CREATES A NEW `MAP` FROM `kvArray`.
console.log(map2);
console.log(...map2); // SPREAD OPERATOR TO CONVERT MAP INTO 2D ARRAY
