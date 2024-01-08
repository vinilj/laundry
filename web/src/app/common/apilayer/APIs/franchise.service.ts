import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http-header/http.service';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FranchiseService {

  constructor(private httpService: HttpService, private cookie: CookieService,  private http: HttpClient) { }

  getAllFranchises(): Observable<any> {
    return this.httpService.get('franchises')
  }

  addFranchise(franchiseData): Observable<any> {
    return this.httpService.post("franchises", franchiseData)
  }

  addOperator(model): Observable<any> {
    let fId: any = this.cookie.get('franchiseId')
    model.franchiseId = fId * 1
    model['password'] = 'laundry123'
    return this.httpService.post("storeoperator", model)
  }
  getAllStoreOperators(): Observable<any> {
    // franchises/2/storeoperatorsKC
    const franchiseId = this.cookie.get('franchiseId')
    return this.httpService.get('franchises/' + franchiseId + '/storeoperators')
  }

  franchiseById(id): Observable<any> {
    return this.httpService.get('franchises/'+id)
  }

  updateFranchise(data){
    return this.http.patch(environment.apiBaseUrl+'franchises/'+data.id, data)
  }

}