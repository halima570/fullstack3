
import { use } from 'react';

function App() {
  async function getData(){
return     await fetch("https://jsonplaceholder.typicode.com/todos/").then((response) => response.json())

}
console.log(getData())


  return (
    <div className="App">
      {/* <pre>{JSON.stringify(getData,null,2)}</pre> */}
    </div>
  );
}

export default App;
