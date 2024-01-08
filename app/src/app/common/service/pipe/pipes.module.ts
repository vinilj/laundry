import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { DateTimePipe } from './date-time.pipe';


@NgModule({
  declarations: [DateTimePipe],
  imports: [IonicModule],
  exports: [DateTimePipe]
})
export class PipesModule { }