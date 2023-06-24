import { Playlist } from "../../dummyData/types";
import BackSmall from "../assets/Back Small.png";
//import BackMedium from "../assets/Back Medium.png";

interface PlaylistBannerProps {
  playlist: Playlist;
}

export default function PlaylistBanner({ playlist }: PlaylistBannerProps) {
  return (
    <div className="bg-black">
      <div className="relative">
        <img
          className="absolute left-0 top-0 m-6 cursor-pointer"
          src={BackSmall}
          alt="Back button"
        />
        <img className="block object-cover w-full" src={playlist.image} />
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center font-extrabold text-[13vw] mb-4">
          <h1>{playlist.title}</h1>
        </div>
      </div>
      <p className=" mx-4 px-4 pt-4">
        {playlist.monthlyListenerCount.toLocaleString("en-US")} monthly
        listeners
      </p>
    </div>
  );
}
//
