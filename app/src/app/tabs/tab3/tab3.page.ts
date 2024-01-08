import { Component, NgZone } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Platform, NavController, AlertController} from '@ionic/angular';
import { OrderapiService } from 'src/app/common/apilayer/APIs/orderapi.service';
import { NavigationExtras, ActivatedRoute } from '@angular/router';
import { ToastService } from 'src/app/common/service/toast/toast.service';
import { BLE } from '@ionic-native/ble/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { UserapiService } from 'src/app/common/apilayer/APIs/userapi.service';
declare var RazorpayCheckout: any;
import { PopoverController } from '@ionic/angular';
import { PrePaymentPopoverComponent } from 'src/app/common/components/pre-payment-popover/pre-payment-popover.component';
import { PaymentsucesspopupComponent } from 'src/app/common/components/paymentsucesspopup/paymentsucesspopup.component';
import { PublishService } from 'src/app/common/service/publish/publish.service';
// import { PopoverComponent } from '../../component/popover/popover.component';




@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  qrScan: any;
  textFound: any;
  qrActive: boolean;
  devices: any[];
  user: any;
  currencyIcon: string = '₹';
  currency: string = 'INR';
  // // testKey
  // razor_key: string = 'rzp_test_rRvE0JzWWGkqh1';

  //Live Key
  razor_key: string = 'rzp_live_1FMhHw7pwKiV36';


  machineId;
  selectedType: string;
  couponAmount = {
    coins: 0,
    cupon: ''
  };
  walletBalance = 0;
  paidAmount = 0;
  walletDeduction = 0;
  bluetoothTrigger = false;
  pop: PopoverController;
  transactionId: any = 'promocode';
  constructor(private qr: QRScanner, public popoverController: PopoverController, 
    private userService: UserapiService, public alertController: AlertController,
    private vibration: Vibration, private ngZone: NgZone, private ble: BLE,
    private toast: ToastService, private platform: Platform, private navctrl: NavController,
    private orderService: OrderapiService, private route: ActivatedRoute,private events: PublishService) {
    this.platform.backButton.subscribeWithPriority(0, () => {
      // document.getElementsByTagName('ion-content')[0].style.opacity = "1";
      document.getElementsByTagName('body')[0].style.opacity = '1';
    })
    this.userService.getUserData()
      .subscribe(res => { this.user = res; console.log(res) })
    this.route.queryParams
      .subscribe(params => {
        if (params.orderType == 'SO') {
          this.selectedType = "self operated"
          this.scan()

        } else if (params.orderType == 'DO') {
          this.selectedType = 'drop off'
          this.scanDrop()
        }
        else {
          this.showTaskSelection()

        }

        this.qr.prepare()
          .then((status: QRScannerStatus) => {
            if (status.denied)
              this.qr.openSettings()
          })


      })


    this.userService.getUserIdFromStorage()
      .then(() => {

        this.userService.getUserWallet()
          .subscribe(res => {
            console.log(res, 'wallet');
            res.forEach(element => {
              this.walletBalance += element.balance
            });

          })
      })
  }

ngOnInIt(){
  
}

  ionViewWillLeave() {
    this.qr.destroy()
    this.qrScan.unsubscribe()
    document.getElementsByTagName('body')[0].style.opacity = '1';
  }


  async showTaskSelection() {
    const alert = await this.alertController.create({
      header: 'Please select the type of order ',

      buttons: [
        {
          text: 'Self Operated',
          handler: (data) => {
            this.selectedType = "self operated"
            this.scan()
          }

        }, {
          text: 'DropOff',
          handler: (data) => {
            this.selectedType = 'drop off'
            this.scanDrop()
          }
        }
      ]
    });

    await alert.present();
  }

  proceedToManual() {
    console.log(this.machineId);


    this.orderService.getmachineById(this.machineId)
      .subscribe(res => {
        this.textFound = res
        this.machineId = null;
        if (res.operationType == this.selectedType) {
          if (this.selectedType == 'drop off')
            this.manualDrop(res)
          else if (this.selectedType == 'self operated') {
            this.manualSelf(res)
          }
        }
        else
          this.toast.toastFail('The machine is not of type ' + this.selectedType)

      })
  }

  syncTasks(data) {
    // alert(JSON.stringify(data));
    this.paidAmount = data.paidAmount
    this.walletDeduction = data.walletDeduction
    this.couponAmount.coins = data.coins
    this.couponAmount.cupon = data.cupon

    if (data.paidAmount) {
      this.pay()
    }
    else {
      this.successCallback('promocode')
    }
  }

  /**MAnual order creations starts */
  async manualSelf(machine) {
    const popover = await this.popoverController.create({
      component: PrePaymentPopoverComponent,
      event: machine,
      translucent: true,
      componentProps: { data: machine, popoverController: this.popoverController }
    });
    // this.events.getObservable('fromPopoverEvent', (data) => {
    //   this.syncTasks(dataReturned.data);
      
    // });
    popover.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
       this.syncTasks(dataReturned.data);
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
    return await popover.present();
  }

  manualDrop(machine): any {
    this.orderService.getUserIdFromStorage()
      .then(() => {
        this.orderService.createDropOrder({
          operationType: "drop off",
          franchiseId: machine.franchiseId,
          machineId: machine.id,
          weight: 0,
          amount: 0,
          walletDeductions: 0,
          promoDeductions: 0,
          promoCode: 0
        })
          .subscribe(res => {
            console.log(res);

            let navigationExtras: NavigationExtras = {
              queryParams: {
                // queryParams: textFound,
                id: res.id
              }
            };
            if (res.id)
              this.navctrl.navigateForward('tabs/orderdetail', navigationExtras)

            else
              this.navctrl.navigateForward('tabs/tab1')
          })
      })

  }
  /**manual order ends */



  scanDrop() {
    // this.toast.toastFail("Drop Off unavailable at the moment")
    if (this.qrActive) {
      this.qr.hide();
    }

    this.qr.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          this.qr.show()
          this.qrScan = this.qr.scan()
            .subscribe((textFound: any) => {
              let qrData = JSON.parse(textFound)
              console.log('QRCODE MACHINE ADDRESS: ', qrData)
              /**vibrattion upon qrcode scan */
              this.vibration.vibrate(500);
              this.machineId= qrData
           
              this.qr.hide()
              document.getElementsByTagName('body')[0].style.opacity = "1"
            }, (err) => {
              document.getElementsByTagName('body')[0].style.opacity = "1"
            })


        } else if (status.denied) {
          window.alert('status denied')
          this.qr.openSettings()
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => console.log('Error is', e));


  }


  scan() {
    this.devices = [];
    this.ble.scan([], 5).subscribe(
      device => this.onDeviceDiscovered(device),
    );

    if (this.qrActive) {
      this.qr.hide();
    }
    /**Qr Json sample */
    // {"type": "SO", "fId": 1, "mId": 1, "address": "24:6F:28:A0:A9:DA","amount":100}

    this.qr.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          this.qr.show()
          this.qrScan = this.qr.scan()
            .subscribe((textFound: any) => {

              console.log('QRCODE MACHINE ADDRESS: ', JSON.parse(textFound), textFound)
              /**vibrattion upon qrcode scan */
              this.vibration.vibrate(500);
              //**connection after qr Code scan */
              this.machineId = JSON.parse(textFound)

              // this.textFound = JSON.parse(textFound)
              // this.manualSelf(this.textFound)

              // this.connect(textFound)

              this.qr.hide()
              document.getElementsByTagName('body')[0].style.opacity = "1"
            }, (err) => {
              document.getElementsByTagName('body')[0].style.opacity = "1"
            })


        } else if (status.denied) {
          window.alert('status denied')
          this.qr.openSettings()
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => console.log('Error is', e));
  }


  onDeviceDiscovered(device) {
    console.log('Discovered ' + JSON.stringify(device, null, 2));
    this.ngZone.run(() => {
      if (device.name == 'MyESP32')
        this.devices.push(device);
    });

  }

  /**Bluetooth Feature starts to connect the device */

  connect(device) {
    let str = 'coin2020laundry'
    var buf = new ArrayBuffer(str.length); // 2 bytes for each char
    var bufView = new Uint8Array(buf);
    for (var i = 0, strLen = str.length; i < strLen; i++) {
      bufView[i] = str.charCodeAt(i);
    }

    console.log("Self Operated");



    /**Creates an order  */
    this.orderService.getUserIdFromStorage()
      .then((data) => {
        console.log(data, "creating order");

        this.orderService.createOrder({
          operationType: "Self Operated",
          franchiseId: device.franchiseId,
          machineId: device.id,
          paymentStatus: "paid",
          weight: 0,
          amount: this.textFound.charges,
          transactionAmount:this.paidAmount,
          walletDeductions: this.walletDeduction,
          promoDeductions: this.couponAmount.coins,
          promoCode: this.couponAmount.cupon,
          btTrigger: false,
          transactionId: this.transactionId
        })
          .subscribe(res => {
            // this.toast.toastSuccess('Payment Successful');
            this.showPaymentSucessPopUp()
            console.log(res);
            let order = res.order;
            /**Create bluetooth connetion after Creating order */
            this.ble.connect(device.btAddress)
              .subscribe(res => {
                /**Writing into the bluetooth Device */

                /**changed to address->btAddress */


                this.ble.write(device.btAddress, res.characteristics[res.characteristics.length - 1].service,
                  res.characteristics[res.characteristics.length - 1].characteristic, buf)
                  .then(data => {

                    this.toast.toastSuccess('Machine Started');

                    let payload = {
                      id: order.id,
                      btTrigger: true
                    }
                    this.orderService.updateOrder(payload)
                      .subscribe(res => {
                        // this.navctrl.navigateForward('tabs/tab1')
                      })
                   
                    this.ble.disconnect(device)

                  })
              },
                err => {
                  console.log(err);
                  // this.navctrl.navigateForward('tabs/tab1')

                  // this.toast.toastFail('Unable to connect, please contact support for manual turn on.')
                })


                this.navctrl.navigateForward('tabs/tab1')
          })
      })


  }
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

  async pay() {

    let amount = this.paidAmount
    this.qr.hide()
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
    this.transactionId = payment_id
    this.connect(this.textFound)
  };

  cancelCallback(error) {
    this.toast.toastFail('Payment Failed');
    // alert(error.description + ' (Error ' + error.code + ')');
  };
}
