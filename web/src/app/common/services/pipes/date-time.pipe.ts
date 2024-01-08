import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateTime'
})
export class DateTimePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return moment(value).format('hh:mm A, DD MMM YYYY');
  }

}
