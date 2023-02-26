import Header from "./header";
import Sidebar from "./sidebar";
import Form from "./form";
import { useState } from "react";
function App() {
const [name,setName]=useState('');
const [email,setEmail]=useState('')
const [isChanged,setIchanged]=useState(false)
function isChange(e){
e.preventDefault();
setIchanged(true)

}

  return (
    <div className="App">
     <Header name={name} isChanged={isChanged}/>
     <div className="flex">
     <Sidebar name={name} isChanged={isChanged} />
     <Form isChange={isChange} setName={setName} setEmail={setEmail}/>
</div>
    </div>
  );
}

export default App;
