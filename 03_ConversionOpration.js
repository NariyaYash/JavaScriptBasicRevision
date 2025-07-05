// let score = "Yash"
// let score = "33"
let score = "33ABC"
// let score = ""
console.table([score, typeof score]);

let valueOfScore = Number(score);
console.table([valueOfScore, typeof valueOfScore]);

let valueOfScoreBool = Boolean(score);
console.table([valueOfScoreBool, typeof valueOfScoreBool]);


/* 
"33" => 33
"33Abc" => NaN(NOt A NUMBER)
true/false => 1/0
"" => False
"sadad" => True
*/


// =====================> OPRATONS <==================================

/*
NOTE : If in String fir
*/

let age = 20
let neNum = -age;
console.log(neNum);

let str1= "YaSh";
let str2 = " Nariya";
let str3 = str1 + str2
console.log(str3);
// NOTE: If string first it will convert whole statement in string Otherwise first evalueat nuber then string
console.table([("1"+1),("23"+2+20),(20+20+"2")]);