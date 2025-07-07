// Dates

let myDates = new Date()


console.log("\n")
console.log("Diffrent diffrent format of Dates: ");

console.table([myDates.toString(), myDates.toLocaleString(), myDates.toISOString(), myDates.toJSON()]);


console.log("\n")
console.log("Types of Dates: ")
console.table([typeof myDates]);


console.log("\n")
console.log("Custom Dates: ")
let myCoustomDate = new Date(2023, 0, 23, 5, 3, 59);
console.log(myCoustomDate);

console.log("\n")
console.log("Get specific details inside Dates: ");
let myCurrentDate = new Date();

console.log(myCurrentDate.getTime())
console.log("Convert Miliseconds to seconds: ", Math.floor(Date.now() / 1000));
console.log(myCurrentDate.getDay())
console.log(myCurrentDate.getFullYear())
console.log(myCurrentDate.getMonth())