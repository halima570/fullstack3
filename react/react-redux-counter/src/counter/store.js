import { createStore,applyMiddleware } from "redux"
import Reducer from "./reducer"
import ReduxThunk from 'redux-thunk'
const enhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
   }

const store=createStore(Reducer, enhancer(applyMiddleware(ReduxThunk)))
export default store;



