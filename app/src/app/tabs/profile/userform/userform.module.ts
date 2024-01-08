import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserformPageRoutingModule } from './userform-routing.module';

import { UserformPage } from './userform.page';
import { CustomComponentModule } from 'src/app/common/components/customcomponent.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserformPageRoutingModule,
    CustomComponentModule
  ],
  declarations: [UserformPage]
})
export class UserformPageModule {}
