import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Playlist } from 'src/app/models/playlist';
import { SearchItem } from 'src/app/models/search-item';
import { SpotifyService } from 'src/app/services/api/spotify.service';
import { GameService } from 'src/app/services/game.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-playlist-search',
  templateUrl: './playlist-search.component.html',
  styleUrls: ['./playlist-search.component.less']
})
export class PlaylistSearchComponent implements OnInit {

  playlists: Playlist[] = [];
  searchForm = new FormControl('');

  constructor(private spotify: SpotifyService, private player: PlayerService, private game: GameService) {}
    

  startGame(playList: Playlist) {   
    this.game.loadTrackListForPlayList(playList.id);
  }

  ngOnInit(): void {
    this.spotify.loadMyPlaylists().subscribe((result) => {    
      this.playlists = result.items;
    });
  }

}
