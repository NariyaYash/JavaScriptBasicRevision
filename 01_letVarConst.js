function testScope() {
  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;
  }
  console.log(a); // ✅ Works (function scoped)
  // console.log(b); ❌ Error (block scoped)
  // console.log(c); ❌ Error (block scoped)
}
testScope();




const name = "yash Nariya";
// name = "hiii"   Error

let age = 22;
// let age = 22;  error

var std = 12;
// var std = 12; no error


console.table([name,age,std])

// note 
/* 
  =>Prefer not use Var
  =>Due to issues in functional,block scope, redeclaration and defination issues

*/