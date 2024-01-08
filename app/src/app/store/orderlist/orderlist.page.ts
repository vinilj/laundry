import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { OrderapiService } from 'src/app/common/apilayer/APIs/orderapi.service';
import { NavigationExtras } from '@angular/router';
import { ToastService } from '../../common/service/toast/toast.service';
import { UserapiService } from 'src/app/common/apilayer/APIs/userapi.service';
import { LocalStroageService } from 'src/app/common/service/localstorage/local-stroage.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.page.html',
  styleUrls: ['./orderlist.page.scss'],
})
export class OrderlistPage implements OnInit {
  weight: number;
  price: number;
  dropOrders: any[] = [];
  selfOperatedCount: number = 0;
  user: any;
  searchTerm: any;
  backupOrders: any;

  constructor(private navctrl: NavController, private localStorage: LocalStroageService, private toast: ToastService, private userService: UserapiService, private orderService: OrderapiService) {


  }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.userService.getUserData()
      .subscribe(res => {
        this.userService.getUserDataById(res.id)
          .subscribe(res => {
            this.user = res;
            // this.storageService.setStorageKey('user', res)
            //   .then(() => {
            //     console.log(res);
            this.getAllOrders(res.franchiseId)
            // })
          })
      })
  }
  doRefresh(event) {
    this.getAllOrders(this.user.franchiseId)
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

  getAllOrders(franchiseId) {
    this.orderService.getDropOrder(franchiseId)
      .subscribe(res => {
        this.backupOrders = res[0]
        // res[0].orders = res[0].orders.reverse()

        console.log(res);

        this.dropOrders = res[0].orders.filter(a => a.opertationType == 'drop off')
        let so = res[0].orders.filter(a => a.opertationType != 'drop off' && a.orderStatus != 'completed')
        this.selfOperatedCount = so.length

        this.dropOrders = this.dropOrders.filter(a => a.orderStatus != 'delivered')
        this.backupOrders.orders = this.dropOrders.filter(a => a.orderStatus != 'delivered')
      })
  }

  goDetail(id) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: id
      }
    };
    this.navctrl.navigateForward('storeorderdetail', navigationExtras)
  }

  updateOrder(order) {
    let payload = {
      id: order.id,
      weight: order.weight,
      amount: order.amount,
      token: order.token,
      orderStatus: 'order received'
    }
    if (order.weight && order.amount && order.token) {
      console.log(payload);
      this.orderService.updateOrder(payload)
        .subscribe(res => {
          console.log(res)
          this.toast.toastSuccess('Order updated')
        })
    } else {
      this.toast.toastFail('Please fill the details')
    }


  }
  searchUser(event) {
    this.dropOrders = this.backupOrders.orders
    console.log(event.target.value, this.searchTerm);

    this.dropOrders = this.dropOrders.filter(
      a => a.user.firstName.trim().toLowerCase().includes(this.searchTerm) || a.user.mobile.includes(this.searchTerm)
    );
  }

  logout() {
    this.userService.userLogout()
      .subscribe(res => {
        this.localStorage.clearStorage()
          .then(() => this.navctrl.navigateForward('login'))
      })
  }

}
