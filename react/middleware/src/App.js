import { createStore, applyMiddleware  } from "redux";

function App() {
 
 
     
     const logger = store => next => action => {
 console.log('dispatching', action)
 let result = next(action)
 console.log('next state', store.getState())
 return result
}
 const store = createStore(reducer, applyMiddleware(logger));
 return (
    <div className="App">



    </div>
  );
}

export default App;
