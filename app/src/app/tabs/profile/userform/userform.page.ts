import { Component, OnInit } from '@angular/core';
import { LocalStroageService } from 'src/app/common/service/localstorage/local-stroage.service';
import { UserapiService } from 'src/app/common/apilayer/APIs/userapi.service';
import { ToastService } from 'src/app/common/service/toast/toast.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.page.html',
  styleUrls: ['./userform.page.scss'],
})
export class UserformPage implements OnInit {

  user: any = {
    firstName: '',
    lastName: '',
    dob: '',
    mobile: '',
    email: '',
    stayIn: '',
    home: false,
    pg: false,
    hostel: false
  }


  constructor(private localStorage: LocalStroageService, private toast:ToastService,private userService: UserapiService) {
    localStorage.getStoredKey('user')
      .then(user => {
        this.userService.getUserDataById(user.id)
          .subscribe(res => {
            console.log(res);

            this.user = res
          })
      })
  }

  ngOnInit() {
  }

  updateUserData() {
    let data = {
      "id": this.user.id,
      "firstName": this.user.firstName,
      "lastName": this.user.lastName,
      "email": this.user.email,
      // "password": 'password@123',
      "mobile": this.user.mobile,
      "stayIn": this.user.stayIn,
      "permissions": this.user.permissions,
      "dob": this.user.dob
    }
    console.log(this.user.stayIn, data);
    this.userService.updateUser(data)
      .subscribe(res => {
        this.toast.toastSuccess('Profile updated')
        this.localStorage.setStorageKey('user', res)
      })
  }

  updateStay(stay) {
    this.user.stayIn = stay
  }


}
