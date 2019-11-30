import React from 'react';
import './App.css';

import Presentation from './components/presentation.js'

export default  class App extends React.Component  {

  constructor(props) {
    super(props);
    this.state={count:0};
    this.countChange = this.countChange.bind(this)
  }
  
  countChange() {
    this.setState({count : this.state.count + 1})
  }

  render(){
    return (
      <div>
        <Presentation contenu ="1"  countChange={this.countChange} />
        <Presentation contenu ="2"  countChange={this.countChange}/>
        <Presentation contenu ="3"  countChange={this.countChange}/>
        <div> {this.state.count} </div>
      </div>
    );
  }
 
}

