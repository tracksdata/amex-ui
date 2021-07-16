import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ProductForm from './components/ProductForm';
import Products from './components/Products';
import FindProductForm from './components/FindProductForm';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Product from './components/Product';

const App = () => {
  return (
    <div className="container">

      <h1>Router Demo</h1><hr />

      <BrowserRouter>

        <div className="row">
          <div className="col-3">
            <NavBar />
          </div>

          <div className="col-9">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/save" component={ProductForm} />
              <Route path="/list" component={Products} />
              <Route path="/find" exact component={FindProductForm} />
              <Route path="/find/:id" exact component={Product} />
            </Switch>
          </div>

        </div>


      </BrowserRouter>
    </div>
  );
};

export default App;