import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const appHttpInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);

  console.log("******");
  console.log(req.url);

  if (!req.url.includes("/auth/login")) {
    const newRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.accessToken}`
      }
    });
    return next(newRequest);
  } else {
    return next(req);
  }
};
