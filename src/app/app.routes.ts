import { Routes } from '@angular/router';

import { Posts } from './pages/posts/posts';
import { Todos } from './pages/todos/todos';

export const routes: Routes = [
  { path: '', component: Posts },
  { path: 'todos', component: Todos },
];
