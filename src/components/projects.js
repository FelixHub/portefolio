import React from 'react';

import Post from './post.js';
var json = require('../post_projects.json');

export default class Projects extends React.Component  {

    constructor(props) {
        super(props);
        this.state={ posts : json };
    }

    render(){

        const post_projects = this.state.posts.map((post) => {
            return(
                 <Post type="projects" date={post.date} title={post.title} content={post.content}/>
            ) 
     })

        return(
            
            
        <div>
            <div className="projects">
                I am working & having fun in various computer science areas.
            </div>
            <div className="wall">
                {post_projects}
            </div>
        </div>
        )
    }

}