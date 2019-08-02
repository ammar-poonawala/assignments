import React, { Component } from 'react';
import axios from '../axios';
import './Posts.css';
import  Post from '../cmp/Post/Post';
import {Link } from 'react-router-dom';

class Home extends Component {

  state = {
    posts:[]
  }

  componentDidMount(){
    axios.get('/posts')
    .then(response =>{
      const posts = response.data.slice(0,4);
      const updatedPosts = posts.map(post=>{
        return {...post}
      });
      this.setState({posts: updatedPosts});
     // console.log(posts);
    })
    .catch(error=>{
      console.log(error);
    });

    

  }

  postSelectedHandler = (id) => {
    this.setState({selectedPostId: id});
    
}

  render() {
    //let details = (
     // return <
   // )
    let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
    if(!this.state.error){
      posts = this.state.posts.map(post => {
        //console.log(post  );
        return (<Link to ={'/'+post.id} key ={post.id}><Post 
        clicked ={() => this.postSelectedHandler(post.id)}
        
         title ={post.title}/></Link>);
       });
      
    }
    return (
        // <div>
        //   <h2>Home</h2>
        // </div>
        <section className="Posts">
                {posts}
                
                {/* {details} */}
                
            </section>
    );
  }
}

export default Home;