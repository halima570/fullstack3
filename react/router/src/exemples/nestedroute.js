import { Link, Route, Routes } from 'react-router-dom';

// Component Home
const Home = () => (
 <>
   <h1>
     Home
   </h1>
 </>
)
// Component Profile
const Profile = () => (
 <>
   <h1>
     profile
   </h1>
 </>
)
// Component Account
const Account = () => (
 <>
   <h1>
     Account
   </h1>
 </>
)
// Component User
const User = () => {
 return (
   <div>
     <h1>User</h1>

     <nav>
       <Link to="profile">Profile</Link>
       <Link to="account">Account</Link>
     </nav>
     <Routes>
       <Route path="profile" element={<Profile />} />
       <Route path="account" element={<Account />} />
     </Routes>
   </div>
 );
};
const Nestede = () => {
 return (
   <div className="App">
     <>
       <h1>React Router</h1>

       <nav>
         <Link to="/home">Home</Link>
         <Link to="/user">User</Link>
       </nav>

       <Routes>
         <Route index element={<Home />} />
         <Route path="home" element={<Home />} />
         {/* The `/*` means every route that is relative to the user must render the user component   */}
         <Route path="/user/*" element={<User />}>
         </Route>
       </Routes>
     </>
   </div>
 );
}

export default Nestede;