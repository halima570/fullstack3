import {GET_USERS,CREATE_USER,DELETE_USER} from "./types";
const initialState = {
 errorMessage: "",
 loading: false,
 users:[]
};
const UserReducer = (state = initialState, { payload }) => {
switch (type) {
 case GET_USERS:
  return { ...state, users: payload, loading: false };
case CREATE_USER:
  return { ...state, users: [payload,...state.users],
 loading: false };
case DELETE_USER:
  return { ...state,users:state.users.filter((user) => user.id !== payload.id),loading: false };
default:
  return state;
 }
};
export default UserReducer;