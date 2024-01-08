import { Component, NgZone } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { ToastController, Platform, NavController } from '@ionic/angular';
import { UserapiService } from 'src/app/common/apilayer/APIs/userapi.service';
import { OrderapiService } from 'src/app/common/apilayer/APIs/orderapi.service';
import { LocalStroageService } from 'src/app/common/service/localstorage/local-stroage.service';
import { NavigationExtras } from '@angular/router';
import { PaymentService } from 'src/app/common/service/payment/payment.service';
import { ToastService } from 'src/app/common/service/toast/toast.service';
import { BluetoothLE } from '@ionic-native/bluetooth-le/ngx';
import { BLE } from '@ionic-native/ble/ngx';
import * as moment from 'moment';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  user: any;
  allActiveOrders: Array<any> = [];
  dropOrders: Array<any> = [];
  totalWalletBalance: any = 0;
  feedback: any = 0;
  comments:'';
  commentsDrop:'';
  feedbackDrop: any = 0;
  allBanners: any[] = [];
  devices: any[];


  constructor(private platform: Platform, public bluetoothle: BluetoothLE,private toast: ToastService, private localStorage: LocalStroageService,
    private userService: UserapiService,private ngZone: NgZone, private ble: BLE, private razorPay: PaymentService, private navctrl: NavController, private orderService: OrderapiService) {
    userService.getUserData()
      .subscribe(res => {
        this.user = res
      })


    // this.getAllOrders()
    // this.getUserWalletData()
  }

  ionViewWillEnter() {
    this.getAllOrders()
    this.getUserWalletData()
    this.getAllBAnners()
  }

  getAllOrders() {
    this.orderService.getUserIdFromStorage()
      .then(() => {
        this.orderService.getAllOrders()
          .subscribe(res => {

            res = res.reverse()

            res.forEach(element => {
              element['backupFeedback'] = element.feedback
            });
           
            this.dropOrders = res.filter(a => a.opertationType == 'drop off')
            this.allActiveOrders = res.filter(a => a.opertationType != 'drop off')
            console.log(this.allActiveOrders, 'SO');

            for (let index = 0; index < this.allActiveOrders.length; index++) {
              if( this.allActiveOrders[index].orderStatus != "completed" &&!this.allActiveOrders[index].btTrigger && moment().isBefore(moment(this.allActiveOrders[index].startTime).add(1, 'm'))){
                
                this.allActiveOrders[index]['showRetry']= true
                this.getMachineById(this.allActiveOrders[index])
              }              
            }
           
          })
        // this.orderService.getDropOrder()
        //   .subscribe(res => {
        //     this.dropOrders = res
        //   })
      })
  }

  getAllBAnners() {
    this.allBanners = []
    this.userService.getBanners()
      .subscribe(res => {
        res.forEach(banner => {
          banner = 'http://api.coinlaundryindia.com/files/mobile.jpg'
          this.allBanners.push(banner)
        });
        console.log(res);

      })
  }
  goToTaskCreation() {

    this.platform.ready().then((readySource) => {

      console.log('Platform ready from', readySource);
   
      this.bluetoothle.initialize()
      .subscribe(bluetooth => {
        console.log(bluetooth.status)
        if(bluetooth.status == "disabled"){
          this.toast.toastFail('Please turn on your bluetooth')
        }
        else{
       let navigationExtras: NavigationExtras = {
        queryParams: {
          orderType: 'SO'
        }};
         this.navctrl.navigateForward('tabs/tab3', navigationExtras)
        }
      })
     });
  }

  goToTaskCreationDrop(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        orderType: 'DO'
      }};
       this.navctrl.navigateForward('tabs/tab3', navigationExtras)
      }
  

  getUserWalletData() {
    this.userService.getUserIdFromStorage()
      .then(() => {
        this.totalWalletBalance = 0;
        this.userService.getUserWallet()
          .subscribe(res => {
            console.log(res, 'wallet');
            this.totalWalletBalance += res[0].balance
          })
      })
  }

  goToOrder(id) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: id
      }
    }; this.navctrl.navigateForward('tabs/orderdetail', navigationExtras)
  }

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true,
    pager: false,
    loop: true
  }


  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      this.getAllOrders();
      this.getUserWalletData()
      event.target.complete();
    }, 1000);
  }

  addFeedback(star, id) {
    this.feedback = star + ''
    this.allActiveOrders[id].feedback = this.feedback
  }

  addFeedbackDrop(star, index) {
    this.feedbackDrop = star + ''
    this.dropOrders[index].feedback = this.feedbackDrop
  }

  submitDrop(index) {
    let payload = {
      id: this.dropOrders[index].id,
      feedback: this.dropOrders[index].feedback,
      comments:this.commentsDrop
    }
    this.orderService.updateOrder(payload)
      .subscribe(res => {
        this.feedbackDrop = ''
        this.commentsDrop=''
        this.getAllOrders()
      })
  }



  submit(index) {
    let payload = {
      id: this.allActiveOrders[index].id,
      feedback: this.allActiveOrders[index].feedback,
      comments: this.comments
    }
    this.orderService.updateOrder(payload)
      .subscribe(res => {
        this.feedback = ''
        this.comments=''
        this.getAllOrders()
      })
  }



  getMachineById(order){
    this.orderService.getmachineById(order.machineId)
    .subscribe(res=> {
      let machineData=res
     
      this.devices = [];
      this.ble.scan([], 5).subscribe(
        device => {this.onDeviceDiscovered(device,machineData,order.id)},
        err=>{console.log(err);
        }
      );
    })
  
  }
  
  
  reConnect(machineData,orderId){
    console.log('asda',machineData,orderId);
    
    let str = 'coin2020laundry'
      var buf = new ArrayBuffer(str.length); // 2 bytes for each char
      var bufView = new Uint8Array(buf);
      for (var i = 0, strLen = str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
      }
  
      this.ble.connect(machineData.btAddress)
      .subscribe(res => {
        /**Writing into the bluetooth Device */
  
        /**changed to address->btAddress */
  
  
        this.ble.write(machineData.btAddress, res.characteristics[res.characteristics.length - 1].service,
          res.characteristics[res.characteristics.length - 1].characteristic, buf)
          .then(data => {
  
            this.toast.toastSuccess('Machine Started');
  
            let payload = {
              id: orderId,
              btTrigger: true,
              startTime: moment()
            }
            this.orderService.updateOrder(payload)
              .subscribe(res => console.log(res))
            console.log(data)
            let navigationExtras: NavigationExtras = {
              queryParams: { id: res.id }
            };
            if (navigationExtras.queryParams.id)
              this.navctrl.navigateForward('tabs/tab1')
            // this.navctrl.navigateForward('tabs/orderdetail', navigationExtras)
  
  
          })
      },
        err => {
          this.toast.toastFail('Unable to connect, please contact support for a refund.')
          console.log('Unable to connect', err)
        })
  
  
  }
  
  
  onDeviceDiscovered(device, machineData, orderId) {
    console.log('Discovered ' + JSON.stringify(device, null, 2));
    this.ngZone.run(() => {
      if (device.name == 'MyESP32')
        this.devices.push(device);
  
    });
    this.reConnect(machineData,orderId)
  }



  
}
