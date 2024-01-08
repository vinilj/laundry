import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastController: ToastController) { }

  async toastSuccess(message) {
    const toast = await this.toastController.create({
      message: message,
      color: 'primary',
      duration: 2000,
      // showCloseButton: true
    });
    toast.present();
  }

  async toastFail(message) {
    const toast = await this.toastController.create({
      message: message,
      color: 'danger',
      duration: 2000,
      // showCloseButton: true
    });
    toast.present();
  }

}
