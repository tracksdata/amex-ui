//'use strict'
/*

   Scopes/execution context
   ---------------------------

   memory/statck frame which contains args and 
   local variables to execute set of instuctions


   two types of scopes
   1. phase-1 : creation/push
   2. phase-2: execution/pop

  1. phase-1 : creation/push
  ----------------------------
   imp-note
   ---------
   -> variable declared with 'var' keyword any-where in this scope, always get
    hoisted with default value (undefined)

  2. phase-2: execution/pop
  ---------------------------
  -> instructions will execute in sesuence.


  Typef of functions
  --------------------
  1. named function
  2. anonumous function
*/

// named function

//abc(); // calling

/*
function abc() { // defination
    console.log('test abc v2...');
}

*/

//abc(); // calling

//console.log(sum);

//var sum;
//sum=function(a,b){
// return a+b;
//}
//sum();

//let add=(a,b)=>a+b;

// Functions - In depth

/*
function teach() {
    console.log('Trainer is teaching Java Script');

    function learn() {
        console.log('Students are learning java Script....');
    }

    function task() {
        console.log("Students doing a task on java script");
    }
    // teach function ends here
    console.log('teach function ends here...');
    return { learn, task };
}
*/

/*
let obj = teach();

obj.learn();
obj.task();

obj.learn();
obj.task();

obj.learn();
obj.task();

*/

//console.log(v);
// v=12

/*
var v=12; // global scope (index.js)
function f1(){ // f1 scope
    console.log(v);  //? 
   // var v=13;
}

f1();  // f1-scope <== global scope(index.js) <== window

*/

/*
var v=12;
function f1(){ // parent scope << - f1 <<- index.js

    function f2(){ // child of f1 :: f1 <<<- f2
        console.log(v); // undefined
    }

    f2();
    var v=13; 
}

f1(); //?
*/

//var v=12;
//var v=13;
//console.log(v);



/*
var v=12;

if(true){
  var v=13;
}

console.log(v); //??  13 // no blcked scope

*/

//--------------------------------
// problems with 'var' keyword
//--------------------------------
/*
    => always get hoist
    => can re-declare same variable within scope
    => no block scope

    sol
    -----
    => use 'let' and 'const' keywords (from es6)

*/

//let v=12;
//let v=13;


/*
var v=12;

if(true){
  let v=13;
}

console.log(v);

*/

//const v=12;
//v=13;
//console.log(v);

/*
const trainer={
    name:'Praveen'
}

trainer.name='James';
console.log(trainer);
*/

function func(){
   var i=100; // error in strict-mode, but non strict-mode which is implecit object
   console.log(i);
}

func();
//console.log(i); 




























