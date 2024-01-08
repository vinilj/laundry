import { Component, OnInit } from '@angular/core';
import { LocalStroageService } from 'src/app/common/service/localstorage/local-stroage.service';
import { NavController } from '@ionic/angular';
import { UserapiService } from 'src/app/common/apilayer/APIs/userapi.service';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private socialSharing: SocialSharing,private callNumber: CallNumber,private localStorage: LocalStroageService, private navctrl: NavController, private userService: UserapiService) {

   
  }


  ngOnInit() {
  }
  showSupport(){
    this.callNumber.callNumber("8880767777", true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }


  showPrivacy(){
    window.open('https://api.coinlaundryindia.com/files/privacy-policy.pdf','_system')
  }


  share(){
    this.socialSharing.share("https://play.google.com/store/apps/details?id=com.makonis.coinlaundry")
    .then(() => {
      // Sharing via email is possible
    }).catch(() => {
      // Sharing via email is not possible
    });

  }

  showLegal(){
    window.open(' https://api.coinlaundryindia.com/files/legal-information-disclaimer.pdf','_system')
  }

  showFeedback(){
    window.open("https://play.google.com/store/apps/details?id=com.makonis.coinlaundry",'_system')
  }

  logout() {
    this.userService.userLogout()
      .subscribe(res => {
        this.localStorage.clearStorage()
          .then(() => {

            this.localStorage.setStorageKey('viewedTutorial', true)
              .then(()=>{
                  this.navctrl.navigateForward('login')
              })
          })
      })
  }
}
