import * as TaskActions from './tasks/actions';
import * as UserActions from './user/actions';

export const ActionCreators = Object.assign({},
  TaskActions,
  UserActions
);