import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.html',
})
export class Todos {
  private readonly todoService = inject(TodoService);

  protected readonly todos = toSignal(this.todoService.getTodos(), {
    initialValue: [],
  });
}
