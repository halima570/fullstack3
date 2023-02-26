import { useDispatch,useSelector } from "react-redux";
import { addName } from "./conterSlice";

function Sidebar() {
const {name}=useSelector((state)=>state.counter)


  return (
    <div className='bg-gray-200 w-[25%] h-full '>
    <ul className=''>
    <li className='text-xl text-rose-400 font-bold p-2'>home</li>
    <li className='text-xl text-rose-400 font-bold p-2'>about</li>
    <li className='text-xl text-yellow-500 p-2'>{name}</li>
    </ul>
    
    
    
    
        </div>
  )
}

export default Sidebar;