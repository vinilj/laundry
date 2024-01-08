import { Component, OnInit } from '@angular/core';

import { UserapiService } from 'src/app/common/apilayer/APIs/userapi.service';
import { LocalStroageService } from 'src/app/common/service/localstorage/local-stroage.service';
import { ToastService } from 'src/app/common/service/toast/toast.service';

@Component({
  selector: 'app-notificationsetting',
  templateUrl: './notificationsetting.page.html',
  styleUrls: ['./notificationsetting.page.scss'],
})
export class NotificationsettingPage implements OnInit {

  activeTab: string = 'push';

  pushSubsciption: boolean = true;
  smsSubsciption: boolean = true;
  emailSubsciption: boolean = true;
  user: any;
  backupPushSubsciption: boolean = true;
  backupSmsSubsciption: boolean = true;
  backupEmailSubsciption: boolean = true;

  constructor(private userService: UserapiService, private localStorage: LocalStroageService, private toast: ToastService) {


  }

  ngOnInit() {
    this.localStorage.getStoredKey('user')
      .then(user => {
        console.log(user);

        this.user = user
        this.pushSubsciption = user.pushSubsciption;
        this.smsSubsciption = user.smsSubsciption;
        this.emailSubsciption = user.smsSubsciption;
        this.backupPushSubsciption = user.pushSubsciption;
        this.backupSmsSubsciption = user.smsSubsciption;
        this.backupEmailSubsciption = user.smsSubsciption;
      })
  }
  ngOnDestroy() {
    console.log(this.user.id, this.pushSubsciption)

    if (this.emailSubsciption != this.backupEmailSubsciption ||
      this.backupPushSubsciption != this.pushSubsciption ||
      this.backupSmsSubsciption != this.smsSubsciption) {
      let data = {
        "id": this.user.id,
        "userNotification": this.pushSubsciption,

      }
      this.userService.updateUser(data)
        .subscribe(res => {
          this.toast.toastSuccess('Profile updated')
          this.localStorage.setStorageKey('user', res)
        })
    }

  }
  tab(event) {
    this.activeTab = event
  }

  updatePermisson() {
    // console.log(this.emailSubsciption)
    // console.log(this);
    let data = {
      'id': this.user.id,
      'pushSubsciption': this.backupPushSubsciption,
      'smsSubsciption': this.backupSmsSubsciption,
      'emailSubsciption': this.backupEmailSubsciption
    }

    this.userService.updateUser(data)
      .subscribe(res => {
        console.log('updated.');
        // this.toast.toastSuccess('Notification updated.')
      });
  }

}
