import React, { Component } from 'react';
import './CreateContent.css'

class CreateContent extends Component{
    render(){
      console.log('Content render');
      return(
        <div className="Create">
          <form action="/create_process" method="post" onSubmit={function (e) {
            e.preventDefault();
            this.props.onSubmit(
              e.target.title.value,
              e.target.desc.value
            );
            alert('submit!!!!!!!');
          }.bind(this)}>
            <p><input className="input-title" type="text" name="title" placeholder="title" size="13"></input></p>
            <p>
              <textarea className="input-desc" name="desc" placeholder="description" rows="3" cols="15"></textarea>
            </p>
            <p>
              <input className="submit-btn" type="submit" value="구려."></input>
            </p>
          </form>
        </div>
      )
    }
  }
  
  export default CreateContent;