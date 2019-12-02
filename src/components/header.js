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
                    <div className="title">FÉLIX HUBERT</div>
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


