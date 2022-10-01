import { Component } from '@angular/core';
import { SpotifyService } from './services/api/spotify.service';
import { PlayerService } from './services/player.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(private spotify: SpotifyService, private player: PlayerService) {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);
    console.log('construct player');
    
    window.onSpotifyWebPlaybackSDKReady = () => {
      this.player.initSpotifyWebPlayer(this.spotify.getToken());
      this.player.connect();
    }
  }
  
}
