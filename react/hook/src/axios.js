import axios from "axios";
import React,{useEffect,useState} from "react";

function Effect(){
    const [data,setData]=useState('');
    let [count,setCount]=useState(0);
useEffect(()=>{
//called when the page render

axios.get('https://jsonplaceholder.typicode.com/comments').then((response)=>{
    console.log(response.data);
setData(response.data[count].email)



},[]);


});
return (

<div>
<h1>hello {data}</h1>
<h1>{count}</h1>
<button
 onClick={()=>{
    setCount(count+1)
}}>click</button>
</div>

);


}

export default Effect;