import React from 'react'

function Header(props) {
  return (
    <div className='bg-pink-300 p-4'>
<ul className='flex justify-around'>
<li className='text-xl text-rose-900 font-bold'>home</li>
<li className='text-xl text-rose-900 font-bold'>about</li>
<li className='text-xl text-rose-900 font-bold'>hello <span className='text-xl text-yellow-500'>{props.isChanged && props.name}</span></li>
</ul>




    </div>
  )
}

export default Header;