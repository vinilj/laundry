import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationsettingPageRoutingModule } from './notificationsetting-routing.module';

import { NotificationsettingPage } from './notificationsetting.page';
import { CustomComponentModule } from 'src/app/common/components/customcomponent.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationsettingPageRoutingModule,
    CustomComponentModule
  ],
  declarations: [NotificationsettingPage]
})
export class NotificationsettingPageModule {}
