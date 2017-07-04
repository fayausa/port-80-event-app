import { Component, ElementRef, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
declare var Trianglify;
@Component({
  selector: 'pwa-landingpage',
  templateUrl: 'landing-page.component.html'
})
export class LandingPageComponent implements OnInit, OnDestroy, AfterViewInit {
  time: any;
  future: Date;
  futureString: string;
  diff: number;
  $counter: Observable<number>;
  subscription: Subscription;
  message: string;

    constructor(elm: ElementRef) {
      this.futureString = 'July 5, 2017 12:00:00';
    }
     ngAfterViewInit() {
      const something = document.getElementById('svg-bg');
      const pattern = Trianglify({
        height: 550,
        width: 500,
        cell_size: 40
      });
      something.appendChild(pattern.canvas());
    }
    timer(t) {
        let days, hours, minutes, seconds;
        days = Math.floor(t / 86400);
        t -= days * 86400;
        hours = Math.floor(t / 3600) % 24;
        t -= hours * 3600;
        minutes = Math.floor(t / 60) % 60;
        t -= minutes * 60;
        seconds = t % 60;
        this.time = {};
        this.time.seconds = seconds;
        this.time.days = days;
        this.time.hours = hours;
        this.time.minutes = minutes;
        return [
            days + 'd',
            hours + 'h',
            minutes + 'm',
            seconds + 's'
        ].join(' ');
    }


    ngOnInit() {
        this.future = new Date(this.futureString);
        this.$counter = Observable.interval(1000).map((x) => {
            this.diff = Math.floor((this.future.getTime() - new Date().getTime()) / 1000);
            return x;
        });

        this.subscription = this.$counter.subscribe((x) => this.message = this.timer(this.diff));
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}

