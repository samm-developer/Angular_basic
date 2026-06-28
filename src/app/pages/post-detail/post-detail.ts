import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, switchMap } from 'rxjs';

import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-detail',
  imports: [RouterLink],
  templateUrl: './post-detail.html',
})
export class PostDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly postService = inject(PostService);

  protected readonly post = toSignal(
    this.route.paramMap.pipe(
      map((params) => Number(params.get('id'))),
      switchMap((id) => this.postService.getPost(id)),
    ),
    { initialValue: null },
  );
}
