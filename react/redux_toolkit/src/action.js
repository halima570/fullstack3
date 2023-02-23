import {GET_USERS,CREATE_USER,DELETE_USER} from './types';
export const GetUsers = (data) => (dispatch) => {
 dispatch({
  type: GET_USERS,
  payload: data,
 });
};
export const CreateUser = (data) => (dispatch) => {
 dispatch({
  type: CREATE_USER,
  payload: data,
 });
};
export const DeleteUser = (data) => (dispatch) => {
 dispatch({
  type: DELETE_USER,
  payload: data,
 });
};