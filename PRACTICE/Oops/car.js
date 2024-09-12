// car.js
//es6 modules
//in other languages if class is present we code that in seperate file and we can import it wherever we need, we can also write all the code in one file in javascript 
//but they have introduced modules in es6 concept by using that we can export and import the files
class Car {
    drive() {
        console.log("Driving");
    }
}

function fillGas() {
    console.log('Filling Gas');
}

function repair() {
    console.log('Repairing');
}
// Exporting the class and functions
export default Car;  // This exports the Car class as the default export
export { fillGas, repair };  // This exports the two functions (named exports)
