import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var idbKeyval;
declare var Notification;
const key = 'pwa-messages';
const applicationServerPublicKey = 'BMZuj1Uek9SeT0myecw8TQxr4dB6Vl4X7c4abMzAA4KR72DsKnVcSpZr6svYgkwNSerKsz7vdZ1kfzwFc0TmH3o';

@Component({
  selector: 'pwa-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {
  location: any;
  private isSubscribed = false;
  private registration = undefined;

  disablePushButton = false;
  pushButtonText = '';
  subscriptionJson = '';
  message: { phone: string, body: string } = { phone: undefined, body: undefined };

  constructor(public router: Router) { }

  ngOnInit() {
    console.log();
  }
}
