import React, { Component } from 'react';
import './ReadContent.css';

class ReadContent extends Component{
    render(){
      console.log('Content render');
      return(
        <div className="Read-bg">
          <h2>{this.props.title}</h2>
          {this.props.desc}
        </div>
      )
    }
  }
  
  export default ReadContent;