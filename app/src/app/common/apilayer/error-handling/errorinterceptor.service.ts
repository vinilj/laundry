import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators'
import { ToastService } from '../../service/toast/toast.service';
import { LocalStroageService } from '../../service/localstorage/local-stroage.service';
import { Router } from '@angular/router';



/** key to fetch stored token fron local storage */
const TOKEN_KEY = "authToken";

@Injectable()
export class ErrorinterceptorService implements HttpInterceptor {


  constructor(
    private localStorage: LocalStroageService,
    private toast: ToastService,
    private router: Router
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler, ): Observable<HttpEvent<any>> {

    return from(this.localStorage.getStoredKey(TOKEN_KEY))
      .pipe(
        switchMap(token => {

          /** if  Auth token exists adds it to the header */
          if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
          }


          //Check network connection, other wise throw offline exception
          if (navigator.onLine) {
            return next.handle(request)

              /**error interceptor */
              .pipe(catchError(err => {

                /**bad request error */
                if (err.error.error.statusCode === 400)
                  this.toast.toastFail('Something went wrong !!')

                /**Internal server erroe */
                if (err.error.error.statusCode === 500)
                  this.toast.toastFail('Something went wrong. Please contact support !')

                if (err.error.error.statusCode === 406)
                  this.toast.toastFail(err.error.error.message)

                  if (err.error.error.statusCode === 404)
                  this.toast.toastFail(err.error.error.message)

                /**Internal server erroe */
                if (err.error.error.statusCode === 401) {
                  this.toast.toastFail('Please login to continue')
                  this.router.navigateByUrl('/login');
                }


                else
                  // this.toast.toastFail(err.error.error.message)

                  return throwError(err.error.error)
              }))
          }
          else
            this.toast.toastFail("You are OFFLINE. Please check your network connection!")
          return throwError("You are OFFLINE. Please check your network connection!");
        })
      );


  }


}





// @Injectable({
//   providedIn: 'root'
// })
// export class ErrorinterceptorService {

//   constructor(private toast: ToastService) { }
//   /**
//     * @example
//     * intercept(request,next)
//     * @param request  HttpRequest
//     * @param next HttpHandler
//     *@returns {void}
//     */
//   // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


//   //   //Check network connection, other wise throw offline exception
//   //   if (navigator.onLine) {
//   //     return next.handle(request)

//   //       /**error interceptor */
//   //       .pipe(catchError(err => {

//   //         /**bad request error */
//   //         if (err.error.status === 400)
//   //           this.toast.toastFail('Something went wrong !!')

//   //         /**Internal server erroe */
//   //         if (err.error.status === 500)
//   //           this.toast.toastFail('Something went wrong. Please contact support !')

//   //         else
//   //           this.toast.toastFail(err.error.message)

//   //         return throwError(err.error)
//   //       }))
//   //   }
//   //   else
//   //     this.toast.toastFail("You are OFFLINE. Please check your network connection!")
//   //   return throwError("You are OFFLINE. Please check your network connection!");

//   // }

// }
