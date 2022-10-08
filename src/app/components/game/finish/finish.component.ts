import { Component, OnInit } from '@angular/core';
import { Track } from 'src/app/models/track';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.less']
})
export class FinishComponent implements OnInit {
  track!: Track;
  guessedCorrectly = false;

  constructor(private game: GameService) { }


  ngOnInit(): void {
    this.guessedCorrectly = this.game.guessedCorrect
    this.track = this.game.currentTrack;
    this.game.playSongFromBeginning();
  }

}
