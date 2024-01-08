import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FormGroup, FormControl } from '@angular/forms';
import { FranchiseService } from 'src/app/common/apilayer/APIs/franchise.service';
import pdfMake from 'node_modules/pdfmake/build/pdfmake';
import pdfFonts from 'node_modules/pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { CookieService } from 'ngx-cookie-service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MatPaginator } from '@angular/material/paginator';


export interface DialogData {
  name: string;
  mobile: string;
  address: string;
}

@Component({
  selector: 'app-addfranchise',
  templateUrl: './addfranchise.component.html',
  styleUrls: ['./addfranchise.component.scss']
})



export class AddfranchiseComponent implements OnInit {
  displayedColumns: string[] = ['select', 'name', 'email', 'phone', 'isActive', 'action'];
  dataSource;
  franchise = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('password'),
    mobile: new FormControl(''),
    address: new FormControl(''),
    // lastName: new FormControl(''),
    // franchiseId: new FormControl(0),
  });
  name:string;
  mobile:string;
  address:string;
  
  @ViewChild(MatPaginator,{ static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  allFranchise: any[] = [];
  franchiseData: any;
  filteredData: any = [];

  constructor(private franchiseService: FranchiseService,  public dialog: MatDialog, private toast: ToastrService) { }

  ngOnInit() {
    this.getAllFranchise()
  }

  getAllFranchise() {
    this.franchiseService.getAllFranchises()
      .subscribe(res => {
        this.allFranchise = res
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.filteredData = this.allFranchise;
      })
  }

  addFranchise() {
    if(this.franchise.value.name=="" || this.franchise.value.email=="" || this.franchise.value.address=="" || this.franchise.value.mobile==""){
      this.toast.error('Fill all fields!', '', {});
    }
    else{
    let franchiseCreateData:any = {}
    franchiseCreateData.name=this.franchise.value.name;
    franchiseCreateData.email = this.franchise.value.email;
    franchiseCreateData.address = this.franchise.value.address;
    franchiseCreateData.mobile = this.franchise.value.mobile.toString();
    franchiseCreateData.discount = 0;
    this.franchiseService.addFranchise(franchiseCreateData)
    .subscribe(res => {
      this.toast.success('Added Successfully!', '', {});
      this.getAllFranchise()
    })
    this.franchise.reset()
  }
  }

  public exportData() {
    const documentDefinition = this.getDocumentDefinition();
    pdfMake.createPdf(documentDefinition).download();
    this.toast.success('Downloaded Successfully!', '', {});
  }

  getDocumentDefinition() {
    // sessionStorage.setItem('franchise', JSON.stringify(this.filteredData))
    return {
      content: [
        this.getTableObject(this.filteredData),
        {
          text: 'Other Details',
          style: 'header'
        },
      ]
    };
  }


  getTableObject(data: pdfDataschema[]) {
    return {
      table: {
        text: 'Franchise',
        bold: true,
        fontSize: 20,
        body: [
          [{
            text: 'Franchise Name',
            style: 'tableHeader'
          },
          {
            text: 'Mobile',
            style: 'tableHeader'
          },
          {
            text: 'Email',
            style: 'tableHeader'
          },
          {
            text: 'Address',
            style: 'tableHeader'
          }
          ],
          ...data.map(ed => {
            return [ed.name, ed.mobile, ed.email, ed.address];
          })
        ]
      }
    };
  }

  editFranchise(id): void {
    this.franchiseService.franchiseById(id)
    .subscribe(res => {
    const dialogRef = this.dialog.open(editfranchise, {
      width: '400px',
      height: "400px",
      data: {name: res.name, mobile:res.mobile, address:res.address}
    });
    dialogRef.afterClosed().subscribe(result => {
      result.id = res.id;
      if(result){
      this.franchiseService.updateFranchise(result)
      .subscribe(res => {
        this.toast.success('Updated Successfully!', '', {});
        this.getAllFranchise();
      })
    }
    });
  })
  }

}

export class pdfDataschema {
  name: number;
  mobile: string;
  email: number;
  address: string;
}

export interface table {
  select: boolean;
  name: string;
  email: string;
  mobile: string;
  isActive: string;
}

@Component({
  selector: 'editfranchise',
  templateUrl: './editfranchise.html'
})
export class editfranchise {
  constructor(
    public dialogRef: MatDialogRef<editfranchise>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
