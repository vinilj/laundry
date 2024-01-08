import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BannersService } from 'src/app/common/apilayer/APIs/banners.service';
import * as $ from "jquery";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss']
})

export class BannersComponent implements OnInit {

  mobileImage = new FormGroup({
    mobilebanner: new FormControl(File),
  });
  dashboardImage = new FormGroup({
    mobilebanner: new FormControl(File),
  });
  
  mobiresp: any;
  dashResp:any;
  constructor(private BannersService: BannersService, private toast: ToastrService) { }

  ngOnInit() {
    $(".custom-file-input").on("change", function() {
      var fileName = $(this).val().split("\\").pop();
      $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    });
  }

  uploadMobileBanner() {
    let formElem = document.getElementById('mobileImage') as HTMLFormElement;
    this.BannersService.uploadMobileBanner(new FormData(formElem))
      .subscribe(res => {
        this.mobiresp = res;
        this.toast.success('Uploaded Successfully!', '', {});
        this.mobileImage.reset()
      })
    };

    uploadDashboardBanner() {
      let formElem = document.getElementById('dashboardImage') as HTMLFormElement;
      this.BannersService.uploadMobileBanner(new FormData(formElem))
        .subscribe(res => {
          this.dashResp = res;
          this.toast.success('Uploaded Successfully!', '', {});
          this.mobileImage.reset()
        })
    };
}
