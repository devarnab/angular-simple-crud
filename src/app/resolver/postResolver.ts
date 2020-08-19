import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostService } from '../services/post.service';

@Injectable({ providedIn: 'root' })
export class PostResolver implements Resolve<any> {
  constructor(private postService: PostService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    const userId = route.paramMap.get('id');
    if (isNaN(+userId)) {
      // Todo: Handle Error
      return of(null);
    }
    return this.postService.getPosts(userId).pipe(
      catchError((error) => {
        // Todo: Handle Error
        return of(null);
      })
    );
  }
}
