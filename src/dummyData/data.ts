import { Song, Playlist } from "./types";

const song1: Song = {
  title: "lofi rain",
  artist: "a girl and a cat",
};
const song2: Song = {
  title: "Atrápalos Ya!",
  artist: "Pokemon",
};
const song3: Song = {
  title: "Catch you Catch me",
  artist: "GUMI",
};
const song4: Song = {
  title: "Shinzo wo Sasageyo!",
  artist: "Linked Horizon",
};
export const playlist: Playlist = {
  title: "a girl and a cat",
  monthlyListenerCount: 661250,
  songs: [song1, song2, song3, song4],
};
