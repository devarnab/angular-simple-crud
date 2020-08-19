import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private httpClient: HttpClient) {}

  getPosts(userId: string, postId: string = null) {
    if (postId) {
      return this.httpClient.get(`${environment.baseUrl}/posts/${postId}`);
    }
    return this.httpClient.get(`${environment.baseUrl}/users/${userId}/posts`);
  }

  savePost(dataToSave: Partial<Post>) {
    if (dataToSave.id) {
      return this.httpClient.put(
        `${environment.baseUrl}/posts/${dataToSave.id}`,
        dataToSave
      );
    }
    return this.httpClient.post(`${environment.baseUrl}/posts`, dataToSave);
  }

  deletePost(postId: number) {
    return this.httpClient.delete(`${environment.baseUrl}/posts/${postId}`);
  }
}
