
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './home'
import Books from './book';
import Book from './book1';
// Define the two views of our application


// Define our app component that includes the router and links to the views
function App() {
  return (
   
      <div>
        <nav>
          <ul className='flex '>
            <li className='m-5'>
              <Link to="/">Home</Link>
            </li>
            <li >
              <Link to="/books">book</Link>
            </li>
          </ul>
        </nav>

    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />}/>
          <Route path="/books:id" element={<Book />}/>
    </Routes>
        
      </div>
 

  );
}

export default App;