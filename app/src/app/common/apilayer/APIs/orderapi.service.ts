import { Injectable } from '@angular/core';
import { UserapiService } from './userapi.service';
import { map } from 'rxjs/operators';
import { HttpService } from '../http-header/http.service';
import { Observable } from 'rxjs';
import { LocalStroageService } from '../../service/localstorage/local-stroage.service';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class OrderapiService {

  userId: any;
  franchiseId: any;

  constructor(
    private localStorage: LocalStroageService,
    private httpService: HttpService
  ) { }


  getUserIdFromStorage() {
    return this.localStorage.getStoredKey('user')
      .then(user => {
        this.userId = user.id
        if (user.franchiseId)
          this.franchiseId = user.franchiseId
        console.log(user);

      })
  }


  /*** For User Login 
*@param{"email": "useremail","password": "string"}*/
  createOrder(order): Observable<any> {
    let payload = {
      startTime: moment(),
      endTime: moment().add(30, "minute"),
      weight: order.weight,
      amount: order.amount,
      paymentStatus: order.paymentStatus,
      orderStatus: "ongoing",
      feedback: "",
      userId: this.userId,
      opertationType: "self operated",
      franchiseId: order.franchiseId,
      machineId: order.machineId,
      walletDeductions: order.walletDeductions,
      promoDeductions: order.promoDeductions,
      transactionId: order.transactionId,
      rewardAmount: 0,

      promoCode: order.promoCode,
      btTrigger: order.btTrigger,
      transactionAmount:order.transactionAmount
    }
    console.log('PayLoad', payload);


    // let payload = {
    //   startTime: moment(),
    //   endTime: moment(),
    //   weight: order.weight,
    //   amount: order.amount,
    //   paymentStatus: order.paymentStatus,
    //   orderStatus: "",
    //   feedback: "",
    //   userId: this.userId,
    //   opertationType: 'Self Operated',
    //   franchiseId: 1,
    //   machineId: 1
    // }
    return this.httpService.post('users/' + this.userId + '/orders', payload)
  }


  getAllOrders() {
    return this.httpService.get('users/' + this.userId + '/orders')
  }

  getOrderById(orderId: any) {
    return this.httpService.get('orders/' + orderId)
  }

  createDropOrder(order): Observable<any> {
    // let payload = {
    //   startTime: moment(),
    //   endTime: moment(),
    //   weight: order.weight,
    //   amount: order.amount,
    //   paymentStatus: "due",
    //   orderStatus: "",
    //   feedback: "",
    //   userId: this.userId,
    // }
    let payload = {
      startTime: moment(),
      endTime: new Date(),
      weight: order.weight,
      amount: order.amount,
      paymentStatus: "due",
      orderStatus: "",
      feedback: "",
      userId: this.userId,
      opertationType: 'drop off',
      franchiseId: order.franchiseId,
      // machineId: 1,
      machineId: order.machineId,
      walletDeductions: 0,
      promoDeductions: order.promoDeductions,
    }
    console.log('PayLoad', payload);

    return this.httpService.post('users/' + this.userId + '/orders', payload)
  }
  getDropOrder(franchiseId) {
    return this.httpService.get('franchises/' + franchiseId + '/orders')
  }
  getDropOrderById(id) {
    return this.httpService.get('franchises/' + this.franchiseId + '/orders/' + id)
  }

  updateOrder(order) {
    return this.httpService.patch('orders/' + order.id, order)
  }

  getmachineById(mId) {
    return this.httpService.get('machines/' + mId)
  }
  getInstantCoupon(couponCode) {
    return this.httpService.post('promocode', couponCode)
  }

  sendStoreEmail(order) {
    return this.httpService.post('sendOrderStatus', order)
  }
  sendStoreInvoice(order) {
    return this.httpService.post('sendInvoice', order)
  }

  getFranchise(franchiseId) {
    return this.httpService.get('franchises/' + franchiseId )
  }

}
