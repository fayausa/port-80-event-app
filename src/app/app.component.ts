import { DomSanitizer } from '@angular/platform-browser';
import { AfterViewInit, Component } from '@angular/core';
import { MdIconRegistry } from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'pwa-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent implements AfterViewInit{
  routes: Object[] = [
    {
      title: 'Premise',
      route: '/',
      icon: 'home',
    }, {
      title: 'About Us',
      route: '/',
      icon: 'people',
    }, {
      title: 'Speakers',
      route: '/',
      icon: 'language',
    }, {
      title: 'Partners',
      route: '/',
      icon: 'assignment',
    }, {
      title: 'Registration',
      route: '/',
      icon: 'laptop_mac',
    },
    {
      title: 'Schedule',
      route: '/',
      icon: 'insert_chart',
    }
  ];

  constructor(private _iconRegistry: MdIconRegistry,
              private _domSanitizer: DomSanitizer) {
              this._iconRegistry.addSvgIconInNamespace('assets', 'teradata-ux',
              this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/teradata-ux.svg'));
              this._iconRegistry.addSvgIconInNamespace('assets', 'covalent',
              this._domSanitizer.bypassSecurityTrustResourceUrl('https://www.fayaport80.com/img/FAYA-80-logo.png'));
              this._iconRegistry.addSvgIconInNamespace('assets', 'covalent-mark',
              this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent-mark.svg'));

  }
  ngAfterViewInit(): void {

  }
}
