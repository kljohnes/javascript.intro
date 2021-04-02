// name(date) => data
// f(x) = x * x // sqr function
/*
Way one:
<keyword> <yourName>(<what I need to work){
    // What I do
    return // What I want to give back
}
*/

// Two ways to write a function in js
function sqr(x){
    return x * x // 5 * 5
}

console.log(sqr(5))

//let result = sqr(5)
//console.log(result)

let aSqr = (x) => {
    return x * x // Explicit return
}
let bMult = (x, y) => x * y
let cSqr = x => x * X  // Implicit return
 
function greet(){ // This needs no argument to work
    console.log("Hello World") 
}

greet()
greet()

function betterGreet(fName){ // This is a one parameters function
    console.log("Hello " + fName)
}
betterGreet("Justin") // Passes in one argument
betterGreet("Kate")

let createFullName = (fName, lName) => {
    return `${fName} ${lName}`
}
let fullName = createFullName("Justin", "Ahmann")
console.log(fullName)

function add2(x, y) {
    let z = 5 // This line is not returned from the function call
    return x+y
}
console.log(add2(3,5))