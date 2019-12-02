import React from 'react';

import Post from './post.js';
var json = require('../post_videos.json');

export default class Videos extends React.Component  {

    constructor(props) {
        super(props);
        this.state={ posts : json };
    }

    render(){

        const post_videos = this.state.posts.map((post) => {
            return(
                 <Post type="videos" date={post.date} title={post.title} content={post.content}/>
            ) 
     })
        return(
            
        
        <div>
            <div className="videos" >
                There's nothing like a video shoot with friends.
            </div>
            <div className="wall">
                {post_videos}
            </div>
        </div>
            
        )
    }

}