import { Component } from '@angular/core';
import {MdDialog} from '@angular/material';

/**
 * This class represents the toolbar component.
 */
@Component({
  selector: 'pwa-speakers',
  templateUrl: 'speakers.component.html'
})
export class SpeakersComponent {
  constructor(public dialog: MdDialog) {}

  openDialog() {
    this.dialog.open(DialogComponent);
  }
}

@Component({
  selector: 'pwa-dialog',
  templateUrl: './dialog.component.html',
})
export class DialogComponent {}
