// Immediately Invoked Function Expressions (IIFE)

/* 
|==== Note ====|
=>There are two main resoan to USE IIFE function:
    1>TO avoid global scop polution
    2>For imediately invoke(EX: For DataBase connation)

=>* When write two IIFE that time put (;) between them for breack execution of first IIFE

*/


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')