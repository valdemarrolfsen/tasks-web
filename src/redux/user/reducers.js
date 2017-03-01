import createReducer from '../../lib/createReducer';
import * as types from './types';

export const isAuthenticated = createReducer(false, {
  [types.AUTH_SUCCESS](state, action) {
    return action.isAuthenticated;
  }
});