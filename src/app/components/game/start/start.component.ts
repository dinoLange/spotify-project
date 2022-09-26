import { Component, OnDestroy, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Subscription } from 'rxjs';
import { Track } from 'src/app/models/track';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.less']
})
export class StartComponent implements OnInit, OnDestroy {

  tracks!: Track[];
  subscription: Subscription;

  constructor(private game: GameService) { 
    this.subscription = game.tracks$.subscribe(tracks => {
      this.tracks = tracks;      
    })
  }

  startGame() {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
