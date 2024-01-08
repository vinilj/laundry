import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MachinesService } from 'src/app/common/apilayer/APIs/machines.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FranchiseService } from 'src/app/common/apilayer/APIs/franchise.service';
import { CookieService } from 'ngx-cookie-service';
import pdfMake from 'node_modules/pdfmake/build/pdfmake';
import pdfFonts from 'node_modules/pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { ToastrService } from 'ngx-toastr';

const ELEMENT_DATA: machineDetails[] = []


@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.scss']
})
export class MachinesComponent implements OnInit {
  machineType: string = null;
  operationType: string = null;
  addmachine: FormGroup;
  allFranchises: any;
  selectedFranchise;
  machineResp: any;

  machine = new FormGroup({
    operationType: new FormControl(''),
    charges: new FormControl(Number),
    btAddress: new FormControl(''),
    machineType: new FormControl(''),
    modelNumber: new FormControl(''),
    status: new FormControl('active'),
    franchiseId: new FormControl(Number),
  });

  updateStatus: any = {};
  deviceOperation: any;
  filteredData: any = [];

  displayedColumns: string[] = ['select', 'franchise', 'btAddress', 'id', 'machineType','operationType', 'price', 'machineStatus', 'action'];
  dataSource = new MatTableDataSource<machineDetails>(ELEMENT_DATA);


  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  machines: any;
  srch: any[];
  allmachines: any;
  userType: any;
  franchise: any;
  // selectedFranchise=1;

  constructor(private MachineServices: MachinesService, private franchiseService: FranchiseService, private cookie: CookieService, private toast: ToastrService) {
    const userType = this.cookie.get('userType')
    this.userType = userType;
  }

  ngOnInit() {
    this.getMachines()
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }

  getMachines() {
    this.MachineServices.getAllMachines()
      .subscribe(res => {
        this.allmachines = res;
        this.dataSource = new MatTableDataSource(res)
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.filteredData = this.allmachines;
      })
    this.getFranchise();

  }

  getFranchise() {
    this.franchiseService.getAllFranchises()
      .subscribe(res => {
        this.allFranchises = res;
        if (this.userType == "FranchiseAdmin") {
          const franchiseId = this.cookie.get('franchiseId')
          let temp = res.filter(a => a.id == franchiseId)
          this.franchise = temp[0]
          res.filter(a => a.id == franchiseId);
        }
      })
  }


  addmachines() {
    this.machine.value.status = 'active';
    if(this.machine.value.operationType == "drop off"){
      this.machine.value.btAddress="-";
      this.machine.value.charges=0;
      if(this.machine.value.machineType=='' || this.machine.value.modelNumber=='' || this.machine.value.franchiseId==''){
        this.toast.error('Fill Valid Data!', '', {});
      }
    }
    else{
      if(!this.machine.valid){
        this.toast.error('Fill Valid Data!', '', {});
      }
    }
    this.machine.value.franchiseId = this.machine.value.franchiseId * 1;
    this.MachineServices.addMachine(this.machine.value)
      .subscribe(res => {
        this.machineResp = res;
        this.toast.success('Machine Added Successfully!', '', {});
        this.machine.reset();
        this.getMachines()
      })
  }

  updateMachineStatus(status, id) {
    if (status == "active") {
      this.updateStatus.status = "inactive"
    }
    if (status == "inactive") {
      this.updateStatus.status = "active";
    }
    this.updateStatus.id = id;
    this.MachineServices.updateMachineStatus(this.updateStatus)
      .subscribe(res => {
        this.machine.reset()
        this.toast.success('status Updated!', '', {});
        this.getMachines()
      })
  }

  deleteMachine(id){
    this.MachineServices.deleteMachine(id)
      .subscribe(res => {
        this.getMachines()
        this.toast.error('Deleted!', '', {});
      })

  }


  selectFranchise(fId) {
    let temp = this.allmachines
    if (fId == 0) {
      this.dataSource = new MatTableDataSource<machineDetails>(this.allmachines)
    }
    else { this.dataSource = new MatTableDataSource<machineDetails>(temp.filter(a => a.franchiseId == fId)) }
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  updateList() {
    this.getMachines();
    this.selectFranchise(0);
  }

  public exportData() {
    const documentDefinition = this.getDocumentDefinition();
    pdfMake.createPdf(documentDefinition).download();
    this.toast.success('Download Successfully!', '', {});
  }

  getDocumentDefinition() {
    sessionStorage.setItem('machines', JSON.stringify(this.filteredData))
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
        text: 'Machines',
        bold: true,
        fontSize: 20,
        body: [
          [{
            text: 'id',
            style: 'tableHeader'
          },
          {
            text: 'Franchise Name',
            style: 'tableHeader'
          },
          {
            text: 'Machine Type',
            style: 'tableHeader'
          },
          {
            text: 'Operation Type',
            style: 'tableHeader'
          },
          {
            text: 'Model Number',
            style: 'tableHeader'
          },
          {
            text: 'Amount',
            style: 'tableHeader'
          },
          {
            text: 'Bluetooth Address',
            style: 'tableHeader'
          },
          {
            text: 'Machine Status',
            style: 'tableHeader'
          }
          ],
          ...data.map(ed => {
            return [ed.id, ed.franchise.name, ed.machineType, ed.operationType, ed.modelNumber, ed.charges, ed.btAddress, ed.status];
          })
        ]
      }
    };
  }

}

export class pdfDataschema {
  id: number;
  operationType: string;
  charges: number;
  btAddress: string;
  status: string;
  machineType: string;
  modelNumber:string;
  franchise: any;
}

export interface machineDetails {
  select: boolean;
  store: string;
  phone: string;
  machineModel: string;
  id: string;
  machineType: string;
  price: string;
  machineStatus: string;
}



// const ELEMENT_DATA: table[]= MachinesComponent.machines;
