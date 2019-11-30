import React from 'react';
import logo from '../img/logo.png'

export default class SideBar extends React.Component  {

    constructor(props) {
        super(props);
        this.state={};
    }

    render(){
        return(
            <div className="sidebar">
                <div>
                    <img className="logo" src={logo}/>
                </div>
                <div className='buttoncontainer'>
                    <button onClick={() => this.props.changeView('acceuil')} > A </button>
                    <button  onClick={() =>this.props.changeView('projects')} > B </button>
                    <button onClick={() =>this.props.changeView('videos')} > C </button>
                  
                </div>
            </div>
        )
    }

}


