import React from 'react';
import './App.css';

import SideBar from './components/sideBar.js'
import Acceuil from './components/acceuil.js'
import Projects from './components/projects.js'
import Videos from './components/videos.js'

export default  class App extends React.Component  {

  constructor(props) {
    super(props);
    this.state={view:"acceuil"};
    this.changeView = this.changeView.bind(this)

  }
  
  changeView(newview){
    switch(newview){
      case 'acceuil':
        this.setState({view : newview});
        break;
      case 'projects':
          this.setState({view : newview});
          break;
      case 'videos' :
          this.setState({view : newview});
          break;
      default :
          console.log("typoo...")
    }
  }

  render(){

    return (
      <div>
        <SideBar changeView={this.changeView}/>
        <div className="view">
          {{'acceuil': <Acceuil/>,
            'projects' : <Projects/>,
            'videos' : <Videos/> }[this.state.view]}
         </div> 
      </div>
    );
  }
 
}


/**
 * <div className="app">
        <div className="fibo_right_start">
          <div className="fibo_down">
                <div className="fibo_left">
                    <div className="fibo_up">
                      <div className="fibo_right">
                      </div>
                      
                    </div> 
                </div>
            </div>    
            </div> 
        </div>
 */