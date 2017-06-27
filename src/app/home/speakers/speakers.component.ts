import { Component, ViewContainerRef } from '@angular/core';
import { MdDialog } from '@angular/material';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

/**
 * This class represents the toolbar component.
 */
@Component({
  selector: 'pwa-speakers',
  templateUrl: 'speakers.component.html'
})
export class SpeakersComponent {
  constructor(public dialog: MdDialog, overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }
   onClick() {
    this.modal.alert()
        .size('sm')
        .showClose(true)
        .okBtnClass('btn')
        .title('Speaker details')
        .body(`
            <h4>Mr. Anivar Aravind</h4>
            <br>Founder Executive Director
            <b>Indic Project</b>
            <p>Anivar A. Aravind is Founder Executive Director of Indic Project,
            a civic-tech non-profit initiative works on language engineering,
            technology standards and digital rights.</p>`)
        .open();
  }
}

@Component({
  selector: 'pwa-dialog',
  templateUrl: './dialog.component.html',
})
export class DialogComponent {}
