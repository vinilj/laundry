import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http-header/http.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  user: any;


  constructor(private httpService: HttpService, private cookie: CookieService, private http:HttpClient) {
    const userType = this.cookie.get('user')
    const franchiseId = this.cookie.get('franchiseId')
    // this.user.userType = userType;
    // this.user.franchiseId = franchiseId

  }

  getAllOrders(): Observable<any> {
    const userType = this.cookie.get('userType')
    const franchiseId = this.cookie.get('franchiseId')    

    
    if (userType == "FranchiseAdmin")
      return this.httpService.get('franchises/' + franchiseId + '/orders')
    else {
      return this.http.get<any>(environment.apiBaseUrl + 'orders', {
        params: { filter: JSON.stringify({offset:0, limit:10, userType:userType, franchiseId:franchiseId}) }
      });
    }
  }

  getAllFilteredOrders(id): Observable<any> {
    if (id>0)
      return this.httpService.get('franchises/' + id + '/orders')
    else
      return this.httpService.get('orders')
  }

}
