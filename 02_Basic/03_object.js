// SingleTon ==> Construter Declaration 
const exObj1 = new Object({})

// Not SingleTon => Literals Declarations
const exObj2 = {}

let mySym = Symbol("mykey1");

const JsUser = {
    name: "YASH",
    "full name": "YASH NARIYA",
    [mySym]: "mykey1", // Use smbole inside object
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


console.log("TWO WAY TO ACCESS ObJECT: ");
console.log("1St WAY: ", JsUser.email)
console.log("2St WAY: ", JsUser["email"])

console.log("Only One WAY to ACCESS object : ", JsUser[mySym]);
console.log("Only One WAY to ACCESS object key string with Space  : ", JsUser["full name"]);

// ======== FREEZE OBJECT ===================
// JsUser.email = "hitesh@chatgpt.com"
// console.log("Freeze Objet(Don't able to change values) : ", Object.freeze(JsUser));
// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello !!!");
}
JsUser.greetingTwo = function () {
    console.log(`Hello !!! ${this.name}`);
}

console.log("Give refrance of function: ", greeting);
console.log("call function: ", greeting());
console.log("call function: ", greetingTwo());
