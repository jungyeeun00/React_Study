import React, { Component } from 'react';
import './TOC.css'

class TOC extends Component{
  shouldComponentUpdate(newProps, newState){
    if(newProps.data===this.props.data){
      return false;
    }
    return true;
  }
    render(){
      console.log('TOC render');
        var lists=[];
        var data = this.props.data;
        var i = 0;
        while(i < data.length){
            lists.push(
            <li className="TOC-listitems" key={data[i].id}>
              <input className="TOC-checkbox" type="checkbox"/>
              <a className="TOC-hyper" href={"/content/"+data[i].id}
              onClick={function (id, e) {
                e.preventDefault();
                this.props.onChangePage(id);
              }.bind(this, data[i].id)}
              >{data[i].title}</a>
              <button className="X-btn">❌</button>
            </li>);
            i++;
        }
      return(
        <div className="TOC">
          <ul className="TOC-list">
              {lists}
          </ul>
        </div>
      );
    }
  }
  
  export default TOC;