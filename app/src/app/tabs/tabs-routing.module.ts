import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [

      {
        path: 'orderdetail',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./orderdetail/orderdetail.module').then(m => m.OrderdetailPageModule)
          }
        ]
      },
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      }, {
        path: 'orderhistory',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./orderhistory/orderhistory.module').then(m => m.OrderhistoryPageModule)
          }
        ]
      }, {
        path: 'wallet',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./wallet/wallet.module').then(m => m.WalletPageModule)
          }
        ]
      },
      // {
      //   path: 'welcome',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () =>import('./welcome/welcome.module').then(m => m.WelcomePageModule)
      //     }
      //   ]
      // },
      {
        path: '',
        redirectTo: '/tabs/welcome',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
