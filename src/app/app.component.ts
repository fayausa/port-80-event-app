import { AfterViewInit, Component, OnInit, Inject } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  moduleId: module.id,
  selector: 'pwa-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}

