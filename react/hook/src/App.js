import React,{useState} from 'react';
import Count from './count.js'
import Input from './input.js'
import Reducer from './reducer';
import Effect from './axios';
import Ref from './ref';
import Reff from './useref.js';
import Test from './Custom';
import Context from './useContext.js';
function App({ date }) {

const [currentDate, setCurrentDate] = useState(new Date());
    const [count, setCount] = useState(0);


  function updateCount(byValue) {
    
    setCount(count + byValue);
    setCurrentDate(new Date());
  }
 
  function formatDate() {
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();
 
    return `${hour}:${minute}:${second}`;
  }
 
  const prettyDate = formatDate();
 const {name,email}=React.useContext(Context);
  return (
    <div className="App">
      <h2>
        You clicked {count} times, last time at {prettyDate}!
      </h2>
 
      <button onClick={() => updateCount(-1)}>Decrement</button>
      <button onClick={() => updateCount(1)}>Increment</button>
      <Test/>


<h3>{name}</h3><span>{email}</span>

    </div>
  );
 }


export default App;
