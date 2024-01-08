import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { OrderService } from 'src/app/common/apilayer/APIs/order.service';
import { FranchiseService } from 'src/app/common/apilayer/APIs/franchise.service';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import * as moment from 'moment';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
// declare let pdfMake: any;
import pdfMake from 'node_modules/pdfmake/build/pdfmake';
import pdfFonts from 'node_modules/pdfmake/build/vfs_fonts';
import { CookieService } from 'ngx-cookie-service';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { ToastrService } from 'ngx-toastr';
import { TooltipComponent } from '@angular/material/tooltip';
import { filter } from 'rxjs/operators';

const ELEMENT_DATA: orderDetails[] = []

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})

export class OrdersComponent implements OnInit {
  displayedColumns: string[] = ['select', 'name', 'startTime', 'weight', 'franchiseName', 'washType', 'id', 'amount', 'orderStatus', 'paymentStatus', 'bluetooth', 'transactionId', 'token', 'feedback'];
  dataSource = new MatTableDataSource<orderDetails>(ELEMENT_DATA);
  selection = new SelectionModel<orderDetails>(true, []);

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  allorders: any;
  datePicker: any;
  allFranchises: any;
  selectedFranchise: any;
  tomorrow = new Date(); 
  printPdfData: [];
  userType: string;
  filteredData: any = [];
  todaysDate:any;
  orderData:any;
  filterData:any;
  franchiseId:number = 0;
  franchiseData:any;
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: orderDetails): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  constructor(private orderService: OrderService, private cookie: CookieService,
    private franchiseService: FranchiseService, private toast: ToastrService) {
    this.tomorrow.setDate(this.tomorrow.getDate());
    const userType = this.cookie.get('userType')
    this.userType = userType;
    this.todaysDate = new Date();

  }

  ngOnInit() {
    this.sort.sort(({ id: 'id', start: 'desc'}) as MatSortable);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.getOrders();
    this.getFranchise();
  }

  onChangeDate(event: any) {
    if(this.franchiseId == 0){
      let temp = this.allorders
      if (event.value == "") {
        this.dataSource = new MatTableDataSource<orderDetails>(this.allorders)
        this.filteredData = this.allorders
        this.dataSource.paginator = this.paginator;
      }
      else {
        this.dataSource = new MatTableDataSource<orderDetails>(
          temp.filter(a => moment(event.value).isSame(a.startTime, 'day'))
        )
        this.filteredData = temp.filter(a => moment(event.value).isSame(a.startTime, 'day'))
        this.dataSource.paginator = this.paginator;
      }
    }
    else{
      let temp = this.franchiseData;
      if (event.value == "") {
        this.dataSource = new MatTableDataSource<orderDetails>(this.franchiseData)
        this.filteredData = this.franchiseData
        this.dataSource.paginator = this.paginator;
      }
      else {
        this.dataSource = new MatTableDataSource<orderDetails>(
          temp.filter(a => moment(event.value).isSame(a.startTime, 'day'))
        )
        this.filteredData = temp.filter(a => moment(event.value).isSame(a.startTime, 'day'))
        this.dataSource.paginator = this.paginator;
      }
    }
    this.dataSource.sort = this.sort;
    
  }

  applyFilter(event: Event) {
    var filterValue = (event.target as HTMLInputElement).value;
    if(this.franchiseId == 0){
      if(filterValue == ''){
        this.filteredData = this.filterData
      }
      else{
      if(filterValue == 'trigger'){
        filterValue = "true";
      }
      if(filterValue == 'not trigger'){
        filterValue = "false";
      }
      this.dataSource.filter = filterValue.trim().toLowerCase();
      this.filteredData = this.allorders.filter(a => a.name.trim().toLowerCase().includes(filterValue) || a.mobile.includes(filterValue) || a.bluetooth.trim().toLowerCase().includes(filterValue))
      }
    }
    else{
      if(filterValue == ''){
        this.filteredData = this.franchiseData
      }
      else{
      if(filterValue == 'trigger'){
        filterValue = "true";
      }
      if(filterValue == 'not trigger'){
        filterValue = "false";
      }
      this.dataSource.filter = filterValue.trim().toLowerCase();
      this.filteredData = this.franchiseData.filter(a => a.name.trim().toLowerCase().includes(filterValue) || a.mobile.includes(filterValue) || a.bluetooth.trim().toLowerCase().includes(filterValue))
      }
    }
    this.dataSource = new MatTableDataSource<orderDetails>(this.filteredData);
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  selectFranchise(fId) {
    let temp = this.allorders
    this.franchiseId = fId;
    if (fId == 0) {
      this.dataSource = new MatTableDataSource<orderDetails>(this.filterData);
      this.filteredData = this.allorders;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
    else {
      this.dataSource = new MatTableDataSource<orderDetails>(temp.filter(a => a.franchiseId == fId));
      this.filteredData = temp.filter(a => a.franchiseId == fId);
      this.franchiseData = this.filteredData;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }


  getOrders() {
    this.orderService.getAllOrders()
      .subscribe(res => {
        this.allorders = [];
        const userType = this.cookie.get('userType')
        if (userType == "FranchiseAdmin") {
          res[0].orders.forEach(element => {
            element['name'] = element.user.firstName + " " + element.user.lastName;
            element['mobile'] = element.user.mobile;
            if(element['btTrigger']==true){
              element['bluetooth'] = 'Trigger'
            }
            else{
              element['bluetooth'] = 'Not Trigger'
            }
            this.allorders.push(element)
            this.filteredData = this.allorders;
          });
          this.filterData = this.filteredData.filter(a=>moment(this.todaysDate).isSame(a.startTime, 'day'))
          this.dataSource = new MatTableDataSource<orderDetails>(this.filterData)

        } else {
          // res = res.filter(a=>moment(this.todaysDate).isSame(a.startTime, 'day'))
          res.forEach(element => {
            element['name'] = element.user.firstName + " " + element.user.lastName;
            element['mobile'] = element.user.mobile;
            if(element['btTrigger']==true){
              element['bluetooth'] = 'Trigger'
            }
            else{
              element['bluetooth'] = 'Not Trigger'
            }
            this.allorders.push(element)
          });
        // this.allorders = res;
        this.filterData = this.allorders.filter(a=>moment(this.todaysDate).isSame(a.startTime, 'day'))
        this.dataSource = new MatTableDataSource<orderDetails>(this.filterData)
        }
        this.orderData = this.filteredData
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      })
  }

  getFranchise() {
    this.franchiseService.getAllFranchises()
      .subscribe(res => {
        this.allFranchises = res;
      })
  }

  public exportData() {
    const documentDefinition = this.getDocumentDefinition();
    pdfMake.createPdf(documentDefinition).download();
    this.toast.success('Downloaded', '', {});
  }

  getDocumentDefinition() {
    sessionStorage.setItem('resume', JSON.stringify(this.filteredData))
    
    return {
      content: [
        this.getTableObject(this.filteredData),
        {
          text: '*All Date formats in 24Hrs',
          style: 'header',
          fontSize:13
        },
      ]
    };
  }

  getTableObject(data: pdfDataschema[]) {
    return {
      table: {
        text: 'Orders',
        bold: true,
        fontSize: 9,
        margin: [0, 0, 0, 10],
        alignment: 'center',
        body: [
          [{
            text: 'Order Id',
            style: 'tableHeader'
          },
          {
            text: 'Name',
            style: 'tableHeader'
          },
          {
            text: 'Mobile',
            style: 'tableHeader'
          },
          {
            text: 'Wash Date',
            style: 'tableHeader'
          },
          {
            text: 'Wash Type',
            style: 'tableHeader'
          },
          {
            text: 'Price',
            style: 'tableHeader'
          },
          {
            text: 'pay Status',
            style: 'tableHeader'
          },
          {
            text: 'Order Status',
            style: 'tableHeader'
          },
          {
            text: 'Franchise Name',
            style: 'tableHeader'
          },
         
          ],
          ...data.map(ed => {
            ed.startTime = new Date(ed.startTime).toString().substr(4,21);
            return [ ed.id, ed.name, ed.mobile, ed.startTime, ed.opertationType, ed.amount, ed.paymentStatus, ed.orderStatus, ed.franchise.name.substr(0,12).toLowerCase()];
          })
        ]
      },
        styles: {
          header: {
            fontSize: 18,
            bold: true,
            margin: [0, 20, 0, 10],
            decoration: 'underline'
          },
          name: {
            fontSize: 16,
            bold: true
          },
          jobTitle: {
            fontSize: 14,
            bold: true,
            italics: true
          },
          sign: {
            margin: [0, 50, 0, 10],
            alignment: 'right',
            italics: true
          },
          tableHeader: {
            bold: true,
          }
        }
    };
  }
}

export class pdfDataschema {
  index:number=0;
  name: string;
  mobile: string;
  id: number;
  startTime:string;
  opertationType: string;
  amount: number;
  orderStatus: string;
  paymentStatus: string;
  user: any;
  TransactionId:string;
  token:number;
  franchise:any;
}

export interface orderDetails {
  position: number;
  amount: number;
  endTime: string;
  feedback: string;
  franchiseId: number;
  id: number;
  machineId: number;
  opertationType: string;
  orderStatus: string;
  paymentStatus: string;
  promoCode: string;
  promoDeductions: number;
  rewardAmount: string;
  startTime: string;
  user: { id: number; firstName: string; lastName: string; }
  userId: number;
  walletDeductions: null
  weight: number;
  mobile: number;
}


