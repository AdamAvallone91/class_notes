// Arrays & Objects

// Array
/* High-level, list-like object used to be traversed and mutated.
-uses integers as elements index
- can be accessed by bracket notation (index) or dot notation (method)
- arrays are zer index
- first object at zero (0)
- last object at array length - 1
*/

// Create an array

let british = ["Rolls Royce", "Bentley", "Caterham", "Aston Martin"];

console.log(british[0]); // logs first element "Rolls Royce"
console.log(british[1]); //logs second element "Bentley"
console.log(british[british.length -1]);  //logs the last element, "Aston Martin"

// Array Methods

console.log(british.length); // returns length of an array

british.push("MINI");  // appends element to the end of an array
//console.log(british);

british.splice(0, 1, "Jaguar", "Rolls Royce");  // index to start at, how many to remove, what to replace item with
console.log(british);

let bReturn = british.pop();  // removes last index of an array, "MINI and returns it for a brief moment"
console.log(bReturn);  // shows .pop() holding onto that item

console.log(british.unshift("Bentley", "Land Rover"));  // adds elements to array start and returns array length

british.shift(); // removes start element of an array
console.log(british);

console.log(british.indexOf("Land Rover", 1));  // searches an array for an index of an element. can add second param to select start index

console.log(british.includes("Land Rover")); // determines whether array has specific element. Can ass second param to select start index. Returns true/false

// Advanced array manipulations

let german = ["BMW","Mercedes", "Audi", "porshce", "Alpina", "VW"];

//for (cars of german) {
//    console.log(cars)
//};

// array.forEach() runs a function for each element in an array
// takes a callback function inside as one of its parameters

german.forEach(car => console.log(car));
// same as    (function(car) {console.log(car) })

// array.map() => transforms elements in original array by callback function

console.log(german.map(car => car.toUpperCase()));

// array.filter() => creates a new array with elements that pass the test in a given function

// creates an array with car elements that start with letter "A"
console.log(german.filter(car => car.startsWith("A")));

// Objects
/* Containers for values in a JSON format (JavaScript Object Notation).
  -exists as a string
  - has properties and methods
  -.property
  -.method()
  -associates array (each property is associated with a sting value)
  */

// define JS object with an object literal
console.log("_______________");
let car = {
     // key : value pair (properties) that are comma separated
     make: "Porsche",
     model: "911",
     country: "Germany",
     driver: "Walter Rohl",
     association:"Jeff",
     lastName: "Adam",
};

// Accessing object values

console.log(car.make);  // access using a key
console.log(car["model"]); // access using object key
let returnKeys = Object.keys(car); // returns keys in a object
console.log(returnKeys);
console.table(car) // console logs a table of an object

// Object property reassignment
car.make = "Maserati";
car["model"] = "GranTurismo S";
console.log(car);
console.log(car.association.name); // to access nested objects with an object (think of a ladder)



// Object Constructor

let client = new Object;  // creates an empty object
console.log(client);

client.firstName = "Adam";
client.lastName = "Avallone";
client.birthYear = 1991;
console.log(client);

let manager = {
    firstName: "Adam",
    lastName: "Avallone",
    birthYear: 1991,
    // First way requires parameter of birthYear from outside
    //setAge: function(birthYear) {
    //  return 2021 - birthYear
    //}
    //second way takes property from this.birthYear
    //}
    //setAge: function() {
    //  return 2021 - this.birthYear
    //}
    setAge: function() {
      this.age = 2021 - this.birthYear  // creates new age property with value of function
      // calculation once it has been called
    }
    //age: "calculated age or 30 in this case"
  }
    console.log("_______________")
    //console.log(manager.setAge(1991))
    console.log(this) //is a global object
    manager.setAge()
    console.log(manager.age)
