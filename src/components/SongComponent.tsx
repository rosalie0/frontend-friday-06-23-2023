import { Song } from "../../dummyData/types";

interface SongProps {
  song: Song;
}

export default function SongComponent({ song }: SongProps) {
  const altText = `Album Art for ${song.title}`;
  return (
    <div>
      <p>{song.title}</p>
      <p>{song.artist}</p>
      <img src={song.image} alt={altText} />
    </div>
  );
}
