import { configureStore} from "@reduxjs/toolkit";

import conterSlice from "./conterSlice";
const myMiddleware = store => next => action => {
      // Do something before the action is dispatched to the reducer
  
   // Continue processing the action
  const result = next(action);
  console.log('Before dispatch:', store.getState());

  return result;
  };

const store=configureStore({ reducer:{
        counter:conterSlice},
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(myMiddleware),
        
        })
export default store;