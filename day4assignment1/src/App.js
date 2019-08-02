import React, { Component } from 'react';
import { BrowserRouter , Switch, Route, Link } from 'react-router-dom';
import Home from './HomeComponent/HomeComponent';
import About from './AboutComponent/AboutComponent';
import Contact from './ContactComponent/ContactComponent';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
        <div>
          <h2>React routing</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            {/* <li><Link to={'/about'} className="nav-link">About</Link></li> */}
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/contact' component={Contact} />

              <Route exact path='/:id' component={About} />
              {/* <Route path='/about' component={About} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;