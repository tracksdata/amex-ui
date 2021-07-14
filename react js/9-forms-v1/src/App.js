import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import FlightSearch from './components/FlightSearch';
const App = () => {
  return (
    <div className="container">

      <div className="alert alert-primary text-center" role="alert">
        <h1>Flight Search Form</h1>
      </div>
      <hr />

      <FlightSearch/>

    </div>
  );
};

export default App;