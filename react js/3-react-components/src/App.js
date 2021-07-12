import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Employee from './components/Employee';
import Greet from './components/Greet';

let name = 'Praveen';

function renderData() {

  return <h1>{name}</h1>



}


const App = () => {
  return (

    <div className="container">
      <div className="card">
        <div className="card-header bg-info">APP Component</div>
        <div className="card-body">
          <div>

            {renderData()}
            {renderData()}

          </div>

          <div className="row">
            <div className="col-6">
              <Greet />
            </div>

            <div className="col-6">
              <Employee />
            </div>
          </div>


        </div>


      </div>
    </div>
  );
};

export default App;