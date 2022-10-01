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

  constructor(private game: GameService) { }


  ngOnInit(): void {
    this.track = this.game.currentTrack;
  }

}
