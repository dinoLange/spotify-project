import { Artist } from "./artist";
import { Image } from "./image";
import { Tracks } from "./search-item";
import { Track } from "./track";

export interface Album {
    album_type: string;
    artists: Artist[];
    available_markets: string[];
    external_urls: string[];
    href: string;
    id: string;
    images: Image[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
    tracks: Tracks;
}

