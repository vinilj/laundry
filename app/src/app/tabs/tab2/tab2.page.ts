import { Component } from '@angular/core';
import { OrderapiService } from '../../common/apilayer/APIs/orderapi.service';
import { UserapiService } from '../../common/apilayer/APIs/userapi.service';
import { AlertController } from '@ionic/angular';
import { ToastService } from 'src/app/common/service/toast/toast.service';
import { SpinnerService } from '../../common/service/spinner/spinner.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  allOrders: any[] = [];
  totalWalletBalance: number;

  constructor(
    private orderService: OrderapiService,
    private toast: ToastService,
    private alertController: AlertController,
    private userService: UserapiService,
    private spinnerService: SpinnerService) {
    // this.getAllOrders();
    // this.addCoupons()
  }

  ionViewWillEnter(){
    this.getAllOrders();
  }

  async addCoupons() {
    const alert = await this.alertController.create({
      header: 'Please enter  recharge coupon code',
      inputs: [
        {
          name: 'couponCode',
          type: 'text',
          placeholder: 'Apply Coupon Code'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',

        }, {
          text: 'Add Balance',
          handler: (data) => {
            console.log(data);
            this.userService.addRechargeCoupon(data)
              .subscribe(res => {
                this.toast.toastSuccess('Coupon Applied !!')
                this.getAllOrders()
              },
                err => {
                  this.toast.toastFail(err.message)
                })
          }
        }
      ]
    });

    await alert.present();
  }

  getAllOrders() {
    this.spinnerService.spinnerPresent();
    this.orderService.getUserIdFromStorage()
      .then(() => {
        this.totalWalletBalance = 0;

        this.orderService.getAllOrders()
          .subscribe(res => {
            console.log(res)
            this.allOrders = res.reverse()
            res.forEach(element => {
              this.totalWalletBalance += element.rewardAmount
            });
          })

      })
    this.spinnerService.spinnerDismiss();
  }

  getUserWalletData() {
    this.spinnerService.spinnerPresent();
    this.userService.getUserIdFromStorage()
      .then(() => {
        this.userService.getUserWallet()
          .subscribe(res => {
            console.log(res, 'wallet');
          

          })
      })

    this.spinnerService.spinnerDismiss();
  }
}
