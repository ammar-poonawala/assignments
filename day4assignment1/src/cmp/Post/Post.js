import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <p>Title:</p>
        <h1>{props.title}</h1>
        {/* <h2>fsdfdsf</h2> */}
        
    </article>
);

export default post;