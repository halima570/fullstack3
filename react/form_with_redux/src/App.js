import Header from "./header";
import Sidebar from "./sidebar";
import Form from "./form";
import { useState } from "react";
function App() {

  return (
    <div className="App">
     <Header/>
     <div className="flex">
     <Sidebar/>
     <Form />
</div>
    </div>
  );
}

export default App;
