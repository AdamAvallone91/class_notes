// Day 04 Functions; scope; Hoisting; and Literals

//Literals
// They represent values in JS that have been hardcoded

let butlerMascot = 'Bulldog'
let myAge = 30  // this value is hardcoded
let arr = []    // this value is not hardcoded

//Hoisting

// General way of thinking about how code creation and execution // works in JS
// -JS puts [var]iables and functions declarations  into memory during compile phase of the code. This makes
//it feel that those are "on top" or loaded first.

console.log(myName);
// variable declaration = variable value
var myName = "paul"  // let or const areNOT hoisted, only functions and var[iables]


sayHello();

function sayHello() {  // function declaration is hoisted
    console.log("This is a function")
}

// func()  // cannot access func() before initialization
let func = function() {   // function expression is not hoisted
    console.log("This is a function expression")
}

// Scope
// Hierarchy if variables in iur code = commonly refer to as global scope, local scope.
//parent ScopedCredential, and child Scope.
let coffeeOrigin = //'Ethiopia' // global scope

function exampleFunction() {
    let x = 'Local scope - declared inside function'
    console.log(x)
    coffeeOrigin = "Ethiopia"
    console.log(coffeeOrigin)
}
exampleFunction();

//Global scope can be accessed by local function scope
// Local scope cannot be accessed by global functions

// MDN Docs: https://developer.mozilla.org/en-US/docs/Glossary/Scope




// Functions
// block of code designed to perform a particular task
// TBD

let addNums ('x, y'); {
    let result = x + y;
    return result
}

function addNums(x, y) {
    let result = ('function')
}

let myStuff = addNums(5,6)  // let myStuff = 11 <<-- inside memory location

console.log(myStuff)
