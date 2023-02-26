import {useEffect,useState} from 'react'
import axios from 'axios';
function UserList() {
const [users,setUsers]=useState([]);

    useEffect(()=>{
         axios.get('https://jsonplaceholder.typicode.com/users')
          .then((response) => {
             console.log(response.data);
          setUsers(response.data);
            
          }).catch((err) => {
             console.log(err.message);
    });
   },[])



  return (
    <div className=''>

<div className='flex overflow-x-scroll snap-x snap-proximity'>
{users.map(user=>(
 <div className="h-screen w-screen snap-start" >
<div className='border-2 border-yellow-500 bg-yellow-100 m-3 p-6 w-[300px] h-[200px]'>
<h1 className='text-xl text-yellow-900 font-bold m-3'>name: {user.name}</h1>
<p className='text-gl text-gray-700 font-bold '>email:{user.email}</p>
<p  className='text-xl text-pink-700 font-bold m-3'>phone: {user.phone}</p>
</div>
</div>
)

)}
</div>


    </div>
  )
}

export default UserList;