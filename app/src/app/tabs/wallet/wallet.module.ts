import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletPage } from './wallet.page';
import { RouterModule } from '@angular/router';
import { PipesModule } from 'src/app/common/service/pipe/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: WalletPage }])
  ],
  declarations: [WalletPage]
})
export class WalletPageModule { }
