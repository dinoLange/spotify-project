import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/api/spotify.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.less']
})
export class PlayerComponent implements OnInit, OnDestroy {
  currentTrack!: String;

  constructor(private spotify: SpotifyService, private player: PlayerService, private ngZone: NgZone ) { 
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);
    window.onSpotifyWebPlaybackSDKReady = () => {
      this.player.initSpotifyWebPlayer(this.spotify.getToken());
      this.player.connect();
    }

    this.player.currentTrack.subscribe(currentTrack => {
      this.ngZone.run( () => {
        this.currentTrack = currentTrack.name;
     });
    });
  }

  previousTrack() {
    this.player.previousTrack();
  }

  togglePlay() {    
    this.player.togglePlay();
  }

  nextTrack() {
    this.player.nextTrack();
  }
  

  ngOnDestroy() {
    console.log('destroyed');
    this.player.disconnect();
  }

  ngOnInit(): void {
  }
}