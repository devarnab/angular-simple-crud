import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessagesService } from '../components/shared/messages/messages.service';
import { MessageType } from '../components/shared/messages/messages.utils';
import { PostService } from '../services/post.service';

@Injectable({ providedIn: 'root' })
export class PostResolver implements Resolve<any> {
  constructor(
    private postService: PostService,
    private messagesService: MessagesService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    const userId = route.paramMap.get('id');
    if (isNaN(+userId)) {
      this.messagesService.showMessage({
        message: 'User id should be a number!',
        type: MessageType.Danger,
      });
      return of(null);
    }
    return this.postService.getPosts(userId).pipe(
      catchError((error) => {
        return of(null);
      })
    );
  }
}
