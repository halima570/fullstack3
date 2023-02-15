import { useState } from "react";
const MyFunctionComponent = () => {
    // setting the state hooks
    const [name, setName,version,setVersion] = useState([
   name="state",
    version="0.1.0",
   
 ]);
    return (
      <div>
        <p>hello my name is {name}</p>
        <p>{version}</p>
      </div>
    );
   };
   export default MyFunctionComponent;