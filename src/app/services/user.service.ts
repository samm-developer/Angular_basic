import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly http = inject(HttpClient);

  getUsers(postId: number) {
    return this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users?postId=${postId}`);
  }
}
