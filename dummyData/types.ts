export interface Song {
  title: string;
  artist: string;
  id: number;
  image: string;
}

export interface Playlist {
  title: string;
  monthlyListenerCount: number;
  songs: Song[];
  id: number;
  image: string;
}
