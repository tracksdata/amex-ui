// Promise API

let trainer={
    askQuesSync(q){
        // ... 10 s
       
        return "this is the answer for "+q;
    },

    askQuesAsync(q){
        let promise=new Promise((resolve,reject)=>{
            setTimeout(()=>{
               // console.log("tnr resolve/reject the promise");// push / asynchronous
                //resolve("this is the answer for "+q);
               reject('oops, even i dont know')
            },5000)
        })
        return promise;
    }
}
/*
let a1=trainer.askQuesSync('what is js?');
let a2=trainer.askQuesAsync('what is promise api?');
console.log(a1);
console.log(a2);
*/

/*
let student={
    learn(){
        //------------------------------------------------
       // let ans=trainer.askQuesSync("Q1"); //pull / synchronous
       // console.log(ans);
       //------------------------------------------------


       console.log('student asking question on tnr');
       let promise=trainer.askQuesAsync("Q1");
       console.log("student got promise from tnr, defer actions to future");
       promise
       .then(answer=>{
           console.log(answer);
           console.log("thank you tnr for an answer");
       })
       .catch(error=>{
           console.log(error);
       })
       

       console.log("cont... with other learnings");
    }
}
student.learn();
*/


// Font end application
/*
  common modules
  ----------------
   - UI ==> render logic (html,style,layout,events..)
   - services/apis ==> n/w calls, etc .. i.e no ui logic
*/

//-----------------------------------
// Todo application
//----------------------------------

// serviuce layer

let service={
    fetchTodos(){
        let promise=new Promise((resolve,reject)=>{
            let xhr=new XMLHttpRequest();
            let url="https://jsonplaceholder.typicode.com/todos?_limit=5"
            xhr.open('GET',url,true)
            xhr.send(); // 10 secs

            xhr.onreadystatechange=function(){
                if(xhr.readyState===4){
                    let jsonText=xhr.responseText
                    let todos=JSON.parse(jsonText)
                    resolve(todos); //pushing
                }
            }

        })
        return promise;
        
    }
}
//------------------------------------------------------------------

function renderTodos(){
    let promise=service.fetchTodos();
    
    promise.then(response=>{
        console.log(response);
    })
    .catch(error=>{
        console.log(error);
    })
}
renderTodos();