import React from 'react';
import { Spring  } from 'react-spring/renderprops';

export default class About extends React.Component  {

    constructor(props) {
        super(props);
        this.state={};
    }

    render(){
        return(
            <div>
                <div className="about" >
                    Hi, nice to meet you ! I am Félix, an engineering student from France. <br/><br/>
                    This is my personal website, with random projects sorted in 3 categories : <br/>
                    - Computer & Science stuff <br/>
                    - Opinion pieces & stories <br/>
                    - Art & Videos projects <br/><br/><br/>

                    Have fun !
                </div>

            </div>
            
        )
    }

}