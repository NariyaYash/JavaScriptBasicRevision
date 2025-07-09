/* ===========> DIFFRANCE BETWEEN ARROW AND NORMAL FUNTION <========================
1} Arrow fun don't have this binding | Normal funtion have their own this binding
2} Arrow fun don't have ARGUMENT OBJECT | Normal funtion have ARGUMENT OBJECT
3} Arrow fun don't use for CONSTRUCTER | Normal funtion is use for CONSTRUCTER
*/

console.log("Point 1 : 'We can use 'this' with Normal funtions inside object BUT Arrow funtion have not' ");
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log("\n");
console.log("Point 2 : 'inside any types of function(Arrow and normal) this allways undefine' ");

console.log("\n");
console.log("With NormalFun")
function chaiWithNormalFun() {
    let username = "hitesh"
    console.log(this.username);
    console.log(this);
}
chaiWithNormalFun()


console.log("\n");
console.log("With VariableFun")
const chaiWithVariableFun = function () {
    let username = "hitesh"
    console.log(this.username);
    console.log(this);
}
chaiWithVariableFun()

console.log("\n");
console.log("With ArrowFun")
const chaiWithArrowFun = function () {
    let username = "hitesh"
    console.log(this.username);
    console.log(this);
}
chaiWithArrowFun();


// |======= WAYS OF USE ARROW FUNCTIONS =======|

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({ username: "hitesh" })


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()