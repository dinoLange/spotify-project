import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album';
import { Image } from 'src/app/models/image';
import { Track } from 'src/app/models/track';
import { SpotifyService } from 'src/app/services/api/spotify.service';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.less']
})
export class FinishComponent implements OnInit {
  track!: Track;
  guessedCorrectly = false;
  album!: Album;

  constructor(private game: GameService, private spotify: SpotifyService) { }


  ngOnInit(): void {
    this.guessedCorrectly = this.game.guessedCorrect
    this.track = this.game.currentTrack;
    this.game.playSongFromBeginning();

    this.spotify.getTrackDetails(this.track.id).subscribe((result:any) => {    
      this.album = result.album;
    });
  
  }

}

