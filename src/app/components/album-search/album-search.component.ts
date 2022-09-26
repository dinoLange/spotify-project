import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SpotifyService } from 'src/app/services/api/spotify.service';
import { Album } from 'src/app/models/album';
import { SearchItem } from 'src/app/models/search-item';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-album-search',
  templateUrl: './album-search.component.html',
  styleUrls: ['./album-search.component.less']
})
export class AlbumSearchComponent implements OnInit {

  albums: Album[] = [];
  
  constructor(private spotify: SpotifyService, private player: PlayerService) { 

  }
  
  
  search(searchString: string) {   
    this.spotify.albumSearch(searchString).subscribe(
      (result:SearchItem) => {
        console.log("result", result.albums);        
        this.albums = result.albums.items;
      }
    );
  }

  play(album: Album) {
    this.player.playAlbum(album.uri);
  }
    
  ngOnInit(): void {  }
}
