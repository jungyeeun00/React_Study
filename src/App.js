import { Component } from 'react';
import TOC from "./components/TOC"
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import Subject from './components/Subject';
import './App.css';
import Control from './components/Control';


class App extends Component{
  constructor(props){
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode:'welcome',
      selected_content_id:2,
      welcome:{title:'Welcome', desc:'check your list!'},
      subject:{title:'To-Do list', sub:'check your list!'},
      contents:[
        {id:1, title:'잠자기', desc:'끝내주게 자기'},
        {id:2, title:'먹기', desc:'끝내주게 먹기'},
        {id:3, title:'숨쉬기', desc:'끝내주게 숨쉬기'}
      ]
    }
  }
  getReadContent(){
    var i = 0;
    while(i<this.state.contents.length){
      var data = this.state.contents[i];
      if(data.id===this.state.selected_content_id){
        return data;
      }
      i++;
    }

  }
  getContent(){
    var _title, _desc, _article = null;
    if(this.state.mode==='welcome'){
      _title=this.state.welcome.title;
      _desc=this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }else if(this.state.mode==='read'){
      var _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
    }else if(this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function (_title, _desc) {
        this.max_content_id = this.max_content_id+1;
        var _contents = Array.from(this.state.contents)
        _contents.push(
          {id:this.max_content_id, title:_title, desc:_desc}
        );
        this.setState({
          contents:_contents,
          mode:'read',
          selected_content_id:this.max_content_id
        })
      }.bind(this)}></CreateContent>
    }else if(this.state.mode === 'update'){
      _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={function (_id, _title, _desc) {
        var _contents = Array.from(this.state.contents);
        var i=0;
        while(i<_contents.length){
          if(_contents[i].id===_id){
            _contents[i] = {id:_id, title:_title, desc:_desc};
            break;
          }
          i++;
        }
        this.setState({
          contents:_contents,
          mode:'read'
        })
      }.bind(this)}></UpdateContent>
    }

    return _article;
  }
  getBtnContent(){
    var _title, _desc, _article = null;
    if(this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function (_title, _desc) {
        this.max_content_id = this.max_content_id+1;
        var _contents = Array.from(this.state.contents)
        _contents.push(
          {id:this.max_content_id, title:_title, desc:_desc}
        );
        this.setState({
          contents:_contents,
          mode:'read',
          selected_content_id:this.max_content_id
        })
      }.bind(this)}></CreateContent>
    }else if(this.state.mode === 'update'){
      var _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={function (_id, _title, _desc) {
        var _contents = Array.from(this.state.contents);
        var i=0;
        while(i<_contents.length){
          if(_contents[i].id===_id){
            _contents[i] = {id:_id, title:_title, desc:_desc};
            break;
          }
          i++;
        }
        this.setState({
          contents:_contents,
          mode:'read'
        })
      }.bind(this)}></UpdateContent>
    }

    return _article;
  }
  render(){
    console.log('App render');
    console.log('render', this);
    return (
      <div className="App">
        <Subject title={this.state.subject.title} 
        sub={this.state.subject.sub}
        onChangePage={function () {
          this.setState({mode:'welcome'})
        }.bind(this)}
        ></Subject>
        <Control onChangeMode={function (_mode) {
          // if(_mode==='delete'){
          //   if(window.confirm('really?')){
          //     var _contents = Array.from(this.state.contents);
          //     var i = 0;
          //     while(i<this.state.contents.length){
          //       if(_contents[i].id === this.state.selected_content_id){
          //         _contents.splice(i, 1);
          //         break;
          //       }
          //       i++;
          //     }
          //     this.setState({
          //       mode:'welcome',
          //       contents:_contents
          //     });
          //     alert("deleted!");
          //   }
          // }else{
            this.setState({
              mode:_mode
            });
          // }
        }.bind(this)}></Control>
        <CreateContent onSubmit={function (_title, _desc) {
          this.max_content_id = this.max_content_id+1;
          var _contents = Array.from(this.state.contents)
          _contents.push(
            {id:this.max_content_id, title:_title, desc:_desc}
          );
          this.setState({
            contents:_contents,
            mode:'read',
            selected_content_id:this.max_content_id
          })
        }.bind(this)}></CreateContent>
        <TOC onChangeMode={function (_mode) {
          if(_mode==='delete'){
            if(window.confirm('really?')){
              var _contents = Array.from(this.state.contents);
              var i = 0;
              while(i<this.state.contents.length){
                if(_contents[i].id === this.state.selected_content_id){
                  _contents.splice(i, 1);
                  break;
                }
                i++;
              }
              this.setState({
                mode:'welcome',
                contents:_contents
              });
              alert("deleted!");
            }
          }else{
            this.setState({
              mode:_mode
            });
          }
        }.bind(this)}
        onChangePage={function (id) {
          this.setState({
            mode:'read',
            selected_content_id:Number(id)
          })
        }.bind(this)}
         data={this.state.contents}></TOC>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
