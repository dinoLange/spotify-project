import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Album } from '../models/album';
import { Playlist, Item } from '../models/playlist';
import { Track } from '../models/track';
import { SpotifyService } from './api/spotify.service';
import { PlayerService } from './player.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {


  private tracks = new BehaviorSubject<Track[]>([]);
  tracks$ = this.tracks.asObservable();
  private listName = new BehaviorSubject<string>('');
  listName$ = this.listName.asObservable();

  currentTrack!: Track;
  position: number = 0;
  duration: number = 1;
  guessedCorrect: boolean = false;
  


  constructor(private spotify: SpotifyService, private player: PlayerService) { }


  loadTrackListForAlbum(id: string) {    
    this.spotify.getAlbum(id).subscribe((result:Album) => {    
      // limited to 50 tracks             
      this.tracks.next(result.tracks.items);     
      this.listName.next(result.name);     
    });
  }

  loadTrackListForPlayList(id: string) {    
    this.spotify.getPlaylist(id).subscribe((result:Playlist) => {    
      console.log('getPlaylist', result);
      
      // limited to 50 tracks             
      var items: Item[] = result.tracks.items;
      this.tracks.next(
        items.map(function(item) {
          return item.track
        }));     
      this.listName.next(result.name);     
    });
  }

  chooseRandomSong() {
    var tracks = this.tracks.getValue();
    this.duration = 1;
    this.currentTrack = tracks[Math.floor(Math.random() * tracks.length)];
  }

  playSong() {
    this.position = Math.floor(Math.random() * this.currentTrack.duration_ms)
    if (this.currentTrack) {
      this.player.initTrack(this.currentTrack.uri);
      setTimeout(() => {
        this.playSongAgain();
      }, 1000)
    }
  }

  playSongAgain() {
    if (this.currentTrack) {
      this.player.playCurrentTrack(this.position, this.duration)
    }
  }

  skip() {
    this.position = Math.floor(Math.random() * this.currentTrack.duration_ms)
    this.duration += 1;
    if (this.currentTrack) {
      this.player.playCurrentTrack(this.position, this.duration)
    }  
  }

  correctGuess() {
    this.guessedCorrect = true;
    
  }

  incorrectGuess() {
    this.guessedCorrect = false;
    this.skip();
  }


}
