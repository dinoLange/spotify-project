import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import {FormControl} from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { Router } from '@angular/router';

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
  guessNumber = 0;
  guesses: string[] = [];

  constructor(private game: GameService, private router: Router) { 
    this.game.tracks$.subscribe(tracks => {
      this.options = tracks.map(function (track) {
        return track.name;
      });
    });
  }

  ngOnInit(): void {    
    this.filteredOptions = this.trackGuess.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

    this.game.chooseRandomSong();
    this.game.playSong();
    this.guessNumber = 0;
    this.guesses = [];
  }

  playAgain(): void {
    this.game.playSongAgain();
  }


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  skipTry() {
    this.game.skip()
    this.guesses[this.guessNumber] = '    skipped';
    this.guessNumber++;
    if (this.guessNumber > 4) {
      this.router.navigateByUrl('/game/finish');
    }
  }
  
  checkGuess() {
    if (this.trackGuess.getRawValue() === this.game.currentTrack.name) {
      this.game.correctGuess();    
      this.router.navigateByUrl('/game/finish');
    } else {
      this.game.incorrectGuess();
      this.guesses[this.guessNumber] = '[X] ' + this.trackGuess.getRawValue();
      this.guessNumber++;
    }
    this.trackGuess.setValue('')
   
    if (this.guessNumber > 4) {
      this.router.navigateByUrl('/game/finish');
    }
  }

}
