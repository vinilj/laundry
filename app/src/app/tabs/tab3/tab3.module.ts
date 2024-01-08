import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { BLE } from '@ionic-native/ble/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  declarations: [Tab3Page],
  providers: [QRScanner, BLE, Vibration]
})
export class Tab3PageModule { }
