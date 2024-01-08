import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { CustomComponentModule } from 'src/app/common/components/customcomponent.module';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    CustomComponentModule
  ],
  declarations: [ProfilePage],
  providers: [FileOpener, CallNumber, SocialSharing]
})
export class ProfilePageModule { }
