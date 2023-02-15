import './App.css';
import React,{useState} from 'react';
function Input() {
let [inputing,setInputing]=useState('pedro');
let onchange=(event)=>{
let newvalue=event.target.value;
setInputing(newvalue);
}



  return (
    <div>
<input type={'text'} placeholder={'entrez your name'} onChange={onchange}></input>
{inputing}
    </div>
  );
}

export default Input;
