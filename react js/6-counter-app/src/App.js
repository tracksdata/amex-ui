import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import CounterBox from './components/CounterBox';
const App = () => {

  const buttons = [5, 10, -5, -10, 20, -20, 30, -30]

  return (
    <div className="container">

      <h1>APP Component</h1> <hr />

      <CounterBox buttonLables={buttons} />


    </div>
  );
};

export default App;