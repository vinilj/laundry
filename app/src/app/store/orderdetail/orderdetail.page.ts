import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderapiService } from 'src/app/common/apilayer/APIs/orderapi.service';
import { ToastService } from 'src/app/common/service/toast/toast.service';
import { AlertController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import * as moment from 'moment';

@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.page.html',
  styleUrls: ['./orderdetail.page.scss'],
})
export class OrderdetailPage implements OnInit {

  orderId: any;
  order: any;

  constructor(private route: ActivatedRoute, private alertCtrl: AlertController, private callNumber: CallNumber,
    private orderService: OrderapiService, private toast: ToastService) {
  }

  ngOnInit() { }

  ionViewWillEnter() {
    this.route.queryParams.subscribe(params => {
      console.log(params);

      if (params && params.id) {
        this.orderId = JSON.parse(params.id);
        this.getOrderDetails()
      }
    });
  }

  doRefresh(event) {
    this.getOrderDetails()
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

  getOrderDetails() {
    this.orderService.getUserIdFromStorage()
      .then(() => {
        this.orderService.getDropOrderById(this.orderId)
          .subscribe(res => {
            this.order = res[0];

            console.log(res);
          })
      })

  }


  updateOrderStatus(orderStatus) {
    let payload = {
      id: this.orderId,
      orderStatus: orderStatus
    }

    // if(orderStatus == 'delivered' && this.order.orders[0].paymentStatus=='paid'){
    this.orderService.updateOrder(payload)
      .subscribe(res => {
        console.log(res);
        this.order.orders[0].orderStatus = orderStatus
        this.toast.toastSuccess('Status upadted to ' + orderStatus)
      })
    // }
    // else{
    //  this.toast.toastFail('Payment status is pending !!')
    // }

  }

  callUser() {
    this.callNumber.callNumber(this.order.orders[0].user.mobile, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  sendInvoice() {
    this.orderService.sendStoreInvoice({ orderId: this.orderId })
    .subscribe(res=> this.toast.toastSuccess('Invoice sent '))
  }

  sendEmail() {
    this.orderService.sendStoreEmail({ orderId: this.orderId })
    .subscribe(res=> this.toast.toastSuccess('Email sent '))
  }
}
