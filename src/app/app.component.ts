import { AppService } from './app.service';

import { DomSanitizer } from '@angular/platform-browser';
import { AfterViewInit, Component } from '@angular/core';
import { MdIconRegistry } from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'pwa-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {
  constructor(public service: AppService) {
    this.service.showMenu = false;
  }
}
