import React, { Component } from 'react';
import './UpdateContent.css';

class UpdateContent extends Component{
  constructor(props){
    super(props);
    this.state = {
      id:this.props.data.id,
      title:this.props.data.title,
      desc:this.props.data.desc
    }
    this.inputFormHandler = this.inputFormHandler.bind(this)
  }
  inputFormHandler(e){
    this.setState({[e.target.name]:e.target.value});
  }
    render(){
      console.log(this.props.data);
      console.log('UpdateContent render');
      return(
        <div className="update">
          <form action="/create_process" method="post" onSubmit={function (e) {
            e.preventDefault();
            this.props.onSubmit(
              this.state.id,
              this.state.title,
              this.state.desc
            );
            alert('submit!!!!!!!');
          }.bind(this)}>
            <input type="hidden" name="id" value={this.state.id}/>
            <input className="input-title"
                  type="text"
                  name="title"
                  placeholder="title"
                  size="13"
                  value={this.state.title}
                  onChange={this.inputFormHandler}>
                </input>
              <textarea className="input-desc" name="desc" placeholder="description" rows="3" cols="19"
               value={this.state.desc} onChange={this.inputFormHandler}>
              </textarea>
              <p className="submit-btn-margin"><input className="submit-btn" type="submit" value=" ✔ "></input></p>
          </form>
        </div>
      )
    }
  }
  
  export default UpdateContent;