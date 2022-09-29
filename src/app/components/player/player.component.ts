import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription, timer } from 'rxjs';
import { SpotifyService } from 'src/app/services/api/spotify.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.less']
})
export class PlayerComponent implements OnInit, OnDestroy {
  currentTrack!: String;
  progressValue = 0;
  bufferValue = 0;
  trackDuration!: number;

  timer;

  progressSubscription: Subscription | undefined;
  paused: Boolean = true;

  constructor(private player: PlayerService, private ngZone: NgZone ) { 
     player.position$.subscribe(position => {
      this.progressValue = (position.valueOf()/this.trackDuration) * 100;
     // this.bufferValue = ((position.valueOf() + 1000)/this.trackDuration) * 100;
    });

    player.paused$.subscribe(paused => {
      this.paused = paused;
    })

    player.currentTrack$.subscribe(currentTrack => {
      this.ngZone.run(() => {
        this.currentTrack = currentTrack.name;
        this.trackDuration = currentTrack.duration_ms;
     });
    });

    this.timer = timer(0, 1000);
    this.timer.subscribe((t) => {
      if (!this.paused) {
        this.progressValue++;
      }
    })
  }

  previousTrack() {
    this.player.previousTrack();
  }

  togglePlay() {    
    this.player.togglePlay();
  }

  nextTrack() {
    this.player.nextTrack();
  }
  

  ngOnDestroy() {
    console.log('destroyed');
    this.player.disconnect();
  }

  ngOnInit(): void {
  }
}