let indianClock = document.querySelector("#indianClock");
let dubaiClock = document.querySelector("#dubaiClock");
let americanClock = document.querySelector("#americanClock");

let indianClockV1 = document.querySelector("#indianClockV1");
let dubaiClockV1 = document.querySelector("#dubaiClockV1");
let americanClockV1 = document.querySelector("#americanClockV1");


function jsClock(props) {

    let date = new Date().toLocaleTimeString('en-US', { timeZone: props })

    var ui = `
    <div>
        <div>  ${[props]} </div>
        <p> ${date}</p>
    </div>
    
    `

    return ui;

}

function reactClock(props) {

    let date = new Date().toLocaleTimeString('en-US', { timeZone: props })

    let ui = <div>
        <div>  {[props]} </div>
        <p> {date}</p>
    </div>

    return ui;
}


setInterval(() => {
    indianClock.innerHTML = jsClock('asia/kolkata');
    dubaiClock.innerHTML = jsClock('asia/dubai');
    americanClock.innerHTML = jsClock('america/new_york');

    ReactDOM.render(reactClock('asia/kolkata'), indianClockV1);
    ReactDOM.render(reactClock('asia/dubai'), dubaiClockV1);
    ReactDOM.render(reactClock('america/new_york'), americanClockV1);


}, 1000);


