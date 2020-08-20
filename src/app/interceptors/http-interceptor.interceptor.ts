import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LoaderService } from '../components/shared/loader/loader.service';
import { MessagesService } from '../components/shared/messages/messages.service';
import { MessageType } from '../components/shared/messages/messages.utils';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {
  constructor(
    private injector: Injector /*,private loaderService: LoaderService*/
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const loaderService = this.injector.get(LoaderService);
    const messagesService = this.injector.get(MessagesService);
    loaderService.showLoader = true;
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          loaderService.showLoader = false;
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        messagesService.showMessage({
          message: error.message,
          type: MessageType.Danger,
        });
        loaderService.showLoader = false;
        return throwError(error);
      })
    );
  }
}
