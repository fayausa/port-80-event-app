import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class AppService {
  showMenu: any;
  msgData: any;
  constructor(public db: AngularFireDatabase) {
    this.msgData = this.db.list('/messages');
  }
getMessages() {
    return this.db.list('/messages').map( (arr) => { return arr.reverse(); } );
}
}
