import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserapiService } from 'src/app/common/apilayer/APIs/userapi.service';
import { LocalStroageService } from 'src/app/common/service/localstorage/local-stroage.service';
import { HttpService } from 'src/app/common/apilayer/http-header/http.service';
import { ToastService } from 'src/app/common/service/toast/toast.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import * as jwt_decode from 'jwt-decode'

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

  otp: string = '';
  phoneNumber: any;
  user: any;




  constructor(private navctrl: NavController, private toasterService: ToastService,
    private route: ActivatedRoute, private router: Router,
    private userService: UserapiService, private localStorage: LocalStroageService) {
    this.route.queryParams.subscribe(params => {
      console.log(params);

      if (params && params.phoneNumber) {
        this.phoneNumber = JSON.parse(params.phoneNumber);
      }
    });
  }

  ngOnInit() {
  }

  submit() {

    console.log(this.otp);

    if (this.otp.length < 4)
      this.toasterService.toastFail('Please enter the otp')
    else
      this.userService.userLogin({
        mobile: String(this.phoneNumber),
        otp: parseInt(this.otp)
      })
        .subscribe(res => {
          if (res.userType == "found") {

            this.localStorage.setStorageKey('authToken', res['token'])
              .then(() => {
                // if (jwt_decode(res['token'])['userType'] == 'user') {
                //   this.navctrl.navigateForward('storelist')
                //   console.log(jwt_decode(res['token'])['userType']);
                // } else
                this.navigateToLandingPage()

              })

          }
          else if (res.userType == "notfound") {
            let navigationExtras: NavigationExtras = {
              queryParams: {
                phoneNumber: this.phoneNumber
              }
            };
            this.navctrl.navigateForward('userdetails', navigationExtras)
          } else if (res.userType == "storeoperator") {
            let navigationExtras: NavigationExtras = {
              queryParams: {
                phoneNumber: this.phoneNumber
              }
            };
            this.navctrl.navigateForward('storelist', navigationExtras)
          }
        },
          err => {
            this.otp = ""
            document.getElementById('otp1')['value']='';
            document.getElementById('otp2')['value']='';
            document.getElementById('otp3')['value']='';
            document.getElementById('otp4')['value']='';
            // otp1
            // otp2
            // otp3
            // otp4
            console.log(err);

          })


  }
  navigateToLandingPage() {
    this.userService.getUserData()
      .subscribe(res => {
        // this.user = res
        // console.log(res);
        this.userService.getUserDataById(res.id)
          .subscribe(res => {
            this.user = res
            this.localStorage.setStorageKey('user', res)
              .then(() => {
                if (res.userType == "storeoperator")
                  this.navctrl.navigateForward('/storelist')
                else
                  this.navctrl.navigateForward('tabs/welcome')
              })
          })
      })
  }

  resendOtp() {
    this.otp = ""
    this.userService.resendOTP({
      mobile: String(this.phoneNumber),
    }).subscribe(res => {
      console.log(res);
      this.toasterService.toastSuccess('Otp resent')
    })
  }
  otpController(event, next, prev) {
    // console.log(event.target.value.length, " next:", next, " prev:", prev, " otp:", this.otp.length);

    if (event.target.value.length < 1 && prev) {
      if (this.otp.length == 0)
        this.otp = ""
      else if (this.otp.length == 1) {
        this.otp = this.otp.substring(0, this.otp.length - 1);
      }
      else {
        prev.setFocus()
        this.otp = this.otp.substring(0, this.otp.length - 1);
      }


    }
    else if (next && event.target.value.length > 0 && this.otp.length < 4) {


      if (this.otp.length == 3) {
        this.otp = this.otp + event.target.value
        next.setFocus();
      }
      else if (this.otp.length < 3) {
        this.otp = this.otp + event.target.value
        next.setFocus();
      }

    }
    else {
      return 0;
    }

  }
}
