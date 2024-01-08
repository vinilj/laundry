import { Component, OnInit } from '@angular/core';
import { OrderapiService } from 'src/app/common/apilayer/APIs/orderapi.service';
import { SpinnerService } from '../../common/service/spinner/spinner.service';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.page.html',
  styleUrls: ['./orderhistory.page.scss'],
})
export class OrderhistoryPage implements OnInit {
  allOrders: Array<any> = [];

  constructor(
    private orderService: OrderapiService,
    private spinnerService: SpinnerService) { }

  ngOnInit() {
    // this.getAllOrders()
  }

  ionViewWillEnter(){
    this.spinnerService.spinnerPresent();
    this.getAllOrders();
    this.spinnerService.spinnerDismiss();
  }

  getAllOrders() {
    this.orderService.getUserIdFromStorage()
      .then(() => {
        this.orderService.getAllOrders()
          .subscribe(res => {
            console.log(res)
            this.allOrders = res.reverse()  
          })
      })
  }

}
