import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import {
  AddTodo,
  DeleteCompletedTodos,
  DeleteTodo,
  GetTodos,
  UpdateTodo,
} from './todo.actions';
import { Observable } from 'rxjs';
import * as TodoSelectors from './todo.selectors';
import { Todo } from '../models';

@Injectable({ providedIn: 'root' })
export class TodoFacade {
  todos$: Observable<Todo[]> = this.store.select(TodoSelectors.getTodoList);

  isLoading$: Observable<boolean> = this.store.select(
    TodoSelectors.getIsLoading
  );

  numberOfUncompletedTodos$: Observable<number> = this.store.select(
    TodoSelectors.getNumberOfUncompletedTodos
  );

  constructor(private store: Store) {}

  public dispatchGetTodos(): void {
    this.store.dispatch(GetTodos());
  }

  public dispatchDeleteTodo(id: number): void {
    this.store.dispatch(DeleteTodo({ id }));
  }

  public dispatchDeleteCompletedTodos(): void {
    this.store.dispatch(DeleteCompletedTodos());
  }

  public dispatchUpdateTodo(payload: Todo, id: number): void {
    this.store.dispatch(UpdateTodo({ payload, id }));
  }

  public dispatchAddTodo(todo: Todo): void {
    this.store.dispatch(AddTodo({ payload: todo }));
  }
}
