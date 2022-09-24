import { Injectable } from '@angular/core';
import { SpotifyService } from '../api/spotify.service';
import { Album } from '../models/album';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  player!: Spotify.Player;
  device_id!: string;

  constructor(private spotify: SpotifyService) { }

  play(album: Album) {    
    this.spotify.play(album.uri, this.device_id);
  }



  initSpotifyWebPlayer(token: string) {
    this.player = new Spotify.Player({
      name: 'Web Playback SDK Quick Start Player',
      getOAuthToken: cb => { cb(token); },
      volume: 0.5
    });

    // Ready
    this.player.addListener('ready', ({ device_id }) => {
      this.device_id = device_id;
      console.log('Ready with Device ID', device_id);
    });

    // Not Ready
    this.player.addListener('not_ready', ({ device_id }) => {
      console.log('Device ID has gone offline', device_id);
    });

    this.player.addListener('initialization_error', ({ message }) => {
      console.error(message);
    });

    this.player.addListener('authentication_error', ({ message }) => {
      console.error(message);
    });

    this.player.addListener('account_error', ({ message }) => {
      console.error(message);
    });

    this.player.getCurrentState().then(state => {
      if (!state) {
        console.error('User is not playing music through the Web Playback SDK');
        return;
      }
    
      var current_track = state.track_window.current_track;
      var next_track = state.track_window.next_tracks[0];
    
      console.log('Currently Playing', current_track);
      console.log('Playing Next', next_track);
    });

    this.player.addListener('player_state_changed', ({
      position,
      duration,
      track_window: { current_track }
    }) => {
      console.log('Currently Playing', current_track);
      console.log('Position in Song', position);
      console.log('Duration of Song', duration);
    });

  }

  connect() {
    this.player.connect();
  }

  disconnect() {
    this.player.disconnect();
  }

  togglePlay() {
    this.player.togglePlay();
  }
}
