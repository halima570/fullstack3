import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";
import React from "react";
import './index.css'
const App = () => {
 return (
   <div className="flex flex-col bg-pink-100 items-center border-2	border-rose-900 ml-[200px] mr-[200px] p-[20px] mt-[30px]">
   <h1 className="text-center text-pink-500 font-bold p-30 text-5xl m-10	">hi this my profile</h1>
   <ProfilePhoto/>
<label className="text-2xl text-pink-900 font-bold "> my name is </label><FullName/>
<label className="text-2xl text-pink-900 font-bold"> my adress </label><Address/>



   </div>
 );
};


export default App;



