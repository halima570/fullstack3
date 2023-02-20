import { Link, Route, Routes } from "react-router-dom";
import PrivateRoute from "./Privateroute";

const Home = () => <h1>Home (Public)</h1>;
const Pricing = () => <h1>Pricing (Public)</h1>;
const Dashboard = () => <h1>Dashboard (Private)</h1>;
const Settings = () => <h1>Settings (Private)</h1>;

const Login = () => <h1>TODO</h1>

function Nav() {
 return (
   <nav>

     <Link to="/">Home</Link>
     {` `}
     <Link to="/pricing">Pricing</Link>
     <Link to="/dashboard">dashboard</Link>
     <Link to="/setting">setting</Link>
   </nav>
 );
}

export default function Priv() {
 return (
   <div>
     <Nav />

     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/pricing" element={<Pricing />} />
       <Route path="/dashboard" element={
         <PrivateRoute >
           <Dashboard />
         </PrivateRoute>
       } />
       <Route path="/settings" element={
         <PrivateRoute isAuth={false}>
           < Settings />
         </PrivateRoute>

       } />
       <Route path="/login" element={<Login />} />
     </Routes>
   </div>
 );
}