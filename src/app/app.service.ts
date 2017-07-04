import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class AppService {
  showMenu: any;
  msgData: any;
  constructor(public db: AngularFireDatabase) {
    this.msgData = this.db.list('/messages');
    console.log(this.db.list('/messages').map( (arr) => { return arr.reverse(); } ));
  }
getMessages() {
    return this.db.list('/messages').map( (arr) => { return arr.reverse(); } );
}
getAllMessages() {
	return this.db.list('/messages');
}
}
