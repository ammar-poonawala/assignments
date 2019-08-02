import React from 'react';



const mystyle= {
    width: '500px',
    border : '2px solid grey '
  

};

const userInput = (props) => { //passing ref only .. if() is useed then function will execute as page loads
    return (
    <input type="text" style={mystyle} onChange = {props.changed}  value= {props.value}/>
    );
};

export default userInput;