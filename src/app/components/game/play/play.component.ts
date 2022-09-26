import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.less']
})
export class PlayComponent implements OnInit {

  constructor(private game: GameService) { }

  playAgain(): void {
    this.game.playSong();
  }

  ngOnInit(): void {
    this.game.chooseRandomSong();
    this.game.playSong();
  }

}
