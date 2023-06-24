export interface Song {
  title: string;
  artist: string;
}

export interface Playlist {
  title: string;
  monthlyListenerCount: number;
  songs: Song[];
}
