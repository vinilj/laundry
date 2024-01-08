import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationsettingPage } from './notificationsetting.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationsettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationsettingPageRoutingModule {}
