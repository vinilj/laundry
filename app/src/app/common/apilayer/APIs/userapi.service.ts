import { Injectable } from '@angular/core';
import { HttpService } from '../http-header/http.service';
import { Observable } from 'rxjs';
import { LocalStroageService } from '../../service/localstorage/local-stroage.service';

@Injectable({
  providedIn: 'root'
})
export class UserapiService {
  userId: any;

  constructor(private httpService: HttpService, private localStorage: LocalStroageService) { }
  getUserIdFromStorage() {
    return this.localStorage.getStoredKey('user')
      .then(user => {
        // console.log(user);
        this.userId = user.id
      })
  }


  /*** For User Signup 
*@param{"mobile": "string"}*/
  userSignup(user): Observable<any> {
    return this.httpService.post('mobile/signup', user)
  }


  /*** For User Login 
*@param{"mobile": "string","otp": 0}*/
  userLogin(user): Observable<any> {
    return this.httpService.post('mobile/login', user)
  }


  /**
* Fetch loggedin user data
*@param{}
*/
  getUserData(): Observable<any> {
    return this.httpService.get('users/me')
  }
  getUserDataById(id): Observable<any> {
    return this.httpService.get('users/' + id)
  }

  createUserData(user): Observable<any> {
    return this.httpService.post('mobile/createUser', user)
  }

  resendOTP(user) {
    return this.httpService.post('resendOtp', user)
  }

  userLogout() {
    return this.httpService.get('/logout')
  }

  getUserWallet() {
    return this.httpService.get('users/' + this.userId + '/wallets')
  }

  getWalletHistory() {
    return this.httpService.get('users/' + this.userId + '/wallet-histories')
  }
  updateUser(user) {
    return this.httpService.patch('users/' + user.id, user)
  }
  addRechargeCoupon(couponCode) {
    return this.httpService.post('/recharge-wallets', couponCode)
  }

  getBanners(){
    return this.httpService.get('files')
  }

  getAllOffers(){
    return this.httpService.post('/userOffers', {id:this.userId})
    
  }
}
