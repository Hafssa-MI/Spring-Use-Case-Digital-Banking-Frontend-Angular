import {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest
} from '@angular/common/http';

import { inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';

export const appHttpInterceptor: HttpInterceptorFn = (
  request: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {

  const authService = inject(AuthService);

  console.log("******");
  console.log(request.url);

  if (!request.url.includes('/auth/login')) {

    const newRequest = request.clone({
      headers: request.headers.set(
        'Authorization',
        'Bearer ' + authService.accessToken
      )
    });

    return next(newRequest).pipe(

      catchError((err) => {

        if (err.status === 401) {
          authService.logout();
        }

        return throwError(() => err.message);
      })

    );

  } else {
    return next(request);
  }
};
