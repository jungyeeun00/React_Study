import React, { Component } from 'react';
import './Subject.css'

class Subject extends Component{
    render(){
      console.log('Subjects  render');

      return (
        <header className="Subject">
          <h1><a href="/" onClick={function (e) {
            e.preventDefault();
            this.props.onChangePage();
          }.bind(this)}>{this.props.title}</a></h1>
          {this.props.sub}
        </header>
      );
    }
  }
 
  export default Subject;