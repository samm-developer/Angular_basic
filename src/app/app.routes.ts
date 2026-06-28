import { Routes } from '@angular/router';

import { PostDetail } from './pages/post-detail/post-detail';
import { Posts } from './pages/posts/posts';
import { Todos } from './pages/todos/todos';

export const routes: Routes = [
  { path: '', component: Posts },
  { path: 'posts/:id', component: PostDetail },
  { path: 'todos', component: Todos },
];
