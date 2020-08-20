import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private httpClient: HttpClient) {}

  getPosts(userId: string): Observable<Post[]> {
    return this.httpClient.get<Post[]>(
      `${environment.baseUrl}/users/${userId}/posts`
    );
  }

  savePost(dataToSave: Partial<Post>): Observable<Post> {
    if (dataToSave.id) {
      return this.httpClient.put<Post>(
        `${environment.baseUrl}/posts/${dataToSave.id}`,
        dataToSave
      );
    }
    return this.httpClient.post<Post>(
      `${environment.baseUrl}/posts`,
      dataToSave
    );
  }

  deletePost(postId: number): Observable<any> {
    return this.httpClient.delete(`${environment.baseUrl}/posts/${postId}`);
  }
}
