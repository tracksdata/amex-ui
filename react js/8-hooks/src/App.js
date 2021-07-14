import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'


const App = () => {


  const [counter, setCounter] = useState(0);
  const [evenNumbers, setEvenNumbers] = useState(0);
  const [person, setPerson] = useState({ id: 10, name: 'Praveen', age: 87 })
  const [isVisible, setIsVisible] = useState(true);

  function incrementEvenNumbers() {
    setEvenNumbers(evenNumbers + 2)
  }


  useEffect(() => { // component­Did­Update
    // invokes for every state changes...
    console.log(">>>>>>> useEffect for all functions");
  })

  useEffect(() => { //component­Did­Mount
    // if you want to load data only one time 
    console.log(">>>>>>> loads only one time in life cycle");
  }, [])

  useEffect(() => { // when couter is updated ...
    console.log(">>>> counter is updated....");
  }, [counter])

  useEffect(() => { // when even number is updated ...
    console.log(">>>> Even number is updated....");
  }, [evenNumbers])


  useEffect(() => { // when person or isVisible is updated ...
    console.log(">>>> Person is modified or Visibility changed to " + isVisible);
  }, [person, isVisible])

  return (
    <div className="container">

      <div className="alert alert-primary text-center" role="alert">
        <h1>useState,useEffect Hook </h1>
      </div>
      <hr />


      <h1>{counter}</h1>

      <button onClick={e => setCounter(counter + 1)}>Increment</button>
      <button onClick={e => setCounter(counter - 1)}>Decrement</button>
      <button onClick={e => incrementEvenNumbers()}>Even Numbers - {evenNumbers}</button>
      <button onClick={e => setPerson({ id: 11, name: 'James', age: 34 })}>Change Person</button>

      <br />
      <button onClick={e => setIsVisible(!isVisible)}>Toggle Data</button>

      <hr />

      {isVisible ?
        <div >
          <h2>{person.id}</h2>
          <h2>{person.name}</h2>
          <h2>{person.age}</h2>
        </div>
        :
        null
      }



    </div>
  );
};

export default App;