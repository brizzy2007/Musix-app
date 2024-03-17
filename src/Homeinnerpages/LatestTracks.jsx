import React, { useEffect, useState } from "react";
import "./LatestTracks.css";
import Soso from '../assets/Soso.mp3';
import Joker from '../assets/Joker.mp3';
import ComeCloser from '../assets/ComeCloser.mp3';
import HolyGhost from '../assets/HolyGhost.mp3';
import AlbumPic from '../assets/AlbumPic.webp';
import AlbumPic2 from '../assets/AlbumPic2.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';


const LatestTracks = () => {
  useEffect(() => {
    console.log('AOS initialization started');
    AOS.init({
      duration: 1000, // You can adjust the duration as needed
      // once: true, // Animation will only happen once
    });
  }, []);
    const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };


  return (
    <div className="bg-[#f0f0f0]">
    <div className="latest-tracks-container">
      <h2 className="text-center text-4xl font-semibold mt-16">Latest Tracks</h2>
      <div className="tracks-container mt-10">
        <div className="track-item shadow-2xl" data-aos="fade-up">
          <img
            src={AlbumPic2}
            alt="Track cover"
          />
          <div className="track-info">
          <audio
            controls
            src={ComeCloser}
            onPlay={togglePlay}
            onPause={togglePlay}
            className="mt-5 appearance-none focus:outline-none audio custom-audio"
          ></audio>
            <h3>Omah Lay</h3>
            <p>Come Closer</p>
            <button className="buy-button">Buy Album</button>
          </div>
        </div>
        <div className="track-item shadow-2xl" data-aos="fade-up">
          <img
            src={AlbumPic2}
            alt="Track cover"
          />
          <div className="track-info">
          <audio
            controls
            src={HolyGhost}
            onPlay={togglePlay}
            onPause={togglePlay}
            className="mt-5 appearance-none focus:outline-none audio custom-audio"
          ></audio>
            <h3>Omah Lay</h3>
            <p>Holy Ghost</p>
            <button className="buy-button">Buy Album</button>
          </div>
        </div>
        <div className="track-item shadow-2xl" data-aos="fade-up">
            
          <img
            src={AlbumPic2}
            alt="Track cover"
          />
          <div className="track-info">
          <audio
            controls
            src={Soso}
            onPlay={togglePlay}
            onPause={togglePlay}
            className="mt-5 appearance-none focus:outline-none audio custom-audio"
          ></audio>
            <h3>Omah Lay</h3>
            <p>Soso</p>
            <button className="buy-button">Buy Album</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LatestTracks;