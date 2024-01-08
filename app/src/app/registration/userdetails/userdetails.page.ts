import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastService } from 'src/app/common/service/toast/toast.service';
import { UserapiService } from 'src/app/common/apilayer/APIs/userapi.service';
import { LocalStroageService } from 'src/app/common/service/localstorage/local-stroage.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.page.html',
  styleUrls: ['./userdetails.page.scss'],
})
export class UserdetailsPage implements OnInit {
  // user: any = {
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   dob: ''
  // }
  user = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required]),
  });
  phoneNumber: any;


  // "firstName": "string",
  // "lastName": "string",
  // "email": "string",
  // "password": "password@123",
  // "mobile": "string",
  // "stayIn": "home",
  // "userType": "user",

  constructor(private navctrl: NavController, private toasterService: ToastService, private route: ActivatedRoute,
    private localStorage: LocalStroageService, private userService: UserapiService) {
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
    if (this.user.valid)
      this.userService.createUserData({
        firstName: this.user.value.firstName,
        lastName: this.user.value.lastName,
        email: this.user.value.email,
         password: "2a$10$6KyP2v0bOtxW0tBKgTjNsuJtDA",
        mobile: String(this.phoneNumber),
        stayIn: "home",
        userType: "user",
        dob: this.user.value.dob
      }).subscribe(res => {
        this.localStorage.setStorageKey('authToken', res['token'])
          .then(() => this.navctrl.navigateForward('tabs/welcome'))
      })



    else if (this.user.get('firstName').invalid)
      this.toasterService.toastFail('Please enter a valid first name')

    else if (this.user.get('lastName').invalid)
      this.toasterService.toastFail('Please enter a valid last name')

    else if (this.user.get('email').invalid)
      this.toasterService.toastFail('Please enter a valid email')

    else if (this.user.get('dob').invalid)
      this.toasterService.toastFail('Please enter a valid date of birth')
  }

}
