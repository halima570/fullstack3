import { createSlice } from "@reduxjs/toolkit";

export const conterSlice=createSlice(

    {
        name:'counter',
initialState:{
    name:'',
    email:''
},
reducers:{
addName:(state,action)=>{
    state.name=action.payload.name;
    state.email=action.payload.email;   
},
}
}
)


export const {addName}=conterSlice.actions;
export default conterSlice.reducer;