import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import ClassCounter from './components/ClassCounter';
import FunctionalCounter from './components/FunctionalCounter';
import Testt from './components/Testt';

const App = () => {
  return (
    <div className="container">

        <h1>Component Types Demo</h1><hr/>

      <ClassCounter/>
      <hr/>
      <FunctionalCounter/>

      <hr/>
      <Testt/>

      
    </div>
  );
};

export default App;