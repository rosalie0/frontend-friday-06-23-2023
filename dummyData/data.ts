import { Song, Playlist } from "./types";
import image1 from "./songArt/image1.png";
import image2 from "./songArt/image2.png";
import image3 from "./songArt/image3.png";
import image4 from "./songArt/image4.png";
import imagePlaylist1 from "./songArt/image1-medium.png";
const song1: Song = {
  title: "lofi rain",
  artist: "a girl and a cat",
  id: 1,
  image: image1,
};
const song2: Song = {
  title: "Atrápalos Ya!",
  artist: "Pokemon",
  id: 2,
  image: image2,
};
const song3: Song = {
  title: "Catch you Catch me",
  artist: "GUMI",
  id: 3,
  image: image3,
};
const song4: Song = {
  title: "Shinzo wo Sasageyo!",
  artist: "Linked Horizon",
  id: 4,
  image: image4,
};

const playlist1: Playlist = {
  title: "a girl and a cat",
  monthlyListenerCount: 661250,
  songs: [song1, song2, song3, song4],
  id: 1,
  image: imagePlaylist1,
};

export const data = { playlists: [playlist1] };
