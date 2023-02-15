import React,{useState} from 'react';
import Count from './count.js'
import Input from './input.js'
import Reducer from './reducer';
import Effect from './axios';
import Ref from './ref';
import Reff from './useref.js';

class App extends React.Component() {
state={
myarr:[
  {id:1,name:'halima'}
]



}
constructor(){

  super()
}
componentDidMont=()=>{
console.log('helo component')
}

handleAdd=(event)=>{
var myVar=this.state.myarr;
myVar.push(
  {id:2,name:'hassan'},
  {id:3,name:'kamal'}
)
this.setState({myarr:myVar})

}
handleDelete=()=>{
  var myVar=this.state.myarr;
  myVar.pop()
  this.setState({myarr:myVar})
}
  render(){
  return (
    <div className="App">
     
{/* <Count />
<Input />
<Reducer/>
<Effect/>
<Ref/>
<Usecontext/>*/}


<button onClick={this.handleAdd}>add</button>
<button onClick={this.handleDelete}>delete</button>





    </div>
  );}
}

export default App;
