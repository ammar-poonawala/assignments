import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';
import  Post from '../cmp/Post/Post';
import {Link } from 'react-router-dom';

class About extends Component {

  state = {
    loadedPost: null
}

componentDidMount() { //not updating anything
  console.log(this.props)
  // if ( this.props.match.params.id ) {
  //     if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.match.params.id) ) {
  //         axios.get( '/posts/' + this.props.match.params.id )
  //             .then( response => {
  //                  console.log(response);
  //                // this.setState( { loadedPost: response.data } );
  //             } );
  //     }
  // }
  axios.get('https://jsonplaceholder.typicode.com/posts/'+this.props.match.params.id)
  .then(response =>{
    console.log(response);
    this.setState({loadedPost: response.data});
  });
}
  render() {
    
    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
    if ( this.props.match.params.id ) {
      post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
  }

  if ( this.state.loadedPost ) {
    post = (
        <div className="FullPost">
            <h1>{this.state.loadedPost.title}</h1>
            <p><i>{this.state.loadedPost.body}</i></p>

        </div>

    );
}
return post;
    // return (
    //     <div>
    //       <h2>About</h2>
          
    //     </div>
    // );
  }
}

export default About;
//pass state or props