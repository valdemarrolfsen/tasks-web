import { browserHistory } from 'react-router'

var jwtDecode = require('jwt-decode');

/*
* ===========================
*         AUTH GUARD
* ===========================
*/

export const guardRoute = (nextState, replace) => {
  let token = localStorage.getItem('token');
  let verified = false;

  if (token) {
    let decoded = jwtDecode(token);
    verified = decoded.exp < new Date().getTime();
  } else {
    verified = false;
  }

  if (!verified) {
    replace({
      pathname: "/login",
    });
  }
}