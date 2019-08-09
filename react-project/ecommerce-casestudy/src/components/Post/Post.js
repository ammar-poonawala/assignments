import React from 'react';
import './Post.css';
const post = (props) => {
    console.log("in post function component")
    console.log(props)
    return (
        <div className="card">
            {/* <img src={props.imagePath} alt="Avatar" style="width:15%"></img> */}
            <img src={props.imagePath} alt="items" width="80%" height="50%" />
            <div className="container">

                <h4><b>{props.title}</b></h4>
                <p>${props.price}</p>
                <button > Add</button>
            </div>

        </div>
    );
}

export default post