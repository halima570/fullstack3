
import './App.css';
import React ,{useState} from 'react';
import PropTypes from "prop-types";
import component from './profile/ProfileComponent/component';
import Component from './profile/ProfileComponent/component';
import img1 from './bg1.png'

function App() {    
function handleName(name){

alert('alert for :'+name);
}
  return (

    <div className="App">
 <Component   fullName='halima elhagouchi' bio='live the life you will remember' profession='softwear ingenieur' handleName={handleName}  >
    <img src={img1} className='w-[300px]'></img>

</Component>



    </div>
  );
}
//WHEN WE USE STATE AND PROPS
export default App;
