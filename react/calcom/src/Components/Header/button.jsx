import React from 'react'

function Button() {
  return (
    <div>
    <div className='flex justify-around'>
<div className='text-7xl font-bold cursor-pointer'><a>Cal.com</a></div>


<div className=''>
<button>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 18H21" stroke="#131212" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" style="translate: none; rotate: none; scale: none; transform-origin: 0px 0px;" data-svg-origin="12 18" transform="matrix(0.70711,-0.70711,0.70711,0.70711,-9.2133,7.75734)"></path><path d="M3 12H21" stroke="#131212" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" style="translate: none; rotate: none; scale: none; transform-origin: 0px 0px;" data-svg-origin="12 12" transform="matrix(0.1,0,0,0.1,10.8,10.8)"></path><path d="M3 6H21" stroke="#131212" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" style="translate: none; rotate: none; scale: none; transform-origin: 0px 0px;" data-svg-origin="12 6" transform="matrix(0.70711,0.70711,-0.70711,0.70711,7.75734,-0.72798)"></path></svg>
</button>
</div>
</div>
      <div>

<ul className=''>
<li className=''>Parcing</li>
<li className='borger-1 border-dashed text-2xl'>Platform</li>
<li className='borger-1 border-dashed'>Ultimate</li>
<li className='borger-1 border-dashed'>Docs</li>
<li className='borger-1 border-dashed'>Developer Documentation</li>
<li className='borger-1 border-dashed'>Blog</li>
<li className='borger-1 border-dashed'>Merch</li>
</ul>
  </div>

<div>

<p className='text-gray-500'> Existing customer?  <span className='font-bold text-black'>Login</span></p>
<button className='bg-black rounded-lg p-10 mt-2'>GET STARTED </button>
</div>




     
    
    
    
    </div>
  )
}

export default Button;