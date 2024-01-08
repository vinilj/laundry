import { Injectable } from '@angular/core';
import { HttpService } from '../http-header/http.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService, private http: HttpClient) { }


  //   /*** For User Login 
  // *@param{"email": "string","password": "string"}*/
  userLogin(user): Observable<any> {
    return this.httpService.post('users/login', user)
  }

  getCurrentUserData(): Observable<any> {
    return this.httpService.get('users/me')
  }

  getUserDataById(id): Observable<any> {
    return this.httpService.get('users/' + id)
  }

  updateUserPassword(data): Observable<any> {
    return this.http.patch(environment.apiBaseUrl+'users/'+data.id, data)
  }

  forgotPassword(user): Observable<any> {
    return this.httpService.post('users/forgotpassword', user)
  }

}
