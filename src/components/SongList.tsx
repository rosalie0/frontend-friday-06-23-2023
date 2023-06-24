import { Song } from "../../dummyData/types";
import SongComponent from "./SongComponent";

interface SongListProps {
  songs: Song[];
}
export default function SongList({ songs }: SongListProps) {
  return (
    <div>
      <h2>Popular</h2>
      {songs.map((song) => (
        <SongComponent song={song} key={song.id} />
      ))}
    </div>
  );
}
