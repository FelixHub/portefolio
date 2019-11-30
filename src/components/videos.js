import React from 'react';
import { Spring  } from 'react-spring/renderprops';

export default class Videos extends React.Component  {

    constructor(props) {
        super(props);
        this.state={};
    }

    render(){
        return(
            <Spring config={{duration:2000}} from={{ opacity: 0, marginLeft : -1000 }} to={{ opacity: 1,marginLeft : 0 }}  >
                {props => 
               ( <div style={props}>
                   <h1>ezrtyhujyhtg  </h1>
                </div>)
                }
            </Spring>
        )
    }

}