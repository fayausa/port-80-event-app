import { AppService } from '../app.service';
import { Component, Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'pwa-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent {
  messages: any;
  location: any;
  notificationCount: any = 1;
  constructor(public router: Router, public service: AppService) {
    this.service.getMessages().subscribe(
      (data: any) => {
        this.messages = data.sort( (a: any, b: any) => { return a.val - b.val; });
        console.log(data);
        this.notificationCount = data.length;
      }
    )
   }
}
@Pipe({
  name: 'timeElapsed'
})
export class TimeElapsed implements PipeTransform {
  transform(savedTime: any) {
    const timer = new Observable<string>((observer: any) => {
      function computeTime(savedTime) {
        let diffMs: any = +new Date() - +new Date(savedTime);
        let diffDays: any = Math.floor(diffMs / 86400000); // days
        let diffHrs: any = Math.floor((diffMs % 86400000) / 3600000); // hours
        let diffMins: any = Math.floor(((diffMs % 86400000) % 3600000) / 60000); // minutes
        let diffSecs: any = Math.floor((((diffMs % 86400000) % 3600000) % 60000) / 1000); // seconds
        let displayTime: any = '';
        if (diffHrs) {
          diffHrs += 'h ';
          displayTime += diffHrs;
        }
        if (diffMins) {
          diffMins += 'm ';
          displayTime += diffMins;
        }
        if ( !(diffDays || diffHrs || diffMins)) {
          diffSecs += 's';
          displayTime = diffSecs;
        }
        observer.next(displayTime);
      }
      // run immediately
      computeTime(savedTime);
      // run after each second
      setInterval(() => {
        computeTime(savedTime);
      }, 1000);
    });
    return timer;
  }
};
