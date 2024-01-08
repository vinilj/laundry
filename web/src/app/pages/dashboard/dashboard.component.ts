import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { OrderService } from 'src/app/common/apilayer/APIs/order.service';
import { UserService } from 'src/app/common/apilayer/APIs/user.service';
import * as moment from 'moment';
import { MachinesService } from 'src/app/common/apilayer/APIs/machines.service';
import { BannersService } from 'src/app/common/apilayer/APIs/banners.service';
import { FranchiseService } from 'src/app/common/apilayer/APIs/franchise.service';
import { orderDetails } from '../orders/orders.component';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
const ELEMENT_DATA: orderDetails[] = []
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {
  
  allorders: any[] = [];
  allmachines: any[] = [];

  dataSource = new MatTableDataSource<orderDetails>(ELEMENT_DATA);
  selection = new SelectionModel<orderDetails>(true, []);

  selfOperatedCount = 0;
  dropOffCount = 0;
  totalAmnount = 0;
  dueAmount = 0;
  paidAmount = 0;
  inactiveMachineCount = 0;
  activeMachineCount = 0
  userType: any;
  allFranchises: any;
  filteredData: any = [];
  totalOrders: number;
  dateField:any;
  tomorrow = new Date(); 
  todayDate:any = {};
  constructor(private cookie: CookieService, private bannersService: BannersService, private machineServices: MachinesService, private orderService: OrderService, private userApiService: UserService, private franchiseService: FranchiseService) {
    this.tomorrow.setDate(this.tomorrow.getDate());
    this.userApiService.getCurrentUserData()
      .subscribe(res => {
        this.userType = res.userType
      })
  }

  ngOnInit() {
    this.getOrders()
    this.getMachines()
    this.getBanner()
    this.getFranchise();
    this.todayDate.value = new Date()
    this.onChangeDate(this.todayDate)
  }
  getBanner() {
    this.bannersService.getBanners()
      .subscribe(res => {
      })
  }

  getFranchise() {
    this.franchiseService.getAllFranchises()
      .subscribe(res => {
        this.allFranchises = res;
      })
  }

  getOrders() {
    this.orderService.getAllOrders()
      .subscribe(res => {
        this.allorders = res;
        const userType = this.cookie.get('userType')
        // if (userType == "FranchiseAdmin")
        //   this.allorders = res[0].orders.filter(a => moment().isSame(a.startTime, 'day'))
        // else
        //   this.allorders = res.filter(a => moment().isSame(a.startTime, 'day'))
        if (userType == "superAdmin"){
          let temp = this.allorders
          this.dataSource = new MatTableDataSource<orderDetails>(
            this.filteredData = temp.filter(a => moment(new Date()).isSame(a.startTime, 'day'))
        )
          this.filteredData.forEach(element => {
            this.totalOrders = this.filteredData.length;
            /**Order SO/DO */
            if (element.opertationType == "self operated"){
              this.selfOperatedCount++
            }
            else
              this.dropOffCount++
            /**Order Payment */
            this.totalAmnount += element.amount
            if (element.paymentStatus == "due")
              this.dueAmount += element.amount;
            else{
              this.paidAmount += element.amount;
            }
          });
        }
        else{
          this.allorders = this.allorders[0].orders;
          let temp = this.allorders
          this.dataSource = new MatTableDataSource<orderDetails>(
            this.filteredData = temp.filter(a => moment(new Date()).isSame(a.startTime, 'day'))
        )
          this.filteredData.forEach(element => {
            this.totalOrders = this.filteredData.length;
            /**Order SO/DO */
            if (element.opertationType == "self operated"){
              this.selfOperatedCount++
            }
            else
              this.dropOffCount++
            /**Order Payment */
            this.totalAmnount += element.amount
            if (element.paymentStatus == "due")
              this.dueAmount += element.amount
            else{
              this.paidAmount += element.amount;
            }
          });
        }
      })
  }

  getMachines() {
    this.machineServices.getAllMachines()
      .subscribe(res => {
        this.allmachines = res;
        this.allmachines.forEach(element => {
          if (element.status == "active")
            this.activeMachineCount++
          else
            this.inactiveMachineCount++
        });
      })
  }

  selectFranchise(id){
    this.totalOrders = 0;
    this.totalAmnount = 0;
    this.dueAmount = 0;
    this.paidAmount = 0;
    this.selfOperatedCount = 0;
    this.dropOffCount = 0;
    this.activeMachineCount = 0;
    this.inactiveMachineCount=0;
    this.dateField='';
    this.orderService.getAllFilteredOrders(id)
    .subscribe(res => {
      if(id>0){
      this.allorders = res[0].orders;
      }
      else{
        this.getOrders();
      }
      let temp = this.allorders
          this.dataSource = new MatTableDataSource<orderDetails>(
            this.filteredData = temp.filter(a => moment(new Date()).isSame(a.startTime, 'day'))
        )
      this.totalOrders = this.filteredData.length;
      this.filteredData.forEach(element => {
        /**Order SO/DO */
        if (element.opertationType == "self operated")
          this.selfOperatedCount++
        else
          this.dropOffCount++
        /**Order Payment */
        this.totalAmnount += element.amount

        if (element.paymentStatus == "due"){
          this.dueAmount += element.amount;
        }
        else{
          this.paidAmount += element.amount
        }
      });
    })

    this.machineServices.getAllFilterMachines(id)
      .subscribe(res => {
        this.allmachines = res;
        this.allmachines.forEach(element => {

          /**Machine Active or Inactive */
          if (element.status == "active")
            this.activeMachineCount++
          else
            this.inactiveMachineCount++
        });
      })
  }

  onChangeDate(event: any) {
    let temp = this.allorders
    if (event.value == "") {
      this.dataSource = new MatTableDataSource<orderDetails>(this.allorders)
      this.filteredData = this.allorders
    }
    else {
      this.dataSource = new MatTableDataSource<orderDetails>(
        temp.filter(a => moment(event.value).isSame(a.startTime, 'day'))
      )
      this.filteredData = temp.filter(a => moment(event.value).isSame(a.startTime, 'day'))
    }
    this.totalAmnount = 0;
    this.dueAmount = 0;
    this.paidAmount = 0;
    this.selfOperatedCount = 0;
    this.dropOffCount = 0;
    this.totalOrders = 0;
    this.filteredData.forEach(element => {
      this.totalOrders++
      /**Order SO/DO */
      if (element.opertationType == "self operated")
        this.selfOperatedCount++
      else
        this.dropOffCount++
      /**Order Payment */
      this.totalAmnount += element.amount

      if (element.paymentStatus == "due"){
        this.dueAmount += element.amount;
      }
      else{
        this.paidAmount += element.amount
      }
    });
  }
}
