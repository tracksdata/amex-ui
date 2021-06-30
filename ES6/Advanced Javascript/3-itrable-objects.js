
let menu = [
    "idle",
    "vada",
    "poori",
    "dosa"
]

/*
let it=menu[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// or 

// for each loiop

//-----------------------
for(let item of menu){
    console.log(item);
}

// or

*/

// cuustom iterable objects

let numGenerator={
    [Symbol.iterator]:function(){
        let num=0;
        return {
            next:function(){
                console.log('next()');
                num++;
                let value=num<=10?num:undefined
                let done=num<=10?false:true
                return{value,done}
            }
        }
    }
}

//-----------------
//for(let num of numGenerator){
  //  console.log(num);
//}

/*
let[num1,num2,num3]=numGenerator // destrucdting
console.log(num1);
console.log(num2);
console.log(num3);
*/

/*
let numbers=[0,...numGenerator];
console.log(numbers);
*/



