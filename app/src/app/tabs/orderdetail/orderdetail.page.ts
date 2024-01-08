import { Component, OnInit, NgZone } from '@angular/core';
import { OrderapiService } from 'src/app/common/apilayer/APIs/orderapi.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { PaymentService } from 'src/app/common/service/payment/payment.service';
import { ToastService } from 'src/app/common/service/toast/toast.service';
import { UserapiService } from 'src/app/common/apilayer/APIs/userapi.service';
import { AlertController, NavController, PopoverController } from '@ionic/angular';
import * as moment from 'moment';
import { PaymentsucesspopupComponent } from 'src/app/common/components/paymentsucesspopup/paymentsucesspopup.component';
import { BLE } from '@ionic-native/ble/ngx';
declare var RazorpayCheckout: any;


@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.page.html',
  styleUrls: ['./orderdetail.page.scss'],
})
export class OrderdetailPage implements OnInit {
  orderId: any;
  orderDetail: any;
  currencyIcon: string = '₹';
  currency: string = 'INR';
  paymentAmount: number = 1600;
  // // testKey
  // razor_key: string = 'rzp_test_rRvE0JzWWGkqh1';

  //Live Key
  razor_key: string = 'rzp_live_1FMhHw7pwKiV36';
  user: any;
  walletBalance = 0;
  paidAmount = 0;
  walletDeduction = 0;

  promoDecuctions: any
  promocode: any
  transactionId: any
  transactionType: any
  couponAmount: any = {
    coins: 0,
    coupon: ''
  };
  applyCouponCode: any;
  paidBackupAmount: number;
  frachise: any;
  machineData: any;
  devices: any[];

  constructor(private orderService: OrderapiService,public popoverController: PopoverController, private navctrl: NavController, private route: ActivatedRoute, private userService: UserapiService,
    private ngZone: NgZone, private ble: BLE, private router: Router, public alertController: AlertController, private paymentService: PaymentService, private toast: ToastService, ) {

  }

  doRefresh(event) {
    setTimeout(() => {
      this.ionViewWillEnter()
      event.target.complete();
    }, 1000);
  }
  ngOnInit() {
  }
ionViewDidEnter(){
  this.couponAmount.coins = 0
    this.couponAmount.coupon = ''
    this.applyCouponCode=''
}
  ionViewWillEnter() {

    this.userService.getUserIdFromStorage()
      .then(() => {

        this.userService.getUserWallet()
          .subscribe(res => {
            this.walletBalance = 0
            res.forEach(element => {
              this.walletBalance += element.balance
            });
            console.log(this.walletBalance, 'wallet');
            this.route.queryParams.subscribe(params => {
              console.log(params);

              if (params && params.id) {
                this.orderId = JSON.parse(params.id);
                this.getOrderDetails()
              }
              this.userService.getUserData()
                .subscribe(res => { this.user = res; console.log(res) })
            });
          })
      })
  }

  getOrderDetails() {
    console.log(this.orderId);

    if (this.orderId)
      this.orderService.getOrderById(this.orderId)
        .subscribe(res => {
          this.orderDetail = res
          console.log(res);
          this.getFranchiseDetail(res.franchiseId)
// this.getMachineById()
          let endtime = moment(res.startTime).add(30, 'minutes').valueOf();
          this.orderDetail['remainingTime'] = moment(endtime).diff(moment(), 'minutes')
          if (this.orderDetail.amount >= this.walletBalance) {
            this.walletDeduction = this.walletBalance 
            this.paidAmount = this.orderDetail.amount - this.walletDeduction
            this.paidBackupAmount = this.orderDetail.amount - this.walletDeduction
            console.log(res)
          } else if (this.orderDetail.amount < this.walletBalance) {
            this.walletDeduction = this.orderDetail.amount
            this.paidAmount = 0
            this.paidBackupAmount = 0

          }

        })
  }

  getFranchiseDetail(fId) {
    this.orderService.getFranchise(fId)
      .subscribe(res => {
        this.frachise = res;
        console.log(res, 'franchise');

      })
  }



  async ApplyCouponCode() {
    
    this.couponAmount.coins = 0
    this.couponAmount.coupon = ''

    this.paidAmount = this.paidBackupAmount
    if (this.applyCouponCode) {
      this.orderService.getInstantCoupon({
        "coupon": this.applyCouponCode,
        "franchiseId": this.orderDetail.franchiseId
      })
        .subscribe(res => {
          console.log(res, "cupons");
          this.couponAmount = res

          if (this.orderDetail.amount >= (this.walletBalance + this.couponAmount.coins)) {
            this.paidAmount = this.orderDetail.amount - this.couponAmount.coins - this.walletBalance
            this.paidBackupAmount = this.paidAmount
            this.walletDeduction = this.walletBalance 
          }
      
          else {
            this.paidAmount = 0
            this.walletDeduction = this.orderDetail.amount - this.couponAmount.coins
          }

          // if ((this.paidAmount - this.couponAmount.coins) > 0)

          //   this.paidAmount = this.paidAmount - this.couponAmount.coins
          // else
          //   this.paidAmount = 0
        }, err => {
          this.couponAmount.coins = 0
          this.couponAmount.coupon = ''
        })
    }
  
  }

  makePayment() {
    console.log('pay');

    if (this.paidAmount == 0) {
      this.successCallback('promocode')
    } else {
      this.pay(this.paidAmount)
    }
  }

  pay(amount) {
    let user = {
      email: this.user.email,
      contact: this.user.mobile,
      name: this.user.name,
      amount: amount
    }


    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: this.currency, // your 3 letter currency code
      key: this.razor_key, // your Key Id from Razorpay dashboard
      amount: user.amount * 100, // Payment amount in smallest denomiation e.g. cents for USD
      name: 'Coin Laundry',
      prefill: {
        email: user.email,
        contact: user.contact,
        name: user.name
      },
      theme: {
        color: '#642E58'
        // color: '#00000'
      },
      modal: {
        ondismiss: function () {
          alert('dismissed')
        }
      }
    };


    RazorpayCheckout.open(options, (val) => this.successCallback(val), (err) => this.cancelCallback(err));


  }



  successCallback(payment_id) {
    let transactionId = 'Promocode'
    // console.log('payment_id: ' + payment_id);
    // alert('payment_id: ' + payment_id);
    // alert('orderId' + this.orderId)
    // alert('paidAmount' + this.paidAmount)
    // alert('walletDeduction' + this.walletDeduction)
    // // alert('coins'+ this.couponAmount.coins)
    // alert('paidAmount' + this.paidAmount)

    let payload = {
      id: this.orderId,
      paymentStatus: 'paid',
      // amount: this.paidAmount,
      walletDeductions: this.walletDeduction,
      promoDeductions: this.couponAmount.coins,
      promoCode: this.couponAmount.coupon,
      transactionId: payment_id,
      transactionAmount: this.paidAmount
    }
    // alert(JSON.stringify(payload))
    this.orderService.updateOrder(payload)
      .subscribe(res => {
        // alert(JSON.stringify(payload))
        // this.toast.toastSuccess('Payment Successful');
        this.showPaymentSucessPopUp()
        this.navctrl.navigateForward('tabs/tab1')
      },
        err => { alert(JSON.stringify(err)) });
  };

  cancelCallback(error) {
    this.toast.toastFail('Payment Failed');
    // alert(error.description + ' (Error ' + error.code + ')');
  };

  async showPaymentSucessPopUp() {
    const popoverSucess = await this.popoverController.create({
      component: PaymentsucesspopupComponent,
      // event: machine,
      translucent: true,
      componentProps: {popoverController: this.popoverController }
    });
    setTimeout(() => {
      popoverSucess.dismiss()
    }, 2000);

    return await popoverSucess.present();
  }
}
