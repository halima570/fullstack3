import { useState } from "react";
import { useDispatch} from "react-redux";
import { addName } from "./conterSlice";


function Form() {
    const [name,setName]=useState('');
const [email,setEmail]=useState('')
const dispatch=useDispatch();
function isChange(e){
e.preventDefault();
dispatch(addName({name,email}))

}
  return (
    <div className='bg-rose-100 w-[70%] flex-1'>
   <form onSubmit={isChange} className=' block flex-1'>


<input type='text' onChange={(e)=>setName(e.target.value)} placeholder='write you name' className='block w-[90%] p-1 m-4 border-2 border-rose-900'></input>


<input type='email' onChange={(e)=>setEmail(e.target.value)} placeholder='write your email' className='block w-[90%] p-1 m-4 border-2 border-rose-900'></input>

<input type='submit' value='submit' className='bg-rose-900 ml-[50%] text-white p-2 rounded-full'></input>

   </form></div>
  )
}

export default Form;