import { Component, OnDestroy, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/api/spotify.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.less']
})
export class PlayerComponent implements OnInit, OnDestroy {

  constructor(private spotify: SpotifyService, private player: PlayerService) { 
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);
    window.onSpotifyWebPlaybackSDKReady = () => {
      this.player.initSpotifyWebPlayer(this.spotify.getToken());
      this.player.connect();
    }

  }

  togglePlay() {    
    this.player.togglePlay();
  }
  

  ngOnDestroy() {
    console.log('destroyed');
    this.player.disconnect();
  }

  ngOnInit(): void {
  }
}