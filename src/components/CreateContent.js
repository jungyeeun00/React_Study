import React, { Component } from 'react';
import './CreateContent.css'

class CreateContent extends Component{
    render(){
      console.log('Content render');
      return(
        <div className="Create">
          <h3 className="update-header">create</h3>
          <form action="/create_process" method="post" onSubmit={function (e) {
            e.preventDefault();
            this.props.onSubmit(
              e.target.title.value,
              e.target.desc.value
            );
            alert('submit!!!!!!!');
          }.bind(this)}>
            <input className="input-title" type="text" name="title" placeholder="title" size="13"></input>
              <textarea className="input-desc" name="desc" placeholder="description" rows="3" cols="19"></textarea>
              <p className="submit-btn-margin"><input className="submit-btn" type="submit" value=" ✔ "></input></p>
          </form>
        </div>
      )
    }
  }
  
  export default CreateContent;