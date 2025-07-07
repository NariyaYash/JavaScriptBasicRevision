//  Primitive
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

console.log("\n")
console.log("Primitive:  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt")

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
console.log(typeof anotherId);
// const bigNumber = 3456543576654356754n

console.table([typeof (score), typeof (scoreValue), typeof (isLoggedIn), typeof (outsideTemp), typeof (userEmail), typeof (anotherId)]);



// Reference (Non primitive)
console.log("\n")
console.log("Reference (Non primitive)")

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function () {
    console.log("Hello world");
}

console.table([typeof (myObj), typeof (heros), typeof (myFunction)]);



// ====================================== STACK(Primative DataType) | HEAP(Non-Primative DataType) ============================
console.log("\n")
console.log("STACK(Primative DataType) | HEAP(Non-Primative DataType)");



console.log("\n")
console.log("STACK(Primative DataType)");

let userOne = "HI yash";
let userTwo = userOne;
userTwo = "by Yash"

console.table([userOne, userTwo, "Will not change variable value due to it will copy the variable value in stack"]);


console.log("\n")
console.log(" HEAP(Non-Primative DataType)");

let objOne = {
    email: "yash@gmail.com",
    number: "123456789"
};
let objTwo = objOne;
objTwo.email = "hi@gmail.com";

console.table([objOne, objTwo, "Will change variable value due to it will 'give refrence of the variable addreass in Heap' "]);