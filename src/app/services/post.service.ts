import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Post } from '../models/post';

@Injectable({ providedIn: 'root' })
export class PostService {
  private readonly http = inject(HttpClient);

  getPosts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
