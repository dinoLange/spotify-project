import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Album } from '../models/album';
import { Track } from '../models/track';
import { SpotifyService } from './api/spotify.service';
import { PlayerService } from './player.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private tracks = new BehaviorSubject<Track[]>([]);

  tracks$ = this.tracks.asObservable();
  currentTrack!: Track;
  
  constructor(private spotify: SpotifyService, private player: PlayerService) { }


  loadTrackList(id: Number, type: string) {
    // switch case other types
    this.spotify.getAlbum(id).subscribe((result:Album) => {    
      // limited to 50 tracks             
      this.tracks.next(result.tracks.items);     
    });
  }

  chooseRandomSong() {
    var tracks = this.tracks.getValue();
    this.currentTrack = tracks[Math.floor(Math.random() * tracks.length)];
  }

  playSong() {
    var position = Math.floor(Math.random() * this.currentTrack.duration_ms)
    if (this.currentTrack) {
      this.player.playTrack(this.currentTrack.uri, position, 1);
    }
  }

}
