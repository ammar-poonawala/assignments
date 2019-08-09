import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Axios from 'axios';
import * as actionTypes from '../../actions/actions';
import { connect } from 'react-redux';



class AddProduct extends Component{
     state ={
        title:null,
        price:null,
        category:null,
        imageUrl:null
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        console.log("in handle submit")
        console.log(this.state);
        Axios.post("http://localhost:3000/api/products", this.state)
        .then(response =>{
            console.log("in axios of add products");
            console.log(response);
            alert("added successfully");
        });
       
    };
    handleChange = (event) =>{
        event.preventDefault();
        const name= event.target.name;
        const value = event.target.value;
        
        console.log(name)
        console.log(value)
        this.setState({[name]:value});
       console.log("after setstate in add prodcts")
       console.log(this.state);
        
    }


render(){
    return (
        <div>
        <h1>add product form</h1>
        <form onSubmit={this.handleSubmit} >
            <div> <input placeholder="Product title" type="text" name="title" onChange={this.handleChange}/></div>
           <div><input placeholder="Product price" type="number" name="price" onChange={this.handleChange}/></div>
            <div><input placeholder="Product category" type="text" name="category" onChange={this.handleChange}/></div>
            <div><input placeholder="Product details" type="text" name="imageUrl" onChange={this.handleChange}/></div>
            <div>  <button type="submit">Submit</button></div>
        </form>
        </div>
    );
}
}

export default AddProduct