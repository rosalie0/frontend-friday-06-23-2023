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

  const [play, setPlay] = useState(PlayButtonSmall);
  const playToggle = () => {
    if (play === PlayButtonSmall) setPlay(PauseButtonSmall);
    if (play === PauseButtonSmall) setPlay(PlayButtonSmall);
  };

  const [followText, setFollowText] = useState("Follow");
  const isFollowingClassName =
    "bg-white text-black font-bold border border-white rounded-md py-2 px-4 h-12";
  const notFollowingClassName =
    "bg-black text-white font-bold border border-white rounded-md py-2 px-4 h-12";
  const [follow, setFollow] = useState(notFollowingClassName);
  const toggleFollow = () => {
    if (follow === notFollowingClassName) {
      setFollow(isFollowingClassName);
      setFollowText("Following");
    } else {
      setFollow(notFollowingClassName);
      setFollowText("Follow");
    }
  };

  return (
    <div className="bg-black pl-10 pr-6">
      <div className="flex items-center justify-between py-4">
        <button onClick={toggleFollow} className={follow}>
          {followText}
        </button>
        <div className="flex items-center gap-4">
          <div className="cursor-pointer" onClick={toggleShuffleImage}>
            <img src={shuffleImage} />
          </div>
          <img className="cursor-pointer" onClick={playToggle} src={play} />
        </div>
      </div>
      <h2 className="font-bold">Popular</h2>
      {songs.map((song) => (
        <SongComponent song={song} key={song.id} />
      ))}
    </div>
  );
}
