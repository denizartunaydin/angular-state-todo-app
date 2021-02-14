import { Todo } from 'src/app/shared/todo';

export class AddTodo {
  static readonly type = '[Todo] Add';
  constructor(public payload: Todo) {}
}

export class DeleteTodo {
  static readonly type = '[Todo] Delete';
  constructor(public payload: string) {}
}
