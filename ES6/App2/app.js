'use strict'
/*
function changeColor(color) {
    return function(){
        document.body.style.background = color
    }
}


const bgColorGreen=changeColor('green');
const bgColorBlue=changeColor('blue');
const bgColorPink=changeColor('pink');


document.querySelector("#green").addEventListener('click', bgColorGreen)
document.querySelector("#blue").addEventListener('click', bgColorBlue)
document.querySelector("#pink").addEventListener('click', bgColorPink)
*/


//-----------------------------------------
// can we overload funtion .js language? ::  No
//-----------------------------------------


/*
function getFood() {
    return "No Food"
}

function getFood(pay) {
   
    if(arguments.length===0){
        return 'No Food'
    }
    return 'Biryani'
}

console.log(getFood()); // ?? 

*/

// default arguments
/*
function func(a,b=10){
    console.log(a);
    console.log(b);
}

func(100,200);
*/

// Function withy rest-param ES-6
/*
function func(a,b,...remaning){
    console.log(a);
    console.log(b);
    console.log(remaning);
}

func(10,20,12,43,2,87,41)


// in FP-language, functions are first class values/citizens

    - A function can be stored in a variable
    - A parameter of a function can be a function
    - The return type of a function can be a funciton

*/

//--------------------------------------------------------
// #1 - A function can be stored in a variable
// -------------------------------------------------------


/*
function greet(){
    console.log('Hello..');
}

var sayHello=greet;
sayHello();
sayHello();
sayHello();
*/

//--------------------------------------------------------
// #2 - A parameter of a function can be a function
// -------------------------------------------------------

/*
function greet(f){
    console.log('----------------------');
    f();
    console.log('----------------------');
    
}

var en=function(){
    console.log('Hello');
}

console.log(greet(en));

*/

/*

var nums=[1,3,5,7,9,2,4,6,8,10];

nums.sort();

var asc=function(a,b){return a-b}
var dec=function(a,b){return b-a}

nums.sort(asc);
nums.sort(dec);

*/


//--------------------------------------------------------
// #3 - The return type of a function can be a funciton
// -------------------------------------------------------


/*
function changeColor(bgColor) {

    let color= function(){
        document.body.style.background = bgColor
    }
    return color;
}

const bgColorGreen=changeColor('green');
const bgColorBlue=changeColor('blue');
const bgColorPink=changeColor('pink');


document.querySelector("#green").addEventListener('click', bgColorGreen)
document.querySelector("#blue").addEventListener('click', bgColorBlue)
document.querySelector("#pink").addEventListener('click', bgColorPink)


*/

// Destrructure ES6

/*

function teach() {
    console.log('teaching .js');
    let learn = function () { console.log('learning js'); }
    let task = function () { console.log('doing task on js'); }
    let exam = function () { console.log('writing exam on js'); }

    return { learn, task, exam }
}
*/

/*
let obj = teach();
obj.learn();
obj.task();
obj.exam();
*/

/*
 let{task,learn,exam}=teach();
 learn();
 task();
 exam();

 */

/*
let emp={
    id:10,
    name:'Praveen',
    salary:82633,
    "skills":['JS','java','Spring','Angular']
}

let a=emp.id;
let b=emp.name;
let c=emp.salary;

let {id,name,salary,skills}=emp;

*/




/*
  function binding 
  ------------------
  => executting funtions by objects
  two ways

    1. static
    2. dynamic


*/

//  ------------------
//   1. static
//  ------------------

/*
function sayName(person){
    console.log(person);
}

let p1={name:'Praveen'}
let p2={name:'Bucky Wall'}

sayName(p1);
sayName(p2);

*/

// this operator


function sayNameForAll() {
    console.log('I am ' + this.name);
}


let p1 = { name: 'Praveen', sayName: sayNameForAll }
let p2 = { name: 'Bucky Wall', sayName: sayNameForAll }

//sayNameForAll();

//p1.sayName();
//p2.sayName();

//delete p1.name;


// ---------------------------
// dynamic functtion binding
// ---------------------------

function doTraining(sub, duration, location) {
    // console.log('The Trainer '+this.name+' is teaching '+this.sub+' for '+this.duration+' hours at '+this.location);
    console.log(`The tnr ${this.name}, teaching ${sub} for ${duration} hours at ${location} location`);
}


//let tnr1={name:'Praveen',sub:'js',duration:'20 hours',location:'Pune',f1:doTraining};
//tnr1.f1();

let tnr1 = { name: 'Praveen' };
let tnr2 = { name: 'Bucky' };

Object.preventExtensions(tnr1);

//tnr1.doTraining=doTraining; // error

//--------------
// way-1 call()
//---------------

//doTraining.call(tnr1,'java','60 hours','Chennai');
//doTraining.call(tnr2,'Php','120 hours','pune');

//-----------------
// way-2 apply()
//-----------------

//doTraining.apply(tnr1,['JS','100 Hours','Delhi'])

//---------------------
// way-1 bind()
//---------------------

let newF = doTraining.bind(tnr1, '.js');

//newF('30 hours','pune');
//newF('40 hours','chennai');
//newF('100 hours','VILT');


// Spread Operator

/*
var nums = [1, 2, 3, 4, 5];
var b1=[200,300];
var a1 = [...nums, 6, 7, 8, 9,...b1, 10];

*/

let emps = [
    { id: 10, name: 'Praveen', salary: 3947344 },
    { id: 11, name: 'James', salary: 34343 },
    { id: 12, name: 'Kavya', salary: 54545 },
    { id: 13, name: 'Pooja', salary: 3473924 },
    { id: 14, name: 'Swati', salary: 263462 }
]

emps.push( { id: 15, name: 'Keerti', salary: 9749 }) // mutable style
let newObj=emps.concat({ id: 17, name: 'James Goedic', salary: 384739 }) // immutable type of modification

let itDeptEmps=[...emps, { id: 16, name: 'Chetan', salary: 9439047 }]



































