import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';
import { fromEvent, interval, merge, of, range, BehaviorSubject, Subject, timer } from 'rxjs';
import { mapTo, scan, switchMap, takeUntil, concatMap, delay, mergeMap, tap, skipWhile, map } from 'rxjs/operators';
import * as moment from 'moment';


@Component({
  selector: 'app-countdowntimer',
  templateUrl: './countdowntimer.component.html',
  styleUrls: ['./countdowntimer.component.scss'],
})
export class CountdowntimerComponent implements OnInit {

  @Input()
  data: any;
  valueTime: any = '00:30:00'

  hours: any = '00'
  mins: any = '00'
  secs: any = '00'

  constructor() { }

  ngOnInit() {

    let time = new Date(this.data.startTime).getTime()
    // let date1 = new Date(time + 30 * 60000).getTime()
    let date1: any = moment(time).add(30, 'minutes').valueOf();

    // console.log(moment(time).valueOf(),moment(time).add(30, 'minutes').valueOf());



    timer(1000, 1000).subscribe(() => {
      let date2: any = moment().valueOf();
      // let date2: any = new Date().getTime()
      var res = (date1 - date2) / 1000;

      // console.log(res, date1, date2);


      // get hours        
      // var hours = Math.floor(res / 3600) % 24;

      // get minutes
      if ((Math.floor(res / 60) % 60) >= 0) {
        // get minutes 
        if (Math.floor(res / 60) % 60 < 10 && Math.floor(res / 60) % 60 >= 0)
          this.mins = '0' + Math.floor(res / 60) % 60;


        if (Math.floor(res / 60) % 60 > 9 && Math.floor(res / 60) % 60 >= 0) {
          this.mins = Math.floor(res / 60) % 60;
        }


        // get seconds
        if (Math.round(res % 60) < 10 && Math.round(res % 60) >= 0)
          this.secs = '0' + Math.round(res % 60);


        if (Math.round(res % 60) > 9 && Math.round(res % 60) >= 0) {
          this.secs = Math.round(res % 60);
        }

        // console.log('minutes: ' + this.mins, this.secs);
      }
    })

  }

}
