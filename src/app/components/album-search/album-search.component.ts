import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SpotifyService } from 'src/app/services/api/spotify.service';
import { Album } from 'src/app/models/album';
import { SearchItem } from 'src/app/models/search-item';
import { PlayerService } from 'src/app/services/player.service';
import { FormControl } from '@angular/forms';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-album-search',
  templateUrl: './album-search.component.html',
  styleUrls: ['./album-search.component.less']
})
export class AlbumSearchComponent implements OnInit {


  albums: Album[] = [];
  searchForm = new FormControl('');

  constructor(private spotify: SpotifyService, private player: PlayerService, private game: GameService) { 

  }
  
  
  search() {   
    if (this.searchForm.getRawValue() != null) {
      console.log('search', this.searchForm.getRawValue());
      
      this.spotify.albumSearch(this.searchForm.getRawValue()!).subscribe(
        (result:SearchItem) => {
          console.log("result", result.albums);        
          this.albums = result.albums.items;
        }
      );
    }
  }

  play(album: Album) {
    this.player.playAlbum(album.uri);
  }

  startGame(album: Album) {   
    this.game.loadTrackList(album.id, 'album');
  }
    
  ngOnInit(): void {  }
}
