import React from 'react';
import { Spring  } from 'react-spring/renderprops';

export default class Videos extends React.Component  {

    constructor(props) {
        super(props);
        this.state={};
    }

    render(){
        return(
            <Spring  from={{ marginLeft : -2000 ,transform: "rotate(20deg)" }} to={{ marginLeft : 0,transform: "rotate(0deg)"}}  >
                {props => 
               ( <div className="videos" style={props}>
                   videos
                </div>)
                }
            </Spring>
        )
    }

}