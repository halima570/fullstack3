import { useEffect } from 'react';
import { Route, Routes, useMatch, useNavigate } from 'react-router-dom';


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
 const match = useMatch('/profile/:name');
 useEffect(() => {
   console.log("🚀 ~ file: App.js ~ line 23 ~ Profile ~ params", match)

 })
 return (
   <div>
     <h1>Profile Page</h1>
     <p>
       this page is for {match.params.name}
     </p>
   </div>
 )
}
function Match() {
 return (
   <div className="App">
     <Routes>
       <Route path='/' element={<Home />}></Route>
       <Route index path='/profile/:name' element={<Profile />}></Route>
     </Routes>
   </div>
 );
}

export default Match;