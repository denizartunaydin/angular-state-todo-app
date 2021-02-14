import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/shared/todo';
import { AddTodo, DeleteTodo } from './state/todo.action';
import { TodoState } from './state/todo.state';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Select(TodoState.getTodos) todos$: Observable<Todo[]>;

  form: FormGroup;
  showMode: boolean = false;

  constructor(public fb: FormBuilder, private store: Store) {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
    this.form = this.fb.group({
      title: new FormControl(null),
      description: new FormControl(null),
    });
  }

  clearForm() {
    this.form = this.fb.group({
      title: [null],
      description: [null],
    });

    this.showMode = false;
  }

  addTodo() {
    const fv = this.form.value;

    const todo: Todo = {
      id: uuidv4(),
      title: fv.title,
      description: fv.description,
    };

    this.store.dispatch(new AddTodo(todo));

    this.clearForm();
  }

  deleteTodo(payload: string) {
    this.store.dispatch(new DeleteTodo(payload));
    this.clearForm();
  }

  showDialog() {
    this.showMode = true;
  }

  selectItem(payload: Todo) {}
}
