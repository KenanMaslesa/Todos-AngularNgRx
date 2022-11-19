import { TodoStateModel } from './../models';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getTodosFeatureState = createFeatureSelector<TodoStateModel>('todos');

export const getTodoList = createSelector(
  getTodosFeatureState,
  (state) => state.todos
);

export const getIsLoading = createSelector(
  getTodosFeatureState,
  (state) => state.isLoading
);

export const getNumberOfUncompletedTodos = createSelector(
  getTodosFeatureState,
  (state) => {
    const completedTodos = state.todos.filter((todo) => todo.completed);
    return state.todos.length - completedTodos.length;
  }
);

// OPTION 2
// export class TodoSelectors {
//   static getTodoList = createSelector(
//     getTodosFeatureState,
//     (state) => state.todos
//   );
// }
