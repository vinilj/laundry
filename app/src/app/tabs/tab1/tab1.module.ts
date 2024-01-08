import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { PipesModule } from 'src/app/common/service/pipe/pipes.module';
import { CustomComponentModule } from 'src/app/common/components/customcomponent.module';
import { BluetoothLE } from '@ionic-native/bluetooth-le/ngx';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { BLE } from '@ionic-native/ble/ngx';


@NgModule({
  imports: [

    IonicModule,
    CommonModule,
    FormsModule,
    PipesModule,
    CustomComponentModule,
    IonicModule.forRoot({ hardwareBackButton: false }),
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page],
  providers: [QRScanner, BLE,BluetoothLE]

})
export class Tab1PageModule { }
