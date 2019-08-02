import React, { Component } from 'react';
import './App.css';
//import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {


  state = {
          username: 'ammar'
  }

  
  render() {
    return (
      <div className="App">
       <h1>Day 3 Assignment 1</h1>
       <UserOutput userName={this.state.username}/>
       <UserOutput userName="Superman" />
      
      </div>
    );
  }
}

export default App;
