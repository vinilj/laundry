import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {GstService} from '../../common/apilayer/APIs/gst.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  gstValue:number
  

  updateGST = new FormGroup({
    gstValue: new FormControl('')
  });

  constructor(private gstService: GstService, private toast: ToastrService) {
    
   }

  ngOnInit() {
  }

  getGSTValue() {
    this.gstValue = 10
    this.gstService.GetGst()
      .subscribe(res => {
        // this.gstValue = res
      })
  }

  updateGSTValue() {
    this.updateGST.value.gstValue = this.updateGST.value.gstValue * 1;
    this.gstService.patchGSTValue(this.updateGST.value)
      .subscribe(res => {
        this.updateGST.reset()
        this.toast.success('updated', '', {});
      })
  }


}
