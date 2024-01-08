import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  httpOptions: any = {
    headers: new HttpHeaders({
      'Authorization': ''
    })
  };

  /**
   *@ignore
   */
  constructor(private _http: HttpClient, ) {
  }

  /**
   * HTTP get service
   * @param {string} url api url to get data
   * @param {boolean} status True | false (Use loader or not)
   * @returns HTTP response
   */
  get(url: string): Observable<any> {
    return this._http.get<any>(environment.apiBaseUrl + url, this.httpOptions);
    // return this._http.get<any>(environment.apiBaseUrl+ url);
  }


  /**
   * HTTP post service
   * @param {string} url api url to get data
   * @param {object} model data to be stored in DB
   * @param {boolean} status True | false (Use loader or not)
   * @returns HTTP response
   */
  post(url: string, model: any): Observable<any> {
    return this._http.post<any>(environment.apiBaseUrl + url, model, this.httpOptions);
  }

  /**
   * HTTP put service
   * @param {string} url api url to get data
   * @param {object} model data to be stored in DB
   * @returns HTTP response
   */
  put(url: string, model: any): Observable<any> {
    return this._http.put<any>(environment.apiBaseUrl + url, model, this.httpOptions);
  }

  /**
   * HTTP delete service
   * @param {string} url api url to get data
   * @returns HTTP response
   */
  delete(url: string): Observable<Response> {
    return this._http.delete<any>(environment.apiBaseUrl + url);
  }}
  
