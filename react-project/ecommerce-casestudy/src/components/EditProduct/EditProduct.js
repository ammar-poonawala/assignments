import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import Axios from 'axios';
import EditProductForm from './EditProductForm';
import Product from '../Products/Product';




class EditProduct extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        Axios.get('http://localhost:3000/api/products')
            .then(response => {
                console.log(response);
                const posts = response.data.map(post => {
                    return {
                        ...post
                    }
                });
                this.setState({ posts: posts })
                console.log(posts)
            })
            .catch(error => {
                console.log("error in products component")
            });
    }

    deleteProduct = (event) => {
        console.log("in deleteProduct before event")
        let id = event.target.value
        console.log(id)
        Axios.delete('http://localhost:3000/api/products/' + id)
            .then(response => {
                console.log(response);
                alert("deleted successfully")
                window.location.reload();

            });
    }


    render() {
        
    let editProduct = (event) => {
        //console.log(event)
        let id = event.target.value
        console.log(id)
        console.log("in edit product")
        //console.log(this.state.posts)
    }
        return (
            <div className="App">
                <h1>Edit Product Component</h1>

                <section>
                    {
                        <table>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Operation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.posts.map(post => {
                                        return (
                                            <tr key={post.id}>
                                                <td>{post.id}</td>
                                                <td>{post.title}</td>
                                                <td>${post.price}</td>
                                                <td><button value={post.id} onClick={(event) => this.deleteProduct(event)}>Delete</button></td>
                                                <td ><button ><Link  to={{pathname:'/editproductform/'+post.id}}>Edit</Link></button></td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    }


                 


                </section>
                
            </div>

        )
    }
}



export default EditProduct;