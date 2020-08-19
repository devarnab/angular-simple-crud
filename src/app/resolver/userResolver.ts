import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserService } from '../services/user.service';

@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<any> {
  constructor(private userService: UserService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.userService.getUsers().pipe(
      catchError((error) => {
        // Todo: Handle Error
        return of(null);
      })
    );
  }
}
