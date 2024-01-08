import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavRoutingModule, SideNavRoutingComponents } from './sidenav-routing.module';
import { MaterialModule } from 'src/material-module';
import { DateTimePipe } from 'src/app/common/services/pipes/date-time.pipe';
import { PipesModule } from 'src/app/common/services/pipes/pipes.module';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { updatepassword } from './sidenav.component';
import { FormsModule } from '@angular/forms';
import { editfranchise } from '../addfranchise/addfranchise.component';

@NgModule({
  declarations: [
    SideNavRoutingComponents,
    updatepassword,
    editfranchise
  ],
  imports: [
    CommonModule,
    SidenavRoutingModule,
    MaterialModule,
    PipesModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule
  ],
  entryComponents: [
    updatepassword,
    editfranchise
  ],
})
export class SidenavModule { }

