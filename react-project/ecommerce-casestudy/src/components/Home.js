import React, { Component } from 'react';
import '../App.css';
import './Home.css';
import Product from './Products/Product';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Axios from 'axios';
import Post from './Post/Post';
import vegetableDisplay from './VegetableDisplay/VegetableDisplay';
import * as actionTypes from '../actions/actions';
import { connect } from 'react-redux';

//display all products

class Home extends Component {

    componentDidMount() {
        console.log("in did mount")
        this.props.fetchProducts();
        //  this.loadAllProduct();
    }
    filterProduct = (category) => {
        this.props.Display(category);  //call display action
    }






    render() {


        

        return (

            <BrowserRouter>
                <div className="App">
                    <h1>redux thunk insertion home compoenet</h1>

                    <div className="vertical-menu">
                        <ul>

                            <li><button onClick={() => this.filterProduct('all')}>All</button></li>
                            <li ><button onClick={() => this.filterProduct('vegetables')}>Vegetable</button></li>
                            <li><button onClick={() => this.filterProduct('fruits')}>Fruits</button></li>
                            {/* <li><Link to={'/products2'}>Product 3</Link></li> */}
                        </ul>
                    </div>
                    {
                        this.props.postsFilter.map(post => {
                            return (
                                <Post key={post.id}
                                    imagePath={post.imageUrl}
                                    title={post.title}
                                    price={post.price} />
                                //clicked={()=>}
                            );
                        })
                    }


                </div>
            </BrowserRouter>

        );



    };
};


const mapStateToProps = (state) => { //state is global obj
    console.log("in mapstatetoprops")
    console.log(state) //posts array
    console.log("after mapstatetoprops")
    return ({
        //posts: state.posts,
        postsFilter: state.postsFilter

    })
}
const mapDispatchToProps = (dispatch) => {
    // return {
    //     onGetAll: ()=>dispatch(actionCreators.fetch_All_Data()) //start here
    // }

    return {
        fetchProducts: () => dispatch(actionTypes.fetchProducts()),//action
        Display: (category) => dispatch(actionTypes.Display(category))

        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);