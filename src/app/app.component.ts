import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album, SearchItem, SpotifyService } from './api/spotify.service';

class Params {
  access_token: string|undefined;
  token_type: string|undefined;
  expires_in: string|undefined; 
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title: String = 'Spotify';
  
  albums: Album[] = [];
  access_token: string|undefined;
  
  constructor(private spotify: SpotifyService, private route: ActivatedRoute ) { 

  }

  search(searchString: string) {
    if (!this.access_token) {      
      this.login();
    } else {      
      this.spotify.albumSearch(searchString, this.access_token).subscribe(
        (result:SearchItem) => {
          console.log("result", result);        
          this.albums = result.albums.albums;
        }
      );

    }
  }

  login() {
    var client_id = '1ec6cb1a181e47368d762606d2851929'; // Your client id
    var redirect_uri = 'http://localhost:8888'; // Your redirect uri

    // var state = generateRandomString(16);
    // localStorage.setItem(stateKey, state);
    var scope = 'user-read-private user-read-email';

    var url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    // url += '&state=' + encodeURIComponent(state);
    location.href = url;
  }

  ngOnInit() {
    var result = this.getParams();
    this.access_token = result.access_token;
  }
  


  private getParams() {
    var hash = window.location.hash.substring(1);
    var params:Params = new Params;
    for (var value of hash.split('&')) {
      var parts = value.split('=');
      if (parts[0] === 'access_token') {
        params.access_token = parts[1];
      }
      if (parts[0] === 'expires_in') {
        params.expires_in = parts[1];
      }
      if (parts[0] === 'token_type') {
        params.token_type = parts[1];
      }
    }
    return params;
  }
}
