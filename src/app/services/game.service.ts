import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Album } from '../models/album';
import { Image } from '../models/image';
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
  private listImage = new Subject<Image>();
  listImage$ = this.listImage.asObservable();

  currentTrack!: Track;
  position: number = 0;
  duration: number = 1;
  guessedCorrect: boolean = false;

  lastTracks: Track[] = [];
  


  constructor(private spotify: SpotifyService, private player: PlayerService) { }


  loadTrackListForAlbum(id: string) {    
    this.spotify.getAlbum(id).subscribe((result:Album) => {    
      // limited to 50 tracks 
      result.tracks.items = this.filterSuffix(result.tracks.items);
      
      this.tracks.next(result.tracks.items);     
      this.listName.next(result.name); 
      this.listImage.next(result.images[0])    
    });
  }

  loadTrackListForPlayList(id: string) {    
    this.spotify.getPlaylist(id).subscribe((result:Playlist) => {    
      // limited to 50 tracks             
      var items: Item[] = result.tracks.items;
      var tracks = items.map(function(item) {
        return item.track
      });  
      this.tracks.next(this.filterSuffix(tracks));           
      this.listName.next(result.name); 
      this.listImage.next(result.images[0])        
    });
  } 
  
  filterSuffix(tracks: Track[]): Track[] {
    const regex = / - Remastered [0-9]+/;
    tracks.forEach(track => track.name = track.name.replace(regex, ''));
    return tracks;
  }

  chooseRandomSong() {
    var tracks = this.tracks.getValue();
    this.duration = 1;
    var chosenTrack = tracks[Math.floor(Math.random() * tracks.length)];
    
    if (this.lastTracks.includes(chosenTrack)) {
      this.chooseRandomSong();
    } else {
      this.rememberLastSong(chosenTrack);
      this.currentTrack = chosenTrack;
    }  
  }

  rememberLastSong(chosenTrack: Track) {
    this.lastTracks.push(chosenTrack);
    if (this.lastTracks.length > 5) {
      this.lastTracks.shift();
    }
  }

  playSong() {
    this.chooseRandomPosition();
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

  playSongFromBeginning() {
    if (this.currentTrack) {
      this.player.playCurrentTrack(0, 0)
    }
  }

  skip() {
    this.chooseRandomPosition();
    this.duration += 1;
    if (this.currentTrack) {
      this.player.playCurrentTrack(this.position, this.duration)
    }  
  }

  chooseRandomPosition() {
    this.position =  Math.floor(this.randomIntFromInterval(0.1, 0.8) * this.currentTrack.duration_ms);
  }

  randomIntFromInterval(min: number, max: number): number { 
    return Math.random() * (max - min) + min
  }

  correctGuess() {
    this.guessedCorrect = true;    
  }

  incorrectGuess() {
    this.guessedCorrect = false;
    this.skip();
  }

}


