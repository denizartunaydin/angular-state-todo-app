import { Injectable } from '@angular/core';
import {
  Action,
  Selector,
  State,
  StateContext,
  StateToken,
  Store,
} from '@ngxs/store';
import { Todo } from 'src/app/shared/todo';
import { AddTodo, DeleteTodo } from './todo.action';

export class TodoStateModel {
  todos: Todo[];
  selectedTodo: Todo;
}

const TODO_STATE_TOKEN = new StateToken<TodoStateModel>('TodoState');

@Injectable()
@State<TodoStateModel>({
  name: 'todoState',
  defaults: {
    todos: [],
    selectedTodo: null,
  },
})
export class TodoState {
  constructor(private store: Store) {}

  @Selector()
  static getTodos(state: TodoStateModel) {
    return state.todos;
  }

  @Action(AddTodo)
  addTodo(
    { getState, setState }: StateContext<TodoStateModel>,
    { payload }: AddTodo
  ) {
    const state = getState();

    console.log([...state.todos, payload]);

    setState({
      ...state,
      todos: [...state.todos, payload],
    });

    return state;
  }

  @Action(DeleteTodo)
  deleteTodo(
    { getState, setState }: StateContext<TodoStateModel>,
    { payload }: DeleteTodo
  ) {
    const state = getState();

    setState({
      ...state,
      todos: state.todos.filter((c) => c.id !== payload),
    });

    return state;
  }
}
