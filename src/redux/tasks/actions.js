import * as types from './types';
import Api from '../../lib/api';

export function listTasks() {
  return (dispatch, getState) => {
    return Api.get('/tasks/')
      .then(resp => {
        resp = resp.data;
        dispatch(setTasks({tasks: resp.reverse()}));
    })
  }
}

export function postTask(name) {
  return (dispatch, getState) => {

    return Api.post('/tasks/', {name:name})
      .then(resp => {
        resp = resp.data;
        let tasks = getState().tasks;
        tasks.unshift(resp);
        dispatch(setTasks({tasks:[...tasks]}));
    })
  }
}

export function updateTask(task) {
  return (dispatch, getState) => {
    return Api.put(`/tasks/${task.id}`, task)
      .then(resp => {
        resp = resp.data;
        let tasks = getState().tasks;
        let index = tasks.indexOf(task);
        tasks[index] = resp;
        dispatch(setTasks({tasks:[...tasks]}));
    });
  }
}

export function deleteTask(task) {
  return (dispatch, getState) => {
    return Api.delete(`/tasks/${task.id}`, null)
      .then(resp => {
        resp = resp.data;
        let tasks = getState().tasks;
        let index = tasks.indexOf(task);
        tasks.splice(index, 1);
        dispatch(setTasks({tasks:[...tasks]}));
    });
  }
}

export function setTasks({tasks}) {
  return {
    type: types.SET_TASKS,
    tasks
  }
}