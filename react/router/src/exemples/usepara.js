import { useEffect } from 'react';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';


const Home = () => {
 const navigate = useNavigate();
 return (
   <div>
     <h1>
       Home page
     </h1>
     <button onClick={() => navigate('/profile/John')}>Navigate to Profile </button>
   </div>
 )
}
const Profile = () => {
 const params = useParams();
 useEffect(() => {
   console.log("🚀 ~ file: App.js ~ line 23 ~ Profile ~ params", params)

 })
 return (
   <div>
     <h1>Profile Page</h1>
     <p>
       this page is for {params.name}
     </p>
   </div>
 )
}
function Usepa() {
 return (
   <div className="App">
     <Routes>
       <Route path='/' element={<Home />}></Route>
       {/* Here the parameter is the url is called `name`
       so the param that will be injected in useParams hook will be `name`  */}
       <Route index path='/profile/:name' element={<Profile />}></Route>
     </Routes>
   </div>
 );
}

export default Usepa;