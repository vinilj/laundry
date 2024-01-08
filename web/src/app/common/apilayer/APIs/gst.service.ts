import { Injectable } from '@angular/core';
import { HttpService } from '../http-header/http.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GstService {


  constructor(private httpService: HttpService, private http: HttpClient) { }

  GetGst(): Observable<any> {
    return this.httpService.get('GSTValue/1')
  }
  
  patchGSTValue(data){
    return this.http.patch(environment.apiBaseUrl+'GSTValue/1', data)
  }
  
}
