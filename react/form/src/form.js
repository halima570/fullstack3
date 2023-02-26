import React from 'react'

function Form(props) {
  return (
    <div className='bg-rose-100 w-[70%] flex-1'>
   <form onSubmit={props.isChange} className=' block flex-1'>


<input type='text' onChange={(e)=>{props.setName(e.target.value)}} placeholder='write you name' className='block w-[90%] p-1 m-4 border-2 border-rose-900'></input>


<input type='email' onChange={(e)=>{props.setEmail(e.target.value)}} placeholder='write your email' className='block w-[90%] p-1 m-4 border-2 border-rose-900'></input>

<input type='submit' value='submit' className='bg-rose-900 ml-[50%] text-white p-2 rounded-full'></input>

   </form></div>
  )
}

export default Form;