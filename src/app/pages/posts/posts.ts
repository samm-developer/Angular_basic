import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  imports: [RouterLink],
  templateUrl: './posts.html',
})
export class Posts {
  private readonly postService = inject(PostService);

  protected readonly posts = toSignal(this.postService.getPosts(), {
    initialValue: [],
  });
}
