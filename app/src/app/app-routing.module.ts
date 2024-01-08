import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGaurdService } from './common/service/auth-gaurd/auth-gaurd.service';
import { RoleGaurdService } from './common/service/role-gaurd/role-gaurd.service';

const routes: Routes = [
  {
    canActivate: [AuthGaurdService],
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
   // canActivate: [AuthGaurdService],
    path: 'userdetails',
    loadChildren: () => import('./registration/userdetails/userdetails.module').then(m => m.UserdetailsPageModule)
  },
  // {
  //   canActivate: [AuthGaurdService],
  //   path: 'orderlist',
  //   loadChildren: () => import('./store/orderlist/orderlist.module').then(m => m.OrderlistPageModule)
  // },
  {
    path: '',
    // canActivate: [RoleGaurdService],
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'onboarding',
    loadChildren: () => import('./registration/onboarding/onboarding.module').then(m => m.OnboardingPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./registration/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./registration/otp/otp.module').then(m => m.OtpPageModule)
  },

  {
    // canActivate: [AuthGaurdService],
    path: 'storelist',
    loadChildren: () => import('./store/orderlist/orderlist.module').then(m => m.OrderlistPageModule)
  },
  {
    path: 'storeorderdetail',
    loadChildren: () => import('./store/orderdetail/orderdetail.module').then(m => m.OrderdetailPageModule)
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
