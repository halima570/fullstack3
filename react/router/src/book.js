import React from 'react'
import { useParams,Link } from 'react-router-dom'
function Books() {
 
  return (
    <div>


        <h1>Booklist</h1>
        <Link to='/books/1'>book 1</Link>
    </div>
  )
}

export default Books