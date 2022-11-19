import { TodoService } from './../todo.service';
import { Todo } from './../models';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as ToDoActions from './todo.actions';

@Injectable()
export class ToDoEffects {
  constructor(private todoService: TodoService, private action$: Actions) {}

  getTodos$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(ToDoActions.GetTodos),
      switchMap(() =>
        this.todoService.getTodos().pipe(
          map((response: Todo[]) => {
            return ToDoActions.GetTodosSuccess({ payload: response });
          }),
          catchError((error: Error) => {
            return of(ToDoActions.GetTodosFailure({ error: error.message }));
          })
        )
      )
    )
  );

  addTodo$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(ToDoActions.AddTodo),
      switchMap(({ payload }) =>
        this.todoService.addTodo(payload).pipe(
          map((response: Todo) => {
            return ToDoActions.AddTodoSuccess({ payload: response });
          }),
          catchError((error: Error) => {
            return of(ToDoActions.AddTodoFailure({ error: error.message }));
          })
        )
      )
    )
  );

  updateTodo$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(ToDoActions.UpdateTodo),
      switchMap(
        (
          action // {payload, id}
        ) =>
          this.todoService.updateTodo(action.payload, action.id).pipe(
            map((response: Todo) => {
              return ToDoActions.UpdateTodoSuccess({ payload: response });
            }),
            catchError((error: Error) => {
              return of(ToDoActions.GetTodosFailure({ error: error.message }));
            })
          )
      )
    )
  );
}
