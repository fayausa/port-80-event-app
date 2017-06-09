import { Component } from '@angular/core';

@Component({
  selector: 'pwa-root',
  template: `
    <md-toolbar color="primary" class="dark">
    </md-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'pwa works!';
}
