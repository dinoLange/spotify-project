import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import {FormControl} from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.less']
})
export class PlayComponent implements OnInit {

  guessResult = '';
  trackGuess = new FormControl('');
  options!: string[];
  filteredOptions!: Observable<string[]>;

  constructor(private game: GameService) { 
    this.game.tracks$.subscribe(tracks => {
      this.options = tracks.map(function (track) {
        return track.name;
      });
    });
  }

  playAgain(): void {
    this.game.playSongAgain();
  }

  ngOnInit(): void {
    
    this.filteredOptions = this.trackGuess.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

    this.game.chooseRandomSong();
    this.game.playSong();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  skip() {
    this.game.skip()
  }
  
  checkGuess() {
    if (this.trackGuess.getRawValue() === this.game.currentTrack.name) {
      this.guessResult = 'you are correct';      
    } else {
      this.guessResult = 'WRONG!';      
    }
  }

}
