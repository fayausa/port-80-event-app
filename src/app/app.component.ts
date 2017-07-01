import { AfterViewInit, Component, OnInit, Inject } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import * as firebase from 'firebase';
import { FirebaseApp } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'pwa-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  private _messaging: firebase.messaging.Messaging;

  constructor(@Inject(FirebaseApp) private _firebaseApp: firebase.app.App) {
    this._messaging = firebase.messaging();
  }

  ngOnInit() {
    // Callback fired if Instance ID token is updated.
    this._messaging.onTokenRefresh(function() {
      this._messaging.getToken()
        .then(function(refreshedToken) {
          console.log('Token refreshed.', refreshedToken);
        })
        .catch(function(err) {
          console.log('Unable to retrieve refreshed token ', err);
        });
    });
    this.requestPermission();
  }

  requestPushNotif() {
    this._messaging.requestPermission()
      .then(() => {
        console.log('have permission');
        return this._messaging.getToken();
      })
      .then(function(token) {
        console.log(token);
      })
      .catch((error) => {
        console.log(error);
      });
  }

requestPermission() {
    console.log('Requesting permission...');
    // [START request_permission]
    this._messaging.requestPermission()
    .then(function(token) {
      console.log('Notification permission granted.', token);
      // TODO(developer): Retrieve an Instance ID token for use with FCM.
      // [START_EXCLUDE]
      // In many cases once an app has been granted notification permission, it
      // should update its UI reflecting this.
      // resetUI();
      // [END_EXCLUDE]
    })
    .catch(function(err) {
      console.log('Unable to get permission to notify.', err);
    });
    // [END request_permission]
  }


}

