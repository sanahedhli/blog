import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyAkJxqw3xhKi37OvhYGfa0NALqWfVgvXHQ",
      authDomain: "http-client-blog-db-b3ad2.firebaseapp.com",
      databaseURL: "https://http-client-blog-db-b3ad2.firebaseio.com",
      projectId: "http-client-blog-db-b3ad2",
      storageBucket: "http-client-blog-db-b3ad2.appspot.com",
      messagingSenderId: "1086182414929",
      appId: "1:1086182414929:web:4c62ca44dd809372"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
