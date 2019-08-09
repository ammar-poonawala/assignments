import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
//import Product from './components/Products/Product';
import AddProduct from './components/AddProduct/AddProduct';
import EditProduct from './components/EditProduct/EditProduct';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import EditProductForm from './components/EditProduct/EditProductForm'; 

class App extends Component {


 

  render() {
    const style= {
      float:'right'
    }
    return (

      <BrowserRouter>
        <div className="App">
        {/* <h1>Home component</h1> */}
        {/* <nav> */}
        <ul className="app-nav">
            <li className="app-nav-li"><Link to={'/'}>Home</Link></li>
            <li className="app-nav-li"><Link to={'/addproducts'}>Products(Add Products)</Link></li>
            <li className="app-nav-li"><Link to={'/editproducts'}>Products(Edit Products)</Link></li>

           
            <li style={style}>Cart logo </li>
        </ul>
        {/* </nav> */}
        <hr />
        <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/addproducts' component={AddProduct} />
              <Route exact path='/editproducts' component={EditProduct} />
              <Route exact path='/editproductform/:id' component={EditProductForm} />
          </Switch>
        </div>
        </BrowserRouter>
    );
  }
}

export default App;
