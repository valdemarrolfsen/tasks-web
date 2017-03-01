import {combineReducers} from 'redux';
import * as LoginReducer from './user/reducers';
import * as TaskReducer from './tasks/reducers';

export default combineReducers(Object.assign(
  LoginReducer,
  TaskReducer
));