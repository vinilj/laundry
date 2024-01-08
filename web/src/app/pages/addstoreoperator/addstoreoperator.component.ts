import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FormGroup, FormControl } from '@angular/forms';
import { FranchiseService } from 'src/app/common/apilayer/APIs/franchise.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addstoreoperator',
  templateUrl: './addstoreoperator.component.html',
  styleUrls: ['./addstoreoperator.component.scss']
})
export class AddstoreoperatorComponent implements OnInit {
  displayedColumns: string[] = ['select', 'name', 'email', 'phone', 'isActive'];
  dataSource;
  storeOperator = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    // password: new FormControl('password'),
    mobile: new FormControl(''),
    franchiseId: new FormControl(0),
  });

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  allStoreOperator: any;

  constructor(private franchiseService: FranchiseService,  private toast: ToastrService) { }

  ngOnInit() {

    this.getAllStoreOperator()
  }
  getAllStoreOperator() {
    this.franchiseService.getAllStoreOperators()
      .subscribe(res => {
        this.allStoreOperator = []
        res.forEach(element => {
          element['name'] = element.firstName + ' ' + element.lastName
          element['phone'] = element.phone
          this.allStoreOperator.push(element)

        });
        this.dataSource = new MatTableDataSource(this.allStoreOperator);
        this.dataSource.sort = this.sort;
      })
  }
  addStoreOperator() {
    this.storeOperator.value.mobile = '' + this.storeOperator.value.mobile
    this.franchiseService.addOperator(this.storeOperator.value)
      .subscribe(res => {
        this.storeOperator.reset()
        this.getAllStoreOperator()
        this.toast.success('Added Store Operator Successfully!', '', {});
      })

  }
}

export interface table {
  select: boolean;
  name: string;
  email: string;
  phone: string;
  isActive: string;
}
