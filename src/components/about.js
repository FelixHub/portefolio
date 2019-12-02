import React from 'react';

import Post from './post.js';
var json = require('../post_about.json');

export default class About extends React.Component  {

    constructor(props) {
        super(props);
        this.state={ posts : json };
    }

    render(){

        const post_about = this.state.posts.map((post) => {
               return(
                    <Post type="about" date={post.date} title={post.title} content={post.content}/>
               ) 
        })

        return(
            <div>
                <div className="about" >
                    Hi, nice to see you here ! I am Félix, an engineering student from France.
                </div>
                <div className="wall">
                    {post_about}
                </div>
            </div>
            
        )
    }

}