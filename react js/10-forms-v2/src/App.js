import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import FlightSearch from './components/FlightSearch';
import Success from './components/Success';

const App = () => {

  const [flight, setFlight] = useState({})
  const [formSubmited, setFormSubmited] = useState(false);
  const [number, setNumber] = useState(100);

  function searchFormData(flight) {
    setFlight(flight);
    console.log('>>> Parent <<<<');
    console.log(flight);
  }
  return (
    <div className="container">

      <div className="alert alert-primary text-center" role="alert">
        <h1>React-Hook-Form</h1>
      </div>
      <hr />



      <FlightSearch setFormSubmitStatus={e => setFormSubmited(e)} onAction={e => searchFormData(e)} />

      <div>
        {
          formSubmited ? (<Success flight={flight} />) : null
        }

      </div>


      <div>




      </div>


    </div>
  );
};

export default App;