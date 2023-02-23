import React from 'react'
import Todolist from './Todolist';

import Addtodoform from './addtodoform';
import "bootstrap/dist/css/bootstrap.min.css";
import TotalCompleteItems from './totalcomleteditems';
function Appp() {
  return (
    <div className='container bg-white p-4 mt-5'>
<h1 className='text-5xl text-purple-900'>my todo list</h1>
<Addtodoform/>
<Todolist/>
<TotalCompleteItems/>


    </div>
  )
}

export default Appp;