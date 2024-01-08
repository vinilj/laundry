import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ProfileheaderComponent } from './profileheader/profileheader.component';
import { CountdowntimerComponent } from './countdowntimer/countdowntimer/countdowntimer.component';
import { DropProgressComponent } from './dropprogress/dropprogress.component';
import { PrePaymentPopoverComponent } from './pre-payment-popover/pre-payment-popover.component';
import { PaymentsucesspopupComponent } from './paymentsucesspopup/paymentsucesspopup.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ReactiveFormsModule
    ],
    entryComponents: [
        ProfileheaderComponent, 
        DropProgressComponent,
         PrePaymentPopoverComponent,
         PaymentsucesspopupComponent
        ],
    declarations: [
        ProfileheaderComponent,
        CountdowntimerComponent,
        DropProgressComponent,
        PrePaymentPopoverComponent,
        PaymentsucesspopupComponent
    ],
    exports: [
        ProfileheaderComponent,
        CountdowntimerComponent,
        DropProgressComponent,
        PrePaymentPopoverComponent,
        PaymentsucesspopupComponent
    ]
})
export class CustomComponentModule { }