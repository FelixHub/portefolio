import React from 'react';


export default class Header extends React.Component  {

    constructor(props) {
        super(props);
        this.state={};
    }

    render(){
        return(
            <div className="header">
                <div className="profil">
                    <div className="title">
                        <span style={{color :"#2176FF"}}>F</span>
                        <span>É</span>
                        <span>L</span>
                        <span>I</span>
                        <span>X</span>
                        <span> </span>
                        <span style={{color :"#FF5E5B"}} >H</span>
                        <span>U</span>
                        <span>B</span>
                        <span>E</span>
                        <span>R</span>
                        <span>T</span>
                    </div>
                </div>
                <div className='buttoncontainer'>
                    <button className={ this.props.view == 'about' ? 'selected' : 'notselected'} onClick={() => this.props.changeView('about')} > 👨 </button>
                    <button className={ this.props.view == 'projects' ? 'selected' : 'notselected'} onClick={() => this.props.changeView('projects')} > 💾 </button>
                    <button className={ this.props.view == 'blog' ? 'selected' : 'notselected'} onClick={() =>this.props.changeView('blog')} > 📃 </button>
                    <button className={ this.props.view == 'videos' ? 'selected' : 'notselected'} onClick={() =>this.props.changeView('videos')} > 🎥 </button>
                    
                </div>
            </div>
        )
    }

}


