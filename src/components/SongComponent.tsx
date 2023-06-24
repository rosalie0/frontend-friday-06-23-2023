import { Song } from "../../dummyData/types";
import HeartFilledSmall from "../assets/Heart Filled Small.png";
import HeartUnfilledSmall from "../assets/Heart Unfilled Small.png";

import SeeMore from "../assets/see-more.png";
import SeeMoreMedium from "../assets/see-more Medium.png";

interface SongProps {
  song: Song;
}

export default function SongComponent({ song }: SongProps) {
  const altText = `Album Art for ${song.title}`;
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex">
        <img src={song.image} alt={altText} />
        <div className="flex flex-col px-2">
          <p className="font-bold">{song.title}</p>
          <p>{song.artist}</p>
        </div>
      </div>
      <div className="flex items-center">
        <img src={HeartFilledSmall} />
        <img src={SeeMore} />
      </div>
    </div>
  );
}
