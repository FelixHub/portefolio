import React from 'react';
import './App.css';

import Header from './components/header.js'
import Blog from './components/blog.js'
import Projects from './components/projects.js'
import Videos from './components/videos.js'
import About from './components/about.js'

export default  class App extends React.Component  {

  constructor(props) {
    super(props);
    this.state={view:"about"};
    this.changeView = this.changeView.bind(this)

  }
  
  changeView(newview){
    this.setState({view : newview})
  }

  render(){

    return (
      <div className="app">
        <Header view={this.state.view} changeView={this.changeView}/>
        <div className="view">
          {{
            'projects' : <Projects/>,
            'blog': <Blog/>,
            'videos' : <Videos/>,
            'about' : <About/> }[this.state.view]}
         </div> 
         <div className="footer">
           <span className="date">© 2019</span> <span className="social">Have a good day !</span>
         </div>
      </div>
    );
  }
 
}