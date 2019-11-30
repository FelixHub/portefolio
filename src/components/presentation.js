import React from 'react';

export default class Presentation extends React.Component  {

    constructor(props) {
        super(props);
        this.state={};
    }

    render(){

        console.log(this.props)
        return(
            <div>
                {this.props.contenu}
                <input onChange={this.props.countChange}></input>
            </div>
        )
    }

}


