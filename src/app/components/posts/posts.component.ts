import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostService } from 'src/app/services/post.service';
import { Post } from '../../models/post.interface';
import { ModalConfig } from '../shared/modal/modal.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit, OnDestroy {
  userId: number;
  posts: Post[];
  selectedPost: Post;
  selectedPostId: number;
  showModal = false;
  showDeleteModal = false;
  subscriptions: Subscription[] = [];
  deleteModalConfig: ModalConfig;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.posts = this.route.snapshot.data.posts;
    this.route.paramMap.subscribe(
      (params) => (this.userId = parseInt(params.get('id')))
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subs) => subs.unsubscribe());
  }

  onAddEditPost(postId: number) {
    if (postId) {
      this.selectedPost = this.getPostToEdit(postId);
    }
    this.showModal = true;
  }

  onCloseModal() {
    this.showModal = false;
    this.selectedPost = null;
  }

  onSavePost(dataToSave: Partial<Post>) {
    dataToSave = { ...dataToSave, userId: this.userId };
    this.subscriptions.push(
      this.postService.savePost(dataToSave).subscribe((savedData: Post) => {
        if (dataToSave.id) {
          this.updatePosts(savedData);
        } else {
          this.posts = [savedData, ...this.posts];
        }
        this.onCloseModal();
      })
    );
  }

  onDeletePost(postId: number) {
    this.selectedPostId = postId;
    this.showDeleteModal = true;
    this.deleteModalConfig = {
      title: 'Delete Post',
    };
  }

  confirmDelete() {
    this.showDeleteModal = false;
    this.subscriptions.push(
      this.postService.deletePost(this.selectedPostId).subscribe(
        () => {
          this.posts = this.posts.filter(
            (post) => post.id !== this.selectedPostId
          );
          this.selectedPostId = null;
        },
        () => {
          this.selectedPostId = null;
        }
      )
    );
  }

  private updatePosts(savedData: Post) {
    this.posts = this.posts.map((post) => {
      if (post.id === savedData.id) {
        return savedData;
      } else {
        return post;
      }
    });
  }

  private getPostToEdit(selectedPostId: number): Post {
    return this.posts.find((post: Post) => post.id === selectedPostId);
  }
}
