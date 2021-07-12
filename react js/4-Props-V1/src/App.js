import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Greet from './components/Greet';

let count = 1;

function display() {
  console.log('.... display function');
}

const App = (props) => {

  const [greetings, setGreetings] = useState('');

  useEffect(() => {
    console.log('>>>>>> APP Component ' + count++);
  }, [greetings])



  let { name, title } = props;


  return (
    <div className="container">

      <div className="alert alert-info text-center">
        <h1>Welcome to {title}</h1>
      </div>

      <div className="card">
        <div className="card-header">APP Component</div>
        <div className="card-body">
          <h1>APP Component</h1>
          <hr />
          <button onClick={e => setGreetings('Good Morning')} className="btn btn-primary btn-space ">Good Morning</button>
          <button onClick={e => setGreetings('Good Noon')} className="btn btn-primary btn-space">Good Noon</button>
          <button onClick={e => setGreetings('Good Evening')} className="btn btn-primary btn-space">Good Evening</button>
          <button onClick={e => display()} className="btn btn-primary btn-space">Display</button>


        </div>
      </div>

      <br />

      <Greet message={greetings} />
    </div>
  );
};

export default App;