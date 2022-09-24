import { Album } from "./album";
import { Artist } from "./artist";
import { Playlist } from "./playlist";
import { Track } from "./track";



export interface Tracks {
    href: string;
    items: Track[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
}

export interface Artists {
    href: string;
    items: Artist[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
}



export interface Albums {
    href: string;
    items: Album[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
}

export interface Playlists {
    href: string;
    items: Playlist[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
}

export interface Show {
}

export interface Shows {
    href: string;
    items: Show[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
}

export interface Episode {
}

export interface Episodes {
    href: string;
    items: Episode[];
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

