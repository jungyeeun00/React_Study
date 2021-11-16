import React, { Component } from 'react';
import './Subject.css'

class Subject extends Component{
    render(){
      console.log('Subjects  render');

      return (
        <header>
          <h1 className="Subject"><a className="Subject-title" href="/" onClick={function (e) {
            e.preventDefault();
            this.props.onChangePage();
          }.bind(this)}>{this.props.title}</a></h1>
        </header>
      );
    }
  }
 
  export default Subject;