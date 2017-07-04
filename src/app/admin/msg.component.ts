import { AppService } from '../app.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pwa-msg',
  template: `
    <md-input-container>
      <input mdInput placeholder="Enter message" [(ngModel)]=msg>
    </md-input-container>
    <button md-raised-button (click)='sendMsg()' >Send</button>
  `,
  styles: []
})
export class MsgComponent implements OnInit {
  msg: any;
  constructor(public service: AppService) { }

  ngOnInit() {
  }
sendMsg() {
  const timeId = Date.now();
  // this.service.msgData.remove().then(_ => console.log('deleted!'));
  this.service.msgData.push({'msg': this.msg, 'time': timeId})
}
}
