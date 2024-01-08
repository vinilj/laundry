import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx'
import { LocalStroageService } from 'src/app/common/service/localstorage/local-stroage.service';


@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {

  constructor(private navctrl: NavController, private statusBar: StatusBar, private localStorage: LocalStroageService) {
    localStorage.setStorageKey('viewedTutorial', true)
  }

  ngOnInit() {
  }

  @ViewChild('mySlider', { static: true }) slides: IonSlides;

  swipeNext() {
    this.slides.isEnd().then((istrue) => {
      console.log(istrue);
      if (istrue) {
        console.log('finish');
        this.navctrl.navigateForward('login')

      } else {
        this.slides.slideNext();
      }
    });
  }




}
