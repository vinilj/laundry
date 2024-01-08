import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NotificationComponent } from '../notification/notification.component';
import { OderdetailComponent } from '../oderdetail/oderdetail.component';
import { SidenavComponent } from './sidenav.component';
import { ChartsComponent } from '../charts/charts.component';
import { OrdersComponent } from '../orders/orders.component';
import { AddstoreoperatorComponent } from '../addstoreoperator/addstoreoperator.component';
import { BannersComponent } from '../banners/banners.component';
import { RewardsComponent } from '../rewards/rewards.component';
import { MachinesComponent } from '../machines/machines.component';
import { AuthGaurdService } from 'src/app/common/services/authGaurd/auth-gaurd.service';
import { AddfranchiseComponent } from '../addfranchise/addfranchise.component';
import { SettingsComponent } from '../settings/settings.component'

/**Routes to be added for components */
const routes: Routes = [
  {
    path: '',
    component: SidenavComponent,
    canActivate: [AuthGaurdService],
    children: [
      { path: '', pathMatch: 'full', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'notification', component: NotificationComponent },
      { path: 'orderdetail', component: OderdetailComponent },
      { path: 'charts', component: ChartsComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'addoperator', component: AddstoreoperatorComponent },
      { path: 'banner', component: BannersComponent },
      { path: 'reward', component: RewardsComponent },
      { path: 'machine', component: MachinesComponent }, 
      { path: 'addfranchise', component: AddfranchiseComponent },
      { path: 'settings', component: SettingsComponent },
    ]
  }
];
/**Route ends */

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidenavRoutingModule { }


/** Add the modules into the array to be imported in declaration[] in module.ts */
export const SideNavRoutingComponents = [
  DashboardComponent,
  NotificationComponent,
  OderdetailComponent,
  SidenavComponent,
  ChartsComponent,
  AddstoreoperatorComponent,
  OrdersComponent,
  BannersComponent,
  RewardsComponent,
  MachinesComponent,
  AddfranchiseComponent,
  SettingsComponent
]
