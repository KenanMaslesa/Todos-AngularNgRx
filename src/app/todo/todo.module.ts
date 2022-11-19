import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ToDoEffects } from './+state/todo.effects';
import { TodoReducer } from './+state/todo.reducer';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoFiltersComponent } from './todo-filters/todo-filters.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [TodoAddComponent, TodoListComponent, TodoFiltersComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forFeature('todos', TodoReducer),
    EffectsModule.forFeature([ToDoEffects]),
  ],
  exports: [TodoAddComponent, TodoListComponent, TodoFiltersComponent],
})
export class TodoModule {}
