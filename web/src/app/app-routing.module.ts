import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sidenav', loadChildren: './pages/sidenav/sidenav.module#SidenavModule' },
  { path: '', pathMatch: 'full', loadChildren: './pages/sidenav/sidenav.module#SidenavModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const Components = [LoginComponent]
