import { Playlist } from "../../dummyData/types";

interface PlaylistBannerProps {
  playlist: Playlist;
}

export default function PlaylistBanner({ playlist }: PlaylistBannerProps) {
  return (
    <div>
      <img src={playlist.image} />
      <h1>{playlist.title}</h1>
      <p>{playlist.monthlyListenerCount} monthly listeners</p>
    </div>
  );
}
