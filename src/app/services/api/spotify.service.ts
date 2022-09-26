import { Injectable } from '@angular/core';
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

  public albumSearch(searchString: String,) {
    var url = this.apiBase + "/search?q=" + searchString + "&type=album";
    return this.apiCall(url);
  }

  public getAlbum(albumId: Number) {
    var url = this.apiBase + "/albums/" + albumId;
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

  playTrack(uri: string, device_id: string, position: number, duration: number) { 
    var playUrl = 'https://api.spotify.com/v1/me/player/play?device_id=' + device_id;
    var body = JSON.stringify({ uris: [uri], position_ms: position });
    return this.http.put<any>(playUrl, body, { 'headers': this.headers });
    // setTimeout(() => 
    // {
    //   var pauseUrl = 'https://api.spotify.com/v1/me/player/pause?device_id=' + device_id;
    //   this.http.put<any>(pauseUrl, {}, { 'headers': this.headers }).subscribe();

    // },
    // duration*1000);
  }

  playContext(context_uri: string, device_id: string) {
    var url = 'https://api.spotify.com/v1/me/player/play?device_id=' + device_id;
    var body = JSON.stringify({ context_uri: context_uri });
    this.http.put<any>(url, body, { 'headers': this.headers }).subscribe();  
  }

  

  login() {
    console.log('start login');

    var client_id = '1ec6cb1a181e47368d762606d2851929'; // Your client id
    var redirect_uri = 'http://localhost:8888/callback'; // Your redirect uri

    // var state = generateRandomString(16);
    // localStorage.setItem(stateKey, state);
    var scope = 'streaming user-read-private user-read-email';

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

}