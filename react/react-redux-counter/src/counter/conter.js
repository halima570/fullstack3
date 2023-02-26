import React ,{useState}from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { handelmoin, handelplus } from './creater';
function Conter() {
const [conter,setConter]=useState(0)
const conterup=useSelector(state=>state.conter);
const dispatch=useDispatch();
const plus=()=>{
    //setConter(conter+1)
handelplus(dispatch)}
const moin=()=>{
//setConter(conter-1)
handelmoin(dispatch)}

    // const plus_value=(value)=>{
    //     //setConter(conter-1)
    //     dispatch(
    //         {
    //             type:INCREMENT_BY_VALUE,payload:value,
    //         })}
  return (
    <div>
<h1>{conterup}</h1>

<button onClick={moin}>-</button>
<button onClick={plus}>+</button>
{/* <button onClick={plus_value(40)}>+</button> */}
    </div>
  )
}

export default Conter