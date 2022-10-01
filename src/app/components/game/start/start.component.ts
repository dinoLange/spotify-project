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
  trackSubscription: Subscription;
  listName = '';
  listNameSubscription: Subscription;


  constructor(private game: GameService) { 
    this.trackSubscription = game.tracks$.subscribe(tracks => {
      this.tracks = tracks;      
    })
    this.listNameSubscription = game.listName$.subscribe(listName => {
      this.listName = listName;
    })
  }

  startGame() {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.trackSubscription.unsubscribe();
    this.listNameSubscription.unsubscribe();
  }

}
