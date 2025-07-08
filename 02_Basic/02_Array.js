const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log("It will push whole Array inside another array :=> ", marvel_heros);

const allHeros = marvel_heros.concat(dc_heros)
console.log("combin both array and retun new array : ", allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log("Spread all elements: ", all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log("Remove layer nestead array and retuen single array :=> ",real_another_array);



console.log(Array.isArray("Hitesh")) // *Return true or false*
console.log(Array.from("Hitesh"))  // convert array form other dataTypes
console.log(Array.from({ name: "hitesh" })) // interesting  * Return blank object *

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));