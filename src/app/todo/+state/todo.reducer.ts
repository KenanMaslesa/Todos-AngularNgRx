import { TodoStateModel } from './../models';
import { Action, createReducer, on } from '@ngrx/store';
import * as ToDoActions from './todo.actions';

export const intialState: TodoStateModel = {
  todos: [],
  isLoading: false,
};

const reducer = createReducer(
  intialState,
  on(ToDoActions.GetTodos, (state) => {
    return { ...state, isLoading: true };
  }),

  on(ToDoActions.GetTodosSuccess, (state, { payload }) => {
    return { ...state, todos: payload, isLoading: false };
  }),

  on(ToDoActions.GetTodosFailure, (state, { error }) => {
    alert(error);
    return { ...state, todos: [], isLoading: false };
  }),

  on(ToDoActions.UpdateTodo, (state) => {
    return { ...state, isLoading: true };
  }),

  on(ToDoActions.UpdateTodoSuccess, (state, { payload }) => {
    const updatedTodoList = [...state.todos];
    const todoIndex = updatedTodoList.findIndex(
      (item) => item.id === payload.id
    );
    updatedTodoList[todoIndex] = payload;
    return { ...state, todos: updatedTodoList, isLoading: false };
  }),

  on(ToDoActions.UpdateTodoFailure, (state, { error }) => {
    alert(error);
    return { ...state, isLoading: false };
  }),

  on(ToDoActions.AddTodo, (state) => {
    return { ...state, isLoading: true };
  }),

  on(ToDoActions.AddTodoSuccess, (state, { payload }) => {
    return { ...state, todos: [...state.todos, payload], isLoading: false };
  }),

  on(ToDoActions.AddTodoFailure, (state, { error }) => {
    alert(error);
    return { ...state, isLoading: false };
  }),

  on(ToDoActions.DeleteTodo, (state) => {
    return { ...state, isLoading: true };
  }),

  on(ToDoActions.DeleteTodoSuccess, (state, { id }) => {
    const filteredArray = state.todos.filter((item) => item.id !== id);
    return { ...state, todos: filteredArray, isLoading: false };
  }),

  on(ToDoActions.DeleteTodoFailure, (state, { error }) => {
    alert(error);
    return { ...state, isLoading: false };
  }),

  on(ToDoActions.ClearCompletedTodos, (state) => {
    const uncompletedTodos = state.todos.filter((todo) => !todo.completed);
    return { ...state, todos: uncompletedTodos, isLoading: false };
  })
);

export function TodoReducer(state: TodoStateModel | undefined, action: Action) {
  return reducer(state, action);
}
