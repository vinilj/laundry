import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserapiService } from 'src/app/common/apilayer/APIs/userapi.service';
import { LocalStroageService } from 'src/app/common/service/localstorage/local-stroage.service';
import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  user: any;
  totalWalletBalance: number = 0;
  franchise: any;

  constructor(private push: Push,
    private oneSignal: OneSignal,
    private navctrl: NavController, private localStorage: LocalStroageService, private statusbar: StatusBar, private userService: UserapiService, ) {
    statusbar.backgroundColorByHexString('#642e58')
    statusbar.styleLightContent()
    userService.getUserData()
      .subscribe(res => {
        this.user = res
        this.user['name'] = this.user.firstName + ' ' + this.user.lastName
        console.log(res);
        userService.getUserDataById(res.id)
          .subscribe(res => {
            this.user = res
            console.log(res);
            localStorage.setStorageKey('user', res)
            if (res.userType == "storeoperator")
              this.navctrl.navigateForward('/storelist')
            // this.updateDeviceTokenOld()
            this.updateDeviceToken()
          })
        // localStorage.setStorageKey('user', res)



      })

  }

  ngOnInit() {
    this.getUserWalletData()
    this.getOffers()
  }

  getOffers() {
    this.userService.getUserIdFromStorage()
      .then(() => {
        this.userService.getAllOffers()
          .subscribe(res => {
            this.franchise = res.franchise
            console.log(this.franchise);

          })
      })
  }
  getUserWalletData() {
    this.userService.getUserIdFromStorage()
      .then(() => {
        this.totalWalletBalance = 0;
        this.userService.getUserWallet()
          .subscribe(res => {
            console.log(res, 'wallet');
            this.totalWalletBalance += res[0].balance
          })
      })
  }

  updateDeviceToken() {
    this.oneSignal.startInit(environment.ONESIGNAL_APP_ID, environment.ANDROID_ID);

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);

    this.oneSignal.getIds().then((data) => {
      let playerID = data.userId;
      // Save playerID into localStorage and Save this into user table after OTP verification
      this.userService.updateUser({ id: this.user.id, deviceToken: data.userId, })
        .subscribe(res => {
          console.log('deviceRegistration', data.userId);
        })
      console.log('playerID:', playerID);
    });

  }

  // updateDeviceTokenOld() {
  //   const options: PushOptions = {
  //     android: {},
  //     ios: {
  //       alert: 'true',
  //       badge: true,
  //       sound: 'false'
  //     },
  //     windows: {},
  //     browser: {
  //       pushServiceURL: 'http://push.api.phonegap.com/v1/push'
  //     }
  //   }
  //   const pushObject: PushObject = this.push.init(options);

  //   pushObject.on('registration').subscribe((registration: any) => {
  //     this.userService.updateUser({ id: this.user.id, deviceToken: registration.registrationId, })
  //       .subscribe(res => {
  //         console.log('deviceRegistration', registration.registrationId);

  //       })
  //   });
  // }

  submit() {
    this.navctrl.navigateForward('/tabs/tab1')
  }
}
