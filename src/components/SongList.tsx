import { Song } from "../../dummyData/types";
import SongComponent from "./SongComponent";
import PlayButtonSmall from "../assets/Play Button Small.png";
import PauseButtonSmall from "../assets/Pause Button Small.png";
import PlayButtonMedium from "../assets/Play Button Medium.png";
import PauseButtonMedium from "../assets/Pause Button Medium.png";

import ShuffleUnselectedSmall from "../assets/Shuffle Unselected Small.svg";
import ShuffleSelectedSmall from "../assets/Shuffle Selected Small.svg";
import ShuffleUnselectedMedium from "../assets/Shuffle Unselected Medium.svg";
import ShuffleSelectedMedium from "../assets/Shuffle Selected Medium.svg";
import { useState } from "react";
interface SongListProps {
  songs: Song[];
}
export default function SongList({ songs }: SongListProps) {
  const [shuffleImage, setShuffleImage] = useState(ShuffleUnselectedSmall);
  const toggleShuffleImage = () => {
    if (shuffleImage === ShuffleUnselectedSmall)
      setShuffleImage(ShuffleSelectedSmall);
    if (shuffleImage === ShuffleSelectedSmall)
      setShuffleImage(ShuffleUnselectedSmall);
    if (shuffleImage === ShuffleUnselectedMedium)
      setShuffleImage(ShuffleSelectedMedium);
    if (shuffleImage === ShuffleSelectedMedium)
      setShuffleImage(ShuffleUnselectedMedium);
  };

  return (
    <div className="bg-black px-10">
      <div className="flex items-center justify-between py-4">
        <button className="bg-black font-bold border border-white rounded-md py-2 px-4 h-12">
          Follow
        </button>
        <div className="flex items-center gap-4">
          <div className="cursor-pointer" onClick={toggleShuffleImage}>
            <img src={shuffleImage} />
          </div>
          <img src={PlayButtonSmall} />
        </div>
      </div>
      <h2 className="font-bold">Popular</h2>
      {songs.map((song) => (
        <SongComponent song={song} key={song.id} />
      ))}
    </div>
  );
}
