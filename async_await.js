// Synchronous JS Functions
/*  -returns a promise
    -await makes function wait for a Promise
    */

    function standardFunction() {
        return console.log( "1 this is a standard function.")
    }

    standardFunction();

async function asyncFunction() {
    return console.log("2 This returns a promise.")
}

asyncFunction()
//async function asyncFunction() {
//    return Promise.resolve("This is Resolved")
//}

async function asyncAction() {
    setTimeout(() => {
        console.log("3 Async finally hit yo!")
    }, 3000);
}
asyncAction()

/*promise
/*
Commit to something 
    -completed => resolved
    - rejected
*/

let p = new Promise((resolve, reject) => {
    // Promise object with one function with resolve and reject parameters
    let a = 1 + 1
    if (a ===2) {
        resolve("Promise successful and Resolved")
    } else {
        reject("Promise rejected")
    }
})

p.then((message) => {
    //anything inside .then is a resolve. Takes a fix with single parameter
    console.log(`This is the then ${message}`)
}).catch((message) => {
    //anything inside.catch is a reject state
    console.log(`This is the .catch(). ${message}`)
})

//Try, Catch, Throw, and Finally
// try/catch only handles runtime errors

// try {
//     // tests a block of code
//     //callingSomeBSFunctionThatDoesntExist()
//     console.log("Start of the try") 
// }   catch(err) {
//         //handles the error
//         console.log("Error has ocurred " + err)
// }       finally {
//         // executes the code after try/catch regardless of the result
//         console.log("Finally ALWAYS runs")
//     }
//     console.log("The execution continues.")


    // Custom Errors

    // let json = '{"age: 30}'

    // try {
    //     let user = JSON.parse(json);
    //     if (!user.name) {
    //         throw new SyntaxError("Incomplete data: no name")
    //     }
    // } catch(e) {
    //     console.log(`JSON Error: ${e}`) // e.name or e.message for specificity
    // }

function upperCase(name) {
    if (typeof name === "string") {
        throw new TypeError("Name must be a string")
    }
    return name.toUpperCase();
}

console.log(upperCase(47))

// Quick function recap and how return differs from console.log
//function addNums(x,y) {
//    let sum = x + y;
//    return sum;
//}


//addNums(5,5)
//let result = addNums(5, 5)
//let result = addNums(7, 15)
//document.querySelector(".result").innerText = result
//document.querySelector(".result2").innerText = result2