const name = "YASH"
const repoCount = 20

// console.log(name + repoCount + " Value");  ❌

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // ✅

const gameName = new String('hitesh-hc-com')  // Other Way Declar String

console.table([gameName.length, gameName.toUpperCase(), gameName.charAt(2), gameName.indexOf('t'), gameName[0]]);

const newString = gameName.substring(0, 4)
const anotherString = gameName.slice(-8, 4)

console.table([newString, anotherString]);

const newStringOne = "   YASH    "
console.table([newStringOne, newStringOne.trim()]);

const url = "https://YASH.com/YASH%20NARIYA"
console.table([gameName.length, gameName.toUpperCase(), gameName.charAt(2), gameName.indexOf('t'), gameName[0],
url.replace('%20', '-'), url.includes('sundar'), gameName.split('-')]);

console.log(gameName)