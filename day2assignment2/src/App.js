import React, { Component } from 'react';
import './App.css';
import ValidationComponent from  './ValidationComponent/ValidationComponent';
import CharComponent from  './CharComponent/CharComponent';

class App extends Component {

  state = {
    userInput: ""
  }

  inputHandler = (event) =>{
    this.setState({userInput: event.target.value});
  }
 
  removeHandler = (index) =>{
    const text = this.state.userInput.split("");
    text.splice(index,1);
    const after = text.join("");
    
    this.setState({userInput:after});
  }
  render() {

    const charList = this.state.userInput.split("").map((char, index )=> {
      return (<CharComponent  char ={char} key = {index} clicked = {() => this.removeHandler(index)}/>);
    })
    return (
      <div className="App">
        <h1>Day2 Assignment 2</h1>
       <input type="text"  onChange={this.inputHandler} value={this.state.userInput} />
       <p>{this.state.userInput}</p>
       <ValidationComponent inputLenght={this.state.userInput.length} />
       {charList}
      </div>
    );
  }
}

export default App;
