import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";



 const store=configureStore(

{
    counter:counterSlice,
}

)
export default store;