import React, { useState } from "react";
import "./LatestTracks.css";
import ItYours from '../assets/ItYours.mp3';

const LatestTracks = () => {
    const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };


  return (
    <div className="latest-tracks-container">
      <h2>Latest Tracks</h2>
      <div className="tracks-container">
        <div className="track-item">
          <img
            src="https://via.placeholder.com/150x150.png?text=Frando+Kally+Cover"
            alt="Track cover"
          />
          <div className="track-info">
          <audio
            controls
            src={ItYours}
            onPlay={togglePlay}
            onPause={togglePlay}
            className="mt-5 appearance-none focus:outline-none audio"
          ></audio>
            <h3>Track Name 1</h3>
            <p>Frando Kally</p>
            <button className="buy-button">Buy Albam</button>
          </div>
        </div>
        <div className="track-item">
          <img
            src="https://via.placeholder.com/150x150.png?text=Frando+Kally+Cover"
            alt="Track cover"
          />
          <div className="track-info">
          <audio
            controls
            src={ItYours}
            onPlay={togglePlay}
            onPause={togglePlay}
            className="mt-5 appearance-none focus:outline-none audio"
          ></audio>
            <h3>Track Name 2</h3>
            <p>Frando Kally</p>
            <button className="buy-button">Buy Albam</button>
          </div>
        </div>
        <div className="track-item">
            
          <img
            src="https://via.placeholder.com/150x150.png?text=Frando+Kally+Cover"
            alt="Track cover"
          />
          <div className="track-info">
          <audio
            controls
            src={ItYours}
            onPlay={togglePlay}
            onPause={togglePlay}
            className="mt-5 appearance-none focus:outline-none audio"
          ></audio>
            <h3>Track Name ŷ</h3>
            <p>Frando Kally</p>
            <button className="buy-button">Buy Albam</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestTracks;