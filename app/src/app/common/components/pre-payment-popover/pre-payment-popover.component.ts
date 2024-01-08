import { Component, OnInit } from '@angular/core';
import { UserapiService } from '../../apilayer/APIs/userapi.service';
import { OrderapiService } from '../../apilayer/APIs/orderapi.service';
import { NavParams, NavController, PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-pre-payment-popover',
  templateUrl: './pre-payment-popover.component.html',
  styleUrls: ['./pre-payment-popover.component.scss'],
})
export class PrePaymentPopoverComponent implements OnInit {
  walletBalance: number = 0;
  walletDeduction: any = 0;
  couponAmount: any = {
    coins: 0,
    coupon: ''
  };
  applyCouponCode: any = '';
  paidAmount: any;
  paidBackupAmount: any;
  machineData: any;
  pop: PopoverController;



  constructor(private userService: UserapiService, private orderService: OrderapiService,
    private navctrl: NavController, private navParams: NavParams) {
    this.machineData = navParams.get('data');
    this.pop = navParams.get('popoverController');
    console.log('popUp', this.machineData);

  }

  ngOnInit() {
    console.log('prepayment');
    
    this.userService.getUserIdFromStorage()
      .then(() => {

        this.userService.getUserWallet()
          .subscribe(res => {
            this.walletBalance = 0
            res.forEach(element => {
              this.walletBalance += element.balance
            });
            this.calculatePrice()
          })
      })
  }

  calculatePrice() {
    if (this.machineData.charges >= (this.walletBalance + this.couponAmount.coins)) {
      this.paidAmount = this.machineData.charges - this.couponAmount.coins - this.walletBalance
      this.paidBackupAmount = this.paidAmount
      this.walletDeduction = this.walletBalance  
    }

    else {
      this.paidAmount = 0
      this.walletDeduction = this.machineData.charges - this.couponAmount.coins
    }
  }


  async ApplyCouponCode() {

    this.couponAmount.coins = 0
    this.couponAmount.coupon = 0

    this.paidAmount = this.paidBackupAmount
    if (this.applyCouponCode) {
      this.orderService.getInstantCoupon({
        "coupon": this.applyCouponCode,
        "franchiseId": this.machineData.franchiseId
      })
        .subscribe(res => {
          console.log(res, "cupons");
          this.couponAmount = res
          this.calculatePrice()

          // if ((this.paidAmount - this.couponAmount.coins) > 0)

          //   this.paidAmount = this.paidAmount - this.couponAmount.coins
          // else
          //   this.paidAmount = 0

        })
    }

  }


  makePayment() {
    let payload = {
      paidAmount: this.paidAmount,
      coins: this.couponAmount.coins,
      cupon: this.couponAmount.coupon,
      walletDeduction: this.walletDeduction
    }
    //  this.events.publish('fromPopoverEvent', { paymentData: payload });
    this.pop.dismiss(payload)
  }

}
