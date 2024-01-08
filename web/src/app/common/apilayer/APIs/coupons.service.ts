import { Injectable } from '@angular/core';
import { HttpService } from '../http-header/http.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CouponsService {

  constructor(private httpService: HttpService, private http: HttpClient) { }

  getAllCoupons(): Observable<any> {
    return this.httpService.get('insta-coupons')
  }

  getRechargeAllCoupons(): Observable<any> {
    return this.httpService.get('recharge-wallets')
  }

  getfranchises(): Observable<any> {
    return this.httpService.get('franchises')
  }

  addCoupon(couponData) {
    return this.httpService.post('franchises/'+couponData.franchiseId+'/insta-coupons', couponData)
  }

  updateRewardPercentage(data){
    return this.http.patch(environment.apiBaseUrl+'franchises/'+data.franchiseId, data)
  }

  uploadExcel(data){
    return this.httpService.post('files', data)
  }

  deletePromo(PromoData): Observable<any> {
    return this.http.delete(environment.apiBaseUrl+'insta-coupons/'+PromoData, PromoData)
  }
}
