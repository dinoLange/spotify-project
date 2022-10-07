import { Track } from "./track";
import { Image } from "./image";

export interface Playlist {
    id: string;
    uri: string;

    name: string;
    tracks: Tracks;
    images: Image[];

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

export interface Item {
    is_local: boolean;
    primary_color?: any;
    track: Track;
}
