import createReducer from '../../lib/createReducer';
import * as types from './types';

export const tasks = createReducer([], {
    [types.SET_TASKS](state, action) {

      console.log(action.tasks);

      return action.tasks;
    }
});