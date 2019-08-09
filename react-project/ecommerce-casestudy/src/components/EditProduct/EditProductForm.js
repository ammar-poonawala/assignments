import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

class EditProductForm extends Component{


    componentDidMount(){
        console.log("got params.id ")
        console.log(this.props.match.params.id)
        //call  get by id ...start here

    }

    render(){
        return (
            <div>
                <h2>Edit product form componenet</h2>
                <form onSubmit={this.handleSubmit} >
            <div> <input   placeholder="Product title" type="text" name="title" onChange={this.handleChange}/></div>
           <div><input placeholder="Product price" type="number" name="price" onChange={this.handleChange}/></div>
            <div><input placeholder="Product category" type="text" name="category" onChange={this.handleChange}/></div>
            <div><input placeholder="Product details" type="text" name="imageUrl" onChange={this.handleChange}/></div>
            <div>  <button type="submit">Submit</button></div>
        </form>
            </div>
        );
    }
}

export default EditProductForm;