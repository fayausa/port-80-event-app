import { AppService } from '../app.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pwa-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent {
  location: any;
  notificationCount: any = 5;
  constructor(public router: Router, public service: AppService) {
   }
}
