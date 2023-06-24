import { Song } from "../../dummyData/types";
import HeartFilledSmall from "../assets/Heart Filled Small.png";
import HeartUnfilledSmall from "../assets/Heart Unfilled Small.png";

import SeeMore from "../assets/see-more.png";
//import SeeMoreMedium from "../assets/see-more Medium.png";
import { useState } from "react";

interface SongProps {
  song: Song;
}

export default function SongComponent({ song }: SongProps) {
  const [heart, setHeart] = useState(HeartUnfilledSmall);
  const heartToggle = () => {
    if (heart === HeartUnfilledSmall) setHeart(HeartFilledSmall);
    if (heart === HeartFilledSmall) setHeart(HeartUnfilledSmall);
  };
  const altText = `Album Art for ${song.title}`;
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex">
        <img src={song.image} alt={altText} />
        <div className="flex flex-col px-4">
          <p className="font-bold">{song.title}</p>
          <p>{song.artist}</p>
        </div>
      </div>
      <div className="flex items-center">
        <img className="cursor-pointer" onClick={heartToggle} src={heart} />
        <img className="cursor-pointer" src={SeeMore} />
      </div>
    </div>
  );
}
