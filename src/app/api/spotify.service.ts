import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';

export interface Item {
}

export interface Tracks {
    href: string;
    items: Item[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
}

export interface Item2 {
}

export interface Artists {
    href: string;
    items: Item2[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
}

export interface Album {
}

export interface Albums {
    href: string;
    albums: Album[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
}

export interface Item4 {
}

export interface Playlists {
    href: string;
    items: Item4[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
}

export interface Item5 {
}

export interface Shows {
    href: string;
    items: Item5[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
}

export interface Item6 {
}

export interface Episodes {
    href: string;
    items: Item6[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
}

export interface SearchItem {
    tracks: Tracks;
    artists: Artists;
    albums: Albums;
    playlists: Playlists;
    shows: Shows;
    episodes: Episodes;
}



@Injectable({
  providedIn: 'root',
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('constructed spotify-service');
    
  }

  headers: HttpHeaders|undefined;

  apiBase = 'https://api.spotify.com/v1';

  public albumSearch(searchString: String,) {
    var url = this.apiBase + "/search?q=" + searchString + "&type=album";
    return this.apiCall(url);

  }

  private apiCall(url: string) {  
    if (!this.headers) {      
        this.login();
        return EMPTY;
    } else {   
        return this.http.get<any>(url, { 'headers': this.headers });
    }
  }

  login() {
    console.log('start login');

    var client_id = '1ec6cb1a181e47368d762606d2851929'; // Your client id
    var redirect_uri = 'http://localhost:8888/callback'; // Your redirect uri

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

  setAccessToken(access_token: string) {
    this.headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer ' + access_token);
  }

}