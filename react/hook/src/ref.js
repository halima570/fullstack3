import React ,{useRef} from "react";


function Ref() {

const inputRef=useRef(null);

const onClick=()=>{
inputRef.current.focus();

}
  return (
    <div>

<h1>pedro</h1>
<input type={'text'} placeholder='ex....' ref={inputRef}></input>
<button onClick={onClick}>change name</button>



    </div>

  )
}

export default Ref;






