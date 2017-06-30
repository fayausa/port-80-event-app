import { Component, ViewContainerRef } from '@angular/core';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

/**
 * This class represents the toolbar component.
 */
@Component({
  selector: 'pwa-schedule',
  templateUrl: 'schedule.component.html'
})
export class ScheduleComponent {
  toggleObj: any = {1: false};
  isClicked: any;
  srcUrl = 'https://www.youtube.com/embed/LMlbRsiYgpw';
  disabled = false;
  constructor(overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {}
  onClick1() {
   if (this.isClicked) {
    this.isClicked = false;
   }else {this.isClicked = true}
  }
  toggle(id: number) {
    if (this.toggleObj[id]) {
    this.toggleObj[id] = false;
   }else {this.toggleObj[id] = true}
   console.log('toggleObj', this.toggleObj);
  }

 }

