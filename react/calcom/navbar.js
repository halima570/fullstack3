import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Navbar() {


  return (
    <div>

<div className='flex mt-6 justify-around'>
<div className='text-3xl font-bold cursor-pointer'>Cal.com</div>
<div className=' flex bg-white border-black border-2 p-2 rounded-full'>
<ul className='flex '>
<li className='p-[10px] text-2xl  hover:text-white bg-black rounded-full p-2 ' >PRICING</li>
<li className='p-[10px] text-2xl   rounded-full p-2'>PRODUCTS
<select className='h-7 w-5'><option value='products'></option>
<option value='individuals'>
<div className='flex '>
   <div><FontAwesomeIcon icon="fa-solid fa-person" /></div>
<div className=''> <h4>individuals</h4>
<p>
Everything you need, forever free. Unlimited bookings,
 unlimited calendars, 
unlimited integrations. Upgrade at any time.
</p>
</div>

</div>
</option>
<option value='Teams'>

<div className=''>
   <div><FontAwesomeIcon icon="fa-solid fa-people-group" /></div>
<div className=''> <h4>Teams</h4>
<p>
We work better in teams. Extend your workflows with
 round-robin and
 collective events and make advanced routing forms.
</p>
</div>

</div>

</option>
<option value='Ultimate'>

<div className=''>
   <div><FontAwesomeIcon icon="fa-sharp fa-regular fa-shield" className='text-sm text-black' /></div>
<div className=''> <h4>Ultimate</h4>
<p>
Looking for the best compliant scheduling tool?
 Ultimate is perfect for 
enterprise businesses that focus on control and security.
</p>
</div>

</div>
</option>
<option value='Platform'>

<div className=''>
   <div><FontAwesomeIcon icon="fa-solid fa-people-group" /></div>
<div className=''> <h4>Platform</h4>
<p>
If you want to build something on top of Cal.
com like a Telehealth 
platform or hiring marketplace to change any line of code.
</p>
</div>

</div>
</option>

</select>
</li>

{/*=================================================*/}
<li className='p-[10px] text-2xl'>APPS

<select className='h-7 w-5'><option value='products'></option>
<option value='Web3'>
<div className='flex '>
   <div><FontAwesomeIcon icon="fa-solid fa-person" /></div>
<div className=''> <h4>Web3</h4>
<p>
Meet people with the same tokens
</p>
</div>

</div>
</option>
<option value='Google Calender'>

<div className=''>
   <div><FontAwesomeIcon icon="fa-solid fa-people-group" /></div>
<div className=''> <h4>Google Calender</h4>
<p>
For personal and business calendars
</p>
</div>

</div>

</option>
<option value='Office 365/outlook.com Calendar'>

<div className=''>
   <div><FontAwesomeIcon icon="fa-sharp fa-regular fa-shield" className='text-sm text-black' /></div>
<div className=''> <h4>Ultimate</h4>
<p>
For personal and business calendars
</p>
</div>

</div>
</option>
<option value='CalDav'>

<div className=''>
   <div><FontAwesomeIcon icon="fa-solid fa-people-group" /></div>
<div className=''> <h4>CalDav</h4>
<p>
For personal and business calendars
</p>
</div>

</div>
</option>
<option value='Stripe'>

<div className=''>
   <div><FontAwesomeIcon icon="fa-solid fa-people-group" /></div>
<div className=''> <h4>Stripe</h4>
<p>
Accepte payment from booking
</p>
</div>

</div>
</option>
<option value='Zoom'>

<div className=''>
   <div><FontAwesomeIcon icon="fa-solid fa-people-group" /></div>
<div className=''> <h4>Zoom</h4>
<p>

</p>
</div>
Video Comfirence
</div>
</option>
<option value='webHook'>

<div className=''>
   <div><FontAwesomeIcon icon="fa-solid fa-people-group" /></div>
<div className=''> <h4>WebHook</h4>
<p>
Automation
</p>
</div>

</div>
</option>



</select>


</li>
{/*=================================================*/}
<li className='p-[10px] text-2xl'>DOCS

<select className='h-7 w-5'><option value='products'></option>
<option value='Developer Documentation'>
<div className='flex '>
   <div><FontAwesomeIcon icon="fa-solid fa-person" /></div>
<div className=''> <h4>Developer Documentation</h4>
<p>
Installation,API Referance ,and more
</p>
</div>

</div>
</option>
<option value='Support Documentation'>

<div className=''>
   <div><FontAwesomeIcon icon="fa-solid fa-people-group" /></div>
<div className=''> <h4>Support Documentation</h4>
<p>
Get started with Tips &tricks
</p>
</div>

</div>

</option>



</select>


</li>
<li className='p-[10px] text-2xl'>BLOG</li>
</ul>



</div>

{/*=================================================*/}


<div>
   <botton className='bg-black text-white p-6 rounded-full text-2xl mt-6' >LOGING</botton> 
    </div>

</div>
    </div>


  )
}

export default Navbar