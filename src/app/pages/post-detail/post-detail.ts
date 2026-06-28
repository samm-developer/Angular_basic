import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map, switchMap } from 'rxjs';

import { PostService } from '../../services/post.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-post-detail',
  imports: [RouterLink],
  templateUrl: './post-detail.html',
})
export class PostDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly postService = inject(PostService);
  private readonly userService = inject(UserService);

  protected readonly minPostId = 1;
  protected readonly maxPostId = 100;

  protected readonly postId = toSignal(
    this.route.paramMap.pipe(map((params) => Number(params.get('id')))),
    { initialValue: 1 },
  );

  protected readonly post = toSignal(
    this.route.paramMap.pipe(
      map((params) => Number(params.get('id'))),
      switchMap((id) => this.postService.getPost(id)),
    ),
    { initialValue: null },
  );

  protected readonly users = toSignal(
    this.route.paramMap.pipe(
      map((params) => Number(params.get('id'))),
      switchMap((id) => this.userService.getUsers(id)),
    ),
    { initialValue: [] },
  );

  protected previousPost() {
    const id = this.postId();
    if (id > this.minPostId) {
      this.router.navigate(['/posts', id - 1]);
    }
  }

  protected nextPost() {
    const id = this.postId();
    if (id < this.maxPostId) {
      this.router.navigate(['/posts', id + 1]);
    }
  }
}
