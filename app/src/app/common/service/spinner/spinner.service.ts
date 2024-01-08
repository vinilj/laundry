import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular'; 

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  spinner: boolean = false;

  constructor(public loadingController: LoadingController) { }

  async spinnerPresent() {
    this.spinner = true;
    return await this.loadingController.create({
      message: '',
      spinner: 'crescent',
      cssClass: 'spinner',
      // duration: 500000,
    }).then(a => {
      a.present().then(() => {
        console.log('loading presented');
        if (!this.spinner) {
          a.dismiss().then(() => console.log('abort laoding'));
        }
      });
    });
  }

  async spinnerDismiss() {
    this.spinner = false;
    return await this.loadingController.dismiss().then(() => console.log('loading dismissed'));
  }

}
