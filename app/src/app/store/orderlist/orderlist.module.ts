import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderlistPageRoutingModule } from './orderlist-routing.module';

import { OrderlistPage } from './orderlist.page';
import { PipesModule } from 'src/app/common/service/pipe/pipes.module';
import { LocalStroageService } from 'src/app/common/service/localstorage/local-stroage.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderlistPageRoutingModule,
    PipesModule
  ],
  providers:[LocalStroageService],
  declarations: [OrderlistPage]
})
export class OrderlistPageModule {}
