import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoFacade } from '../+state/todo.facade';
@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
})
export class TodoAddComponent implements OnInit {
  public form: FormGroup;

  constructor(private todoFacade: TodoFacade) {}

  public ngOnInit(): void {
    this.form = new FormGroup({
      todoItemText: new FormControl(null, [Validators.required]),
    });
  }

  public addTodo(todo: string): void {
    this.todoFacade.dispatchAddTodo({
      id: Date.now(),
      title: todo,
      completed: false,
    });
    this.clearForm();
  }

  public submitForm(): void {
    this.addTodo(this.form.value.todoItemText);
  }

  public clearForm(): void {
    this.form.reset();
  }
}
