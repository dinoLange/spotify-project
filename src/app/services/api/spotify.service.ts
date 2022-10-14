import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
 
  constructor(private http: HttpClient) {} 
  
  headers: HttpHeaders|undefined;
  access_token: string = '';

  apiBase = 'https://api.spotify.com/v1';

  public albumSearch(searchString: string) {
    var url = this.apiBase + '/search?q=' + searchString + '&type=album';
    return this.getCall(url);
  }

  public loadMyPlaylists() {
    var url = this.apiBase + '/me/playlists';
    return this.getCall(url);
  }

  public getAlbum(albumId: string) {
    var url = this.apiBase + '/albums/' + albumId;
    return this.getCall(url);
  }

  public getPlaylist(playlistId: string) {
    var url = this.apiBase + '/playlists/' + playlistId;
    return this.getCall(url);
  }

  public getTrackDetails(trackId: string) {
    var url = this.apiBase + '/tracks/' + trackId;
    return this.getCall(url);
  } 

  private getCall(url: string) {  
    if (!this.headers) {      
        this.login();
        return EMPTY;
    } else {   
        return this.http.get<any>(url, { 'headers': this.headers });
    }
  }

  playTrack(uri: string, device_id: string, position: number) { 
    var playUrl = 'https://api.spotify.com/v1/me/player/play?device_id=' + device_id;
    var body = JSON.stringify({ uris: [uri], position_ms: position });
    return this.http.put<any>(playUrl, body, { 'headers': this.headers });
  }

  playContext(context_uri: string, device_id: string) {
    var url = 'https://api.spotify.com/v1/me/player/play?device_id=' + device_id;
    var body = JSON.stringify({ context_uri: context_uri });
    this.http.put<any>(url, body, { 'headers': this.headers }).subscribe();  
  }

  

  login() {
    var client_id = '1ec6cb1a181e47368d762606d2851929'; // Your client id
    var redirect_uri = isDevMode() ? 'http://localhost:8888/callback' : 'https://dinolange.github.io/spotify-project/callback'; // Your redirect uri

    // var state = generateRandomString(16);
    // localStorage.setItem(stateKey, state);
    var scope = 'streaming user-read-private user-read-email user-read-playback-state';

    var url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    // url += '&state=' + encodeURIComponent(state);
    
    location.href = url;       
  }

  setAccessToken(access_token: string) {
    this.access_token = access_token;
    this.headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer ' + access_token);
  }

  getToken(): string {    
    if (!this.access_token) {
      this.login();
      return '';
    } else {
      return this.access_token;
    }
  }

  getAvailableDevices() {
    var playUrl = 'https://api.spotify.com/v1/me/player/devices';
    return this.http.get<any>(playUrl, {'headers': this.headers});
  }

}