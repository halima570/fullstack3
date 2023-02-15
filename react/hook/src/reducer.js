import './App.css';
import React,{useReducer} from 'react';
function Reducer() {
  const reducer=(state,action)=>{
switch(action.type) {
case 'increment':
return {count:state.count+1,showText:state.showText};
case 'toggleShowText':
return{count:state.count,showText:!state.showText};
default :
return state;}}

const [state,dispatch]=useReducer(reducer,{count:0,showText:true});
  return (
    <div>
<h1>{state.count}</h1>
<button
 onClick={()=>{
    dispatch({type:'increment'});
    dispatch({type:'toggleShowText'});
}


} className='p-[10px] m-[10px] bg-orange-700 items-center justify-center text-center' >click here</button>

{state.showText && <p>this is a text</p>}

    </div>
  );
}

export default Reducer;
