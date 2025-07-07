// Normal Way To use Number:
const num = 20;
console.log(num);
console.log("\n");

//Advance Way to Use Number:
const number = new Number(10)
const Othernumber = new Number(10000000)
console.log(number)
console.log(Othernumber.toLocaleString("en-IN"))
console.table([number.toString(), number.toFixed(2), number.toString().length,])



// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log("\n")
console.log("=======Maths==========")
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.table([Math.abs(-4), Math.round(4.6), Math.ceil(4.6), Math.floor(4.3), Math.min(1, 2, 3, 5, 0), Math.max(3, 68, 8, 9, 52, 222)]);

console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
