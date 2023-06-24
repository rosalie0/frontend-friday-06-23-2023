import PlaylistBanner from "./PlaylistBanner";
import SongList from "./SongList";
import { Playlist } from "../../dummyData/types";

interface PlaylistComponentProps {
  playlist: Playlist;
}

export default function PlaylistComponent({
  playlist,
}: PlaylistComponentProps) {
  return (
    <div>
      <PlaylistBanner playlist={playlist} />
      <SongList songs={playlist.songs} />
    </div>
  );
}
