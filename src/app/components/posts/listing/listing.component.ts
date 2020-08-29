import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingComponent {
  @Input() posts: Post[];
  @Output() addEditPost = new EventEmitter<string>();
  @Output() deletePost = new EventEmitter<string>();

  postId(index: number, post: Post): number {
    return post.id;
  }

  onAddEditPost(postId: string = null): void {
    this.addEditPost.emit(postId);
  }

  onDeletePost(postId: string = null): void {
    this.deletePost.emit(postId);
  }
}
