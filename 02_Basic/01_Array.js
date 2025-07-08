// Array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

// Array methods
console.log("Array methods: ");

// From Back side manupulation
console.log("\n From Back side manupulation :");
console.table([myArr.push(6), myArr, myArr.push(7), myArr, myArr.pop(), myArr])

console.log("\n From Front side manupulation :");
console.table([myArr.unshift(9), myArr, myArr.shift(), myArr, myArr.includes(9), myArr, myArr.indexOf(3), myArr])

console.log("\n Impotent: Convert Array elements to comma seprated strings=> ");
const newArr = myArr.join()
console.log(myArr);
console.log(newArr);


// slice, splice
console.log("\n Slice work with copy of orignal array : ");

console.log("Orignal Array: ", myArr);
console.log("slice Array : ", myArr.slice(1, 3));
console.log("Orignal Array: ", myArr);

console.log("\n Splice work with refrance of orignal array: ")
console.log("Origanl Array : ", myArr);
console.log("slice Array : ", myArr.splice(1, 3));
console.log("Origanl Array : ", myArr);

