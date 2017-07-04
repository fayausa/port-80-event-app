import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pwa-notification',
  template: `
    <a md-raised-button routerLink=".">Back</a>
    <md-card>Notifications</md-card>

  `,
  styles: []
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
