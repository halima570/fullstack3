import React ,{useState,useRef} from "react";
function Reff() {
    let [name, setName] = useState("Ned stark");
    // we declare the input inside the variable
    let nameRef = useRef();
    // we are referring to input to change the value
    const submitButton = () => {
      setName(nameRef.current.value);
    };
   
    return (
      <div className="Reff">
        <p>{name}</p>
        <h1>Who is your favorite Games of throne character</h1>
   
        <div>
          <input
            placehoder="enter your preferred GOT character..."
            ref={nameRef}
            type="text"
          />
          <button type="button" onClick={submitButton}>
            Submit
          </button>
        </div>
      </div>
    );
   }

   export default Reff;