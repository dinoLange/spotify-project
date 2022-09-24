import { Component, OnDestroy } from '@angular/core';
import { SpotifyService } from './api/spotify.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title: String = 'Spotify';
 

  constructor() {}
  
}
