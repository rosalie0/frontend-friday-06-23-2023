import { useEffect, useState } from "react";

import "./App.css";
import { Playlist } from "../dummyData/types";
import { data } from "../dummyData/data";
import PlaylistComponent from "./components/PlaylistComponent";

function App() {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  useEffect(() => {
    setPlaylists(data.playlists);
  }, []);

  if (!playlists.length) return <>Loading...</>;

  return (
    <>
      <PlaylistComponent playlist={playlists[0]} />
    </>
  );
}

export default App;
