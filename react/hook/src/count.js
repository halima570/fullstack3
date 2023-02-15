import './App.css';
import React,{useState} from 'react';
function Count() {


  let [count,setCount]=useState(0);

function adding(){

  setCount(count++);
}



  return (
    <div>
     
you clicked {count} times
<button onClick={adding} className='p-[10px] m-[10px] bg-orange-400 items-center justify-center text-center' >add</button>



    </div>
  );
}

export default Count;
