import { AppService } from '../app.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
        this.messages = data;
        this.notificationCount = data.length;
      }
    )
   }
}
