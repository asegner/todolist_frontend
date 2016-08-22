import * as constants from '../constants';
import moment from 'moment';

import TodoLogic from '../logic/todo_logic';

export function fetchTodos(archived, due, group) {
  return { type: constants.FETCH_TODOS }
}

export function startCreateTodo() {
  return { type: constants.START_CREATE_TODO_SAGA }
}

export function startUpdateTodo(todo) {
  const logic = new TodoLogic();
  return { type: constants.START_UPDATE_TODO_SAGA, todo: logic.updateTodo(todo) }
}

export function dueToday(todo) {
  const logic = new TodoLogic();
  todo.due = moment();
  todo = logic.updateTodo(todo);
  return { type: constants.START_UPDATE_TODO_SAGA, todo: todo }
}

export function dueTomorrow(todo) {
  const logic = new TodoLogic();
  todo.due = moment().add(1, "day")
  todo = logic.updateTodo(todo);
  return { type: constants.START_UPDATE_TODO_SAGA, todo: todo }
}

export function startDeleteTodo(todo) {
  return { type: constants.START_DELETE_TODO_SAGA, todo: todo }
}

export function startToggleComplete(todo) {
  todo.completed = !todo.completed;
  return { type: constants.START_UPDATE_TODO_SAGA, todo: todo }
}

export function startArchiveTodo(todo) {
  todo.archived = !todo.archived
  return { type: constants.START_ARCHIVE_TODO_SAGA, todo: todo }
}

export function startUnarchiveTodo(todo) {
  todo.archived = !todo.archived
  return { type: constants.START_UNARCHIVE_TODO_SAGA, todo: todo }
}

export function createTodo(subject, due) {
  const logic = new TodoLogic();
  let todo = logic.addTodo(subject, due)
  return { type: constants.CREATE_TODO, todo: todo }
}

export function addTodo(todo) {
  return { type: constants.ADD_TODO, todo: todo }
}

export function updateTodo(todo) {
  return { type: constants.UPDATE_TODO, todo: todo }
}

export function deleteTodo(todo) {
  return { type: constants.DELETE_TODO, todo: todo }
}

