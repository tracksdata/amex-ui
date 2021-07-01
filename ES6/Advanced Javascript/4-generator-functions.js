/*
function normalFunction(){
    let i=0;
    while(i<5){
        //....
        console.log(i);
        i++;
    }
}

normalFunction();
*/

// generated functions
/*

function* generatorFunction(){
    console.log('generatorFunction invoked..');
    yield 1
    console.log('heloo');
    console.log('line 2');
    console.log('line 3');
    yield 2
    console.log('ststement 2');
    yield 3
    console.log('ststement 3');
    yield 4
    console.log('ststement 4');
}

let it=generatorFunction();
it.next();
it.next();
it.next();
it.next();
it.next();
*/


/*

// 3 numbers will avaible at diffent intervals (async)

function* sum(){
    console.log('.........');
    let x=yield "give me x value"
    console.log(x);
    let y=yield "give me y value"
    console.log(y);
    let z=yield "give me z value"
    console.log(z);
    return x+y+y;
}

let it=sum();
*/

/*

function* eat(){
    console.log('..........');
    let idly=yield "gibe me idly"
    console.log(idly);
    let chutney=yield "give me chutney"
    console.log("yummy with "+idly+" & "+chutney);
    return "energy"
}

let it=eat();

*/

/*

function* getStop() {
    yield "Hyderabad";
    yield "Vijayawada";
    yield "Nellore";
    yield "Ongole";
    yield "Gummudipudi";
    yield "Chennai";
}

const traineLine=getStop();

const nextStopButton=document.querySelector("#next-stop");
nextStopButton.addEventListener('click',()=>{
    let currentStop=traineLine.next();
    if(currentStop.done){
        console.log("You reached Chennai");
        nextStopButton.setAttribute("disabled",true);
    }else{
        console.log(currentStop.value);
        document.querySelector("#stopName").innerHTML=currentStop.value;
    }
})

*/













