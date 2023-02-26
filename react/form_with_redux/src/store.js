import { configureStore } from "@reduxjs/toolkit";
import conterSlice from "./conterSlice";
// const myMiddleware = store => next => action => {
//     if (action.type =='addName') {
//       // Do something before the action is dispatched to the reducer
//       console.log('Before dispatch:', store.getState());
//     }
  
//     // Continue processing the action
//     const result = next(action);
  
//     if (action.type == 'addName') {
//       // Do something after the action has been dispatched to the reducer
//       console.log('After dispatch:', store.getState());
//     }
  
//     return result;
//   };

const store=configureStore(
{

    reducer:{
        counter:conterSlice,
        // middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(myMiddleware),
    }
}
)

export default store;