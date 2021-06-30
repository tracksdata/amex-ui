let emps = [
    { "id": 1, "name": "Fraze", "gender": "Male", "age": 70, "salary": 43640 },
    { "id": 2, "name": "Ezekiel", "gender": "Female", "age": 99, "salary": 41400 },
    { "id": 3, "name": "Celinda", "gender": "Female", "age": 37, "salary": 38892 },
    { "id": 4, "name": "Maryjane", "gender": "Male", "age": 72, "salary": 11905 },
    { "id": 5, "name": "Georgette", "gender": "Male", "age": 92, "salary": 18815 }
]
// forEach
//filter
//map
//sort
//reducer



//for(let emp of emps){
//  console.log(emp);
//}

// 1. forEach
/*
emps.forEach(function(emp){ // resursive
    console.log(emp);
   
})
*/
/*
emps.forEach((emp,idx,data)=>{
    console.log(idx);
    console.log(emp);
    console.log(data);
})
*/

//emps.forEach(emp=>console.log(emp));


// 2 .filter : copy back object content

/*
// copy only male emplyees
let maleEmps=emps.filter(emp=>emp.gender==='Male');
//console.log(maleEmps);


let expEmps=emps.filter(emp=>emp.age>=50);
console.log(expEmps);
*/

// 3. map


/*
let ageList=emps.map(emp=>emp.age>=50);


console.log(ageList);

*/

/*
const ageMap=emps
.map(emp=>emp.age+1)
.map(age=>age+10)
.map(age=>age-10);
*/

// sort

// sort employees by age

/*
const sortedEmps=emps.sort(function(e1,e2){
    if(e1.age>e2.age){
        return 1;
    }else{
        return -1;
    }
});
console.log(sortedEmps);
*/

/*
const sortedEmps = emps.
sort((e1, e2) => (e1.age > e2.age ? 1 : -1));
*/
//const sortedEmps=emps.sort((e1,e2)=>e1.age-e2.age);
//console.log(sortedEmps);


// reducer

// calcuulate all emps salaries suym

/*
const salSum = emps.reduce(function (total, emp) {
    return total + emp.salary;
}, 0);

*/

//const salSum=emps.reduce((total,emp)=>total+emp.salary,0);

//console.log(salSum);

// combile all functions

/*

const combined=emps
    .map(emp=>emp.salary+15000)
    .filter(salaries=>salaries>=50000)
    .sort((a,b)=>a-b)
    .reduce((a,b)=>a+b,0)
console.log(combined);
*/





