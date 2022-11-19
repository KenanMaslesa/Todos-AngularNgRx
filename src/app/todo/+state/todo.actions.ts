import { createAction, props } from '@ngrx/store';
import { Todo } from '../models';

export const GetTodos = createAction('[Todo] Get');
export const GetTodosSuccess = createAction(
  '[Todo] Get Success',
  props<{ payload: Todo[] }>()
);
export const GetTodosFailure = createAction(
  '[Todo] Get Fail',
  props<{ error: string }>()
);

export const AddTodo = createAction('[Todo] Add', props<{ payload: Todo }>());
export const AddTodoSuccess = createAction(
  '[Todo] Add Success',
  props<{ payload: Todo }>()
);
export const AddTodoFailure = createAction(
  '[Todo] Add Failure',
  props<{ error: string }>()
);

export const UpdateTodo = createAction(
  '[Todo] Update',
  props<{ payload: Todo; id: number }>()
);
export const UpdateTodoSuccess = createAction(
  '[Todo] Update Success',
  props<{ payload: Todo }>()
);
export const UpdateTodoFailure = createAction(
  '[Todo] Update Failure',
  props<{ error: string }>()
);

export const DeleteTodo = createAction(
  '[Todo] Delete',
  props<{ id: number }>()
);
export const DeleteTodoSuccess = createAction(
  '[Todo] Delete Success',
  props<{ id: number }>()
);
export const DeleteTodoFailure = createAction(
  '[Todo] Delete Failure',
  props<{ error: string }>()
);

export const ClearCompletedTodos = createAction('[Todo] Clear Completed Todos');
