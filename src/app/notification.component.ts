import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';


@Component({
  selector: 'pwa-notification',
  template: `
  <div style="height:82vh;">
    <a md-raised-button routerLink="/home" style="margin-left:6px; margin-top:6px;">Back</a>
    <md-card>
    	<md-nav-list dense>
	      <div #last >
	        <a md-list-item *ngFor='let key of messages'>
	          <md-icon md-list-avatar>message</md-icon>
	          <h4 md-line><span class="text-wrap">{{key.msg}}</span></h4>
	          <p md-line>{{key.time }} ago</p>
	        </a>
	        <md-divider></md-divider>
	      </div>
	    </md-nav-list>
    </md-card>
   </div>
  `,
  styles: []
})
export class NotificationComponent implements OnInit {
  public messages:any;
  constructor( private service : AppService) { 
  	this.service.getAllMessages().subscribe(
      (data: any) => {
        this.messages = data;
      }
    )
  }

  ngOnInit() {
  }

}
