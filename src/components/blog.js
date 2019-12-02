import React from 'react';

import Post from './post.js';
var json = require('../post_blog.json');

export default class Blog extends React.Component  {

    constructor(props) {
        super(props);
        this.state={posts : json};
    }

    render(){

        const post_blog = this.state.posts.map((post) => {
            return(
                 <Post type="blog" date={post.date} title={post.title} content={post.content}/>
            ) 
        })

        return(
            <div>
                <div className="blog">
                    I am kind of a shy writer.
                </div>
                <div className="wall">
                    {post_blog}
                </div>
            </div>
        )
    }

}