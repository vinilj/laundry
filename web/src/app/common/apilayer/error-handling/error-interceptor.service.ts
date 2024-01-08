import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators'
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



/** key to fetch stored token fron local storage */

@Injectable()
export class ErrorinterceptorService implements HttpInterceptor {
  AuthToken: string;


  constructor(private cookie: CookieService,  private toast: ToastrService, private router: Router) {
    this.AuthToken = this.cookie.get('Auth-Token')
    // this.AuthToken= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4gYWRtaW4iLCJpZCI6MSwiZmlyc3ROYW1lIjoiYWRtaW4iLCJsYXN0TmFtZSI6ImFkbWluIiwibW9iaWxlIjoiOTkxNjEyMzMyOCIsImVtYWlsIjoiZ2FuZXNoLmRAbWFrb25pc3NvZnQuY29tIiwicGVybWlzc2lvbnMiOlsiQUxMIl0sImRvYiI6bnVsbCwidXNlclR5cGUiOiJzdXBlckFkbWluIiwiZGV2aWNlVG9rZW4iOm51bGwsImlhdCI6MTU4NjE0ODg2MCwiZXhwIjoxNTg2MzIxNjYwfQ.qB7h3gxF533cXAu_ZETqVjaFv-jLPKSZ6eYQpeDiFEo"
  }

  getStoredToken(): Promise<any> {
    /**fetches the token */
    this.AuthToken = this.cookie.get('Auth-Token')
    return new Promise<string>((resolve, reject) => { resolve(this.AuthToken) });
  }


  intercept(request: HttpRequest<any>, next: HttpHandler, ): Observable<HttpEvent<any>> {
    /**fetch token from storage */
    return from(this.getStoredToken())
      .pipe(
        switchMap(token => {

          /** if  Auth token exists adds it to the header */
          // const one = new Promise<any>((resolve, reject) => {
          //   resolve(this.AuthToken = this.cookie.get('Auth-Token'));
          // });
          // const two = one.then(value => {
          //   if (value) {
          //     request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + value) });
          //   }
          //   console.log(one === two, value);
          // });
          if (this.AuthToken) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + this.AuthToken) });
          }
          //Check network connection, other wise throw offline exception
          if (navigator.onLine) {
            return next.handle(request)
            
              /**error interceptor */
              .pipe(catchError(err => {
                /**bad request error */
                if (err.error.status === 400){
                  this.toast.error(err.error.error.message, '', {
                    timeOut: 3000,
                    closeButton: true
                  });
                }
                
                /**Internal server erroe */
                if (err.error.status === 500){
                  this.toast.error(err.error.error.message, '', {
                    timeOut: 3000,
                    closeButton: true
                  });
                }
                else{
                  if (err.error.error.statusCode === 401){
                    this.cookie.deleteAll();
                    this.toast.success('Logged Out', '', {});
                    this.cookie.set('Auth-Token', "")
                    this.router.navigateByUrl('login')
                  }
                  this.toast.error(err.error.error.message, '', {
                    timeOut: 3000,
                    closeButton: true
                  });
                }
                return throwError(err.error.error)
              }))
          }
          else
          this.toast.error("You are OFFLINE. Please check your network connection!", '', {
            closeButton: true,
          });
            return throwError("You are OFFLINE. Please check your network connection!");
        }
      ))
  }
}

