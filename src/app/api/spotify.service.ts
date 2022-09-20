import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  apiBase = 'https://api.spotify.com/v1';

  public albumSearch(searchString: String, access_token: String) {
    var url = this.apiBase + "/search?q=" + searchString + "&type=album";
    const headers= new HttpHeaders()
    .set('Authorization', 'Bearer ' + access_token)
    .set('Content-Type', 'application/json')
    return this.http.get<any>(url, { 'headers': headers });
  }

}