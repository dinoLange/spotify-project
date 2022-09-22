import { Component, OnInit } from '@angular/core';
import { Album, SearchItem, SpotifyService } from 'src/app/api/spotify.service';

@Component({
  selector: 'app-album-search',
  templateUrl: './album-search.component.html',
  styleUrls: ['./album-search.component.less']
})
export class AlbumSearchComponent implements OnInit {
 
  albums: Album[] = [];
  
  constructor(private spotify: SpotifyService) { 

  }
  
  
  search(searchString: string) {   
    this.spotify.albumSearch(searchString).subscribe(
      (result:SearchItem) => {
        console.log("result", result);        
        this.albums = result.albums.albums;
      }
      );
  }

    
  ngOnInit(): void {  }
}
