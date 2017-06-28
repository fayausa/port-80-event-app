import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'pwa-loopback',
  templateUrl: './loopback.component.html',
  styleUrls: ['./loopback.component.css'],
  providers: [{provide: CarouselConfig, useValue: {interval: 2000, noPause: false}}]
})
export class LoopbackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
