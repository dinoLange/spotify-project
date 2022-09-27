import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { SpotifyService } from './api/spotify.service';
import { Album } from '../models/album';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {


  player!: Spotify.Player;
  device_id!: string;
  currentTrack: Subject<Spotify.Track> = new Subject<Spotify.Track>();
  currentTrack$: Observable<Spotify.Track> = this.currentTrack.asObservable();
  forcePause = false;
  forcePauseCounter = 0;

  constructor(private spotify: SpotifyService) { }


  initTrack(uri: string) {
    this.forcePause = true;
    this.spotify.playTrack(uri, this.device_id, 0).subscribe(() => {}); 
    console.log('init track');
       
  }


  playCurrentTrack(position: number, duration: number) {
    this.player.seek(position);
    this.player.resume();
    
    setTimeout(() => 
      {
        this.player.pause();
      },
      duration*1000
    );
  }

  playAlbum(uri: string) {
    this.spotify.playContext(uri, this.device_id);
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
      this.currentTrack.next(current_track);
      var next_track = state.track_window.next_tracks[0];
      
    });

    this.player.addListener('player_state_changed', ({
      track_window: {current_track}
    }) => {    
      this.currentTrack.next(current_track);
    });

    this.player.addListener('player_state_changed', ({paused}) => {
      if (this.forcePause && !paused) {
        this.forcePauseCounter++;
      }
      if (this.forcePause && this.forcePauseCounter == 3) {
        this.player.pause();
        this.forcePause = false;
        this.forcePauseCounter = 0; 
      }            
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

  nextTrack() {
    this.player.nextTrack();
  }

  previousTrack() {
    this.player.previousTrack();
  }

}
