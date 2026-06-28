import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.html',
})
export class Posts {
  private readonly postService = inject(PostService);

  protected readonly posts = toSignal(this.postService.getPosts(), {
    initialValue: [],
  });
}
