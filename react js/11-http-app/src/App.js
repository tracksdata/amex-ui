import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import FindProductForm from './components/FindProductForm';
import Products from './components/Products';
import ProducttForm from './components/ProducttForm';


const App = () => {
  return (
    <div className="container">
      <h1>AXIOS - DEMO</h1> <hr />


     {
       /*
      <ProducttForm/>
      <Products />
      */
     }

     <FindProductForm/>


    </div>
  );
};

export default App;