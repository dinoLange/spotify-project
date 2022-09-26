import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/api/spotify.service';
import { Album } from 'src/app/models/album';
import { Track } from 'src/app/models/track';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {


  constructor(private route: ActivatedRoute, private game: GameService) { 

  }

  ngOnInit(): void {
    var id: Number = this.route.snapshot.params['id'];
    var type: string = this.route.snapshot.params['type'];
    this.game.loadTrackList(id, type);
  }



 
}


