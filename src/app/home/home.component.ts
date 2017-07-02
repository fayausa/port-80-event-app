import { AppService } from '../app.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
import { PushNotificationsService } from 'angular2-notifications';
declare var idbKeyval;
declare var Notification;
const key = 'pwa-messages';
const applicationServerPublicKey = 'BMZuj1Uek9SeT0myecw8TQxr4dB6Vl4X7c4abMzAA4KR72DsKnVcSpZr6svYgkwNSerKsz7vdZ1kfzwFc0TmH3o';

interface PushNotification {
    body?: string
    icon?: string
    tag?: string
    renotify?: boolean
    silent?: boolean
    sound?: string
    noscreen?: boolean
    sticky?: boolean
    dir?: 'auto' | 'ltr' | 'rtl'
    lang?: string
    vibrate?: number[]
}

@Component({
  selector: 'pwa-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {
  location: any;
  notificationCount: any = 5;
  private isSubscribed = false;
  private registration = undefined;
  messages: any;
  disablePushButton = false;
  pushButtonText = '';
  subscriptionJson = '';
  message: { phone: string, body: string } = { phone: undefined, body: undefined };

  constructor(public router: Router, private _push: PushNotificationsService, public service: AppService) {
    this.service.getMessages()
    .subscribe(messages => {
        messages.forEach(msg => {
            this._push.create('Faya 80', {body: msg.$value}).subscribe(
            res => console.log(res),
            err => console.log(err)
        )
        });
    })
   }

  ngOnInit() {
    console.log();
  }
  create(title: string, options: PushNotification) {
     this._push.create('Test', {body: 'something'}).subscribe(
            res => console.log(res),
            err => console.log(err)
        )
  }
}
