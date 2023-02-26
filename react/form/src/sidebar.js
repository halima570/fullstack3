import React from 'react'

function Sidebar(props) {
  return (
    <div className='bg-gray-200 w-[25%] h-full '>
    <ul className=''>
    <li className='text-xl text-rose-400 font-bold p-2'>home</li>
    <li className='text-xl text-rose-400 font-bold p-2'>about</li>
    <li className='text-xl text-yellow-500 p-2'>{props.isChanged && props.name}</li>
    </ul>
    
    
    
    
        </div>
  )
}

export default Sidebar;