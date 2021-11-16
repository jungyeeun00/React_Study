import React, { Component } from 'react';

class Control extends Component{
    render(){
      console.log('Subjects  render');

      return (
        <div>
          <input className="submit-btn" type="button" value="➕" onClick={function (e) {
            e.preventDefault();
            this.props.onChangeMode('create');
          }.bind(this)}/>
          <input className="submit-btn" type="button" value="📝" onClick={function (e) {
            e.preventDefault();
            this.props.onChangeMode('update');
          }.bind(this)}/>
        </div>
      );
    }
  }
 
  export default Control;