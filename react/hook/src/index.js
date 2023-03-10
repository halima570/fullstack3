import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Context from './useContext';
const user={name:'halima',email:'halimaelhagouchi@gmail.com'}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Context.Provider value={user}>
      <App />
    </Context.Provider>
    
  </React.StrictMode>
);

//or <Context.Consumer>
// { ({user})=><h3>{name}</h3> }
//</Context.Consumer>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
