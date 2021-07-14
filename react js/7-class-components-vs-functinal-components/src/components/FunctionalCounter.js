import React, { useState } from 'react';

export function validateForm() {
    console.log(">>>>>> Validating  form...");
}

export function loadData() {
    console.log(">>>>>> loading data from server..");
}


const FunctionalCounter = () => {


    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Function Component</h1>
            <hr />
            <button onClick={e => setCount(count + 1)}><h2>Increment - {count}</h2></button>
        </div>
    );
};
export default FunctionalCounter;