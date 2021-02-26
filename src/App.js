import React, { useState } from "react";
// components
import Player from "./components/Player";
import Song from "./components/Song";
// styles
import "./styles/app.scss";
// imort util
import data from "./util";

const App = () => {
  // state

  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[5]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
      />
    </div>
  );
};

export default App;
