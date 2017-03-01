import * as types from './types';
import Api from '../../lib/api';

export function loginUser(username, password) {

  let data = {username:username, password:password};

  return (dispatch, getState) => {
    return Api.post('/login', data)
      .then(resp => {
        let token = resp.headers['authorization'].split(" ")[1];
        localStorage.setItem('token', token);
      })
      .then(resp => {
      dispatch(setAuthSuccess({isAuthenticated: true}));
    })
  }
}

export function setAuthSuccess({isAuthenticated}) {
  return {
    type: types.AUTH_SUCCESS,
    isAuthenticated
  }
}