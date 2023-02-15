import React from 'react'
import Button from './button';
function Header() {
  return (
    <div className=' bg-zinc-100'>
  <div className='flex bg-zinc-100 mt-6 justify-around'>

<div className='text-7xl font-bold cursor-pointer'><a>Cal.com</a></div>
<botton   className='w-[40px] h-[40px]'>
<svg  onClick={<Button/>} className='w-[30px] h-[39px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 18H21" stroke="#131212" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 12H21" stroke="#131212" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 6H21" stroke="#131212" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>

</botton>
  </div>


<div>


<div className='  mt-[140px] ml-[30px]'>
<button className='text-black text-4xl bg-gray-200 p-5 rounded-full'>
  <span className='text-white text-3xl rounded-full bg-black pb-2 pt-2  pr-6 pl-6 mr-[20px]'> NEW</span >    Cal.com launches v2.5</button>

</div>
<div>
<h1 className='text-[130px] font-bold font-Cal_Sans m-8 shadow-md leading-none'>
Scheduling

infrastructure
 for   <span className=''>everyone</span>
</h1>
</div>

<div className='m-10'>
<p className='text-6xl leading-normal'>
Meet
<span className='text-6xl font-bold'> Cal.com</span>
, the event-juggling scheduler for everyone. Focus on meeting, not making meetings. Free for individuals.

</p>



</div>


<div className='m-6 flex  border-black border-4 pt-12 pb-12 pr-[120px] pl-[120px] rounded-full'>
<div className=''><span className='text-5xl font-bold pt-12 pb-12 pr-[120px] pl-[120px] ml-0 bg-gray-300 rounded-full'>Cal.com/</span></div>
<div><input type={'email'} placeholder='ReckAstly' className='text-6xl font-bold pt-12 pb-12 p-r-[100px]'></input></div>


</div>













</div>





</div>
  )
}

export default Header;