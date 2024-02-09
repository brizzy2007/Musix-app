import React, { useState } from 'react';
import ItYours from '../assets/ItYours.mp3';
import Musix4 from '../assets/Musix4.jpg';
import "./Innerpages.css";



const Innerpage_2 = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="text-blue-500 lg:mt-12 lg:ml-12 lg:hidden md:hidden contain">
      <div className="lg:flex lg:gap-36 contain">
        <img src={Musix4} alt="" className="w-auto contain" />
        <div className='ml-2 contain'>
          <h1 className='contain'>
            Omah Lay- It Yours <br /><p>Album: Boy Alone</p>{' '}
          </h1>
          <audio
            controls
            src={ItYours}
            onPlay={togglePlay}
            onPause={togglePlay}
            className="mt-5 appearance-none focus:outline-none contain"
          ></audio>
        </div>
        <button className="font-semibold ml-2 mt-5 contain">
          Buy Album
        </button>
      </div>
    </div>
  );
};

export default Innerpage_2;
