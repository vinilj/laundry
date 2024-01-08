import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CouponsService } from 'src/app/common/apilayer/APIs/coupons.service';
import { SelectionModel } from '@angular/cdk/collections';
import * as moment from 'moment';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Location } from '@angular/common';
// import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
// import { FileSelectDirective } from 'ng2-file-upload';
import * as $ from "jquery";
import { FranchiseService } from 'src/app/common/apilayer/APIs/franchise.service';
const URL = 'http://localhost:3000/api/upload';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.scss']
})


export class RewardsComponent implements OnInit {
  displayedColumns: string[] = ['select', 'fromDate', 'toDate', 'code','franchiseId', 'value', 'status','action'];
  private URL: string = 'http://localhost:3000/api/upload';
  RecharegedisplayedColumns: string[] = ['couponCode', 'coins', 'userId', 'mobile', 'usedDate', 'status'];
  rechargeCouponData:any;
  rewardDisplayedColumns: string[] = ['name', 'email', 'address', 'mobile', 'discount'];
  selection = new SelectionModel<Coupon>(true, []);
  allCoupons: any;
  rewardDataSource: any;
  excelResp:any;
  couponAdd = new FormGroup({
    coupon: new FormControl(''),
    coins: new FormControl(Number),
    fromDate: new FormControl(''),
    toDate: new FormControl(''),
    franchiseId: new FormControl(''),
  });
  recharge = new FormGroup({
    file: new FormControl(File),
  });
  rewards = new FormGroup({
    discount: new FormControl(Number),
    franchiseId: new FormControl(Number),
  });
  allRechargeCoupons: any;
  allfranchiseCoupon: any;
  resp: any;
  allFranchises: any;
  dataSource:any;
  tomorrow = new Date(); 
  @ViewChild(MatPaginator,{ static: true }) paginator: MatPaginator;
  @ViewChild('rechargepaginator', { static: true }) rechargepaginator: MatPaginator;
  @ViewChild('rewardpaginator', { static: true }) rewardpaginator: MatPaginator;
  
  constructor(private couponService: CouponsService, private franchiseService: FranchiseService, private toast: ToastrService) { 
    this.tomorrow.setDate(this.tomorrow.getDate());
  }

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatSort, { static: true }) rechargesort: MatSort;
  @ViewChild(MatSort, { static: true }) rewardsort: MatSort;

  ngOnInit() {
    this.getAllCoupons();
    this.getAllRechargeCoupons();
    this.getAllfranchiseRewards();
    this.getFranchise()
    this.loadinputFunctions();
    $(".custom-file-input").on("change", function() {
      var fileName = $(this).val().split("\\").pop();
      $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    });
  }

  updateList() {
    this.getAllCoupons();
    this.getAllRechargeCoupons();
    this.getAllfranchiseRewards();
    this.getFranchise()
    this.loadinputFunctions();
    this.loadinputFunctions();
  }

  addCoupon() {
    if(!this.couponAdd.valid){
      this.toast.error('Enter Valid Data', '', {});
    }
    this.couponAdd.value.franchiseId=this.couponAdd.value.franchiseId*1;
    this.couponAdd.value.status = true;
    this.couponService.addCoupon(this.couponAdd.value)
      .subscribe(res => {
        this.couponAdd.reset();
        this.toast.success('Coupon Added', '', {});
        this.getAllCoupons();
      })
  }

  loadinputFunctions() {
    $(".custom-file-input").on("change", function () {
      var fileName = $(this).val().split("\\").pop();
      $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    });
  }


  uploadExcel() {
    let formElem = document.getElementById('recharge') as HTMLFormElement;
    this.couponService.uploadExcel(new FormData(formElem))
      .subscribe(res => {
        this.excelResp = res;
        this.recharge.reset()
        this.toast.success('Excel Uploaded', '', {});
        this.getAllRechargeCoupons();
      })
  };

  getAllCoupons() {
    this.couponService.getAllCoupons()
      .subscribe(res => {
        this.allCoupons = res
        this.dataSource = new MatTableDataSource(res)
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      })
  }

  getAllRechargeCoupons() {
    this.couponService.getRechargeAllCoupons()
      .subscribe(res => {
        this.allRechargeCoupons = res
        this.rechargeCouponData = new MatTableDataSource(res)
        this.rechargeCouponData.sort = this.rechargesort;
        this.rechargeCouponData.paginator = this.rechargepaginator;
      })
  }

  updateRewardPercetage() {
    this.rewards.value.franchiseId = this.rewards.value.franchiseId * 1;
    this.couponService.updateRewardPercentage(this.rewards.value)
      .subscribe(res => {
        this.rewards.reset()
        this.toast.success('updated', '', {});
        this.getAllfranchiseRewards()
      })
  }

  getAllfranchiseRewards() {
    this.couponService.getfranchises()
      .subscribe(res => {
        this.allfranchiseCoupon = res
        this.rewardDataSource = new MatTableDataSource(res)
        this.rewardDataSource.sort = this.rewardsort;
        this.rewardDataSource.paginator = this.rewardpaginator;
      })
  }

  deletePromocode(id){
    this.couponService.deletePromo(id)
      .subscribe(res => {
        this.toast.error('Deleted', '', {});
        this.getAllCoupons()
      })
  }

  applyFilter(event: Event) {
    let filterValue = (event.target as HTMLInputElement).value;
    this.rechargeCouponData.filter = filterValue.trim().toLowerCase();
    if (this.rechargeCouponData.paginator) {
      this.rechargeCouponData.paginator.firstPage();
    }
  }

  checkboxLabel(row?: Coupon): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  onChangeDate(event: any) {
    let temp = this.allCoupons
    if (event.value == "")
      this.dataSource = new MatTableDataSource<Coupon>(this.allCoupons)
    else
      this.dataSource = new MatTableDataSource<Coupon>(
        // temp.filter(a => moment(event.value).isSame(a.fromDate, 'day'))
        temp.filter(a => moment(event.value).isBetween(a.fromDate, a.toDate))
      )
  }

  getFranchise() {
    this.franchiseService.getAllFranchises()
      .subscribe(res => {
        this.allFranchises = res;
      })
  }
  selectFranchise(fId) {
    this.couponAdd.value.franchiseId = fId;

  }

}

export interface Coupon {
  position: number;
  select: boolean;
  coins: number;
  coupon: string;
  franchiseId: number;
  fromDate: string;
  id: number;
  toDate: string;
}


export interface RechargeDetails {
  couponCode: string;
  coins: number;
  userId: number;
  usedDate: Date;
  status: boolean;
}
