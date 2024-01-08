import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderdetailPageRoutingModule } from './orderdetail-routing.module';

import { OrderdetailPage } from './orderdetail.page';
import { PipesModule } from 'src/app/common/service/pipe/pipes.module';
import { CallNumber } from '@ionic-native/call-number/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderdetailPageRoutingModule,
    PipesModule
  ],
  declarations: [OrderdetailPage],
  providers:[CallNumber]
})
export class OrderdetailPageModule {}
