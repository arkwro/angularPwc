import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { SecurityService } from "./security.service";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthInterceptorService implements HttpInterceptor {
  
  constructor(private security: SecurityService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const authRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.security.getToken()}`
      }
    });

    return next.handle(authRequest).pipe(
      catchError((err, caught) => {
        if (err instanceof HttpErrorResponse && err.status == 401) {
          this.security.authorize();
        }
        return throwError(new Error(err.error.error.message));
      })
    );
  }

}
