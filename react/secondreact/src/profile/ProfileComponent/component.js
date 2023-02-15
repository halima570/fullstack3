import React from 'react'
import PropTypes from "prop-types";
function Component({fullName,bio,profession,children,handleName}) {
  return (
    <div className='flex flex-col bg-pink-100 items-center border-2	border-rose-900 ml-[200px] mr-[200px] p-[20px]'>
        <label className=' text-pink-500 p-30 text-5xl m-5'>full name: </label><span className='font-bold text-2xl'>{fullName}</span><br/>
        <label className=' text-pink-500 p-30 text-5xl m-5'>bio:</label><span className='font-bold text-2xl'>{bio}</span><br/>
        <label className=' text-pink-500 p-30 text-5xl m-5'>profession :</label><span className='font-bold text-2xl'>{profession}</span><br/>
        <button onClick={()=>handleName(fullName)} className='border-2 text-white 	border-rose-900 m-[5px] p-[10px] bg-rose-900'>ClickMe</button>
        {children}

    </div>
  )
}



Component.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
   handleName: PropTypes.func,
   };
export default Component;