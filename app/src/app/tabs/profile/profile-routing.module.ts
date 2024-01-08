import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  },
  {
    path: 'userform',
    loadChildren: () => import('./userform/userform.module').then( m => m.UserformPageModule)
  },
  {
    path: 'notificationsetting',
    loadChildren: () => import('./notificationsetting/notificationsetting.module').then( m => m.NotificationsettingPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
