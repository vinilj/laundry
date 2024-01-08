import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderdetailPage } from './orderdetail.page';
import { RouterModule } from '@angular/router';
import { PipesModule } from 'src/app/common/service/pipe/pipes.module';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { BLE } from '@ionic-native/ble/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: OrderdetailPage }])
  ],
  declarations: [OrderdetailPage],
  providers: [QRScanner, BLE, Vibration]

})
export class OrderdetailPageModule {}
