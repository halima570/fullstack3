import { INCREMENT,DECREMENT, INCREMENT_BY_VALUE } from './type-actions';

export const handelmoin=async (dispatch)=>{
  return  dispatch({
        type:DECREMENT
    }) 
}

export const handelplus=async (dispatch)=>{
    return  dispatch( {
          type:INCREMENT
      })
  }