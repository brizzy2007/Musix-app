import React, { useState } from 'react';
import Musix2 from '../assets/Musix2.jpg';
import Musix4 from '../assets/Musix4.jpg'
import ItYours from '../assets/ItYours.mp3'


const Innerpage_1 = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
  setIsPlaying(!isPlaying);
  };
  return (
    <div className="relative">


      <img src={Musix2} alt="" className="w-full h-auto filter brightness-1" />

      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">

        <h1 className="hidden sm:block  lg:text-9xl md:text-6xl mt-8 md:mt-12 lg:mt-16 font-semibold">
          Musician
        </h1>

        <div className='bottom-28'>
        <div className='absolute  lg:top-96 lg:flex lg:gap-36 md:flex md:gap-10 md:top-44 md:-left-20'>
        <img src={Musix4} alt="" className='hidden sm:block'/>

        <div className='md:absolute md:top-16 md:left-36 lg:static lg:top-auto lg:left-auto'>
            <h1 className='relative lg:-left-14 lg:top-8 font-semibold hidden sm:block'>Omah Lay- It yours<p>Album:Boy alone</p> </h1>
      <audio
        controls
        src={ItYours}
        onPlay={togglePlay}
        onPause={togglePlay}
        className='lg:mt-12 ml-10 hidden sm:block'>
        </audio>
      </div>

      <button className='hidden sm:block md:absolute lg:static lg:top-auto lg:left-auto md:top-48 md:-right-40 '>Buy Album</button>

        </div>
        </div>
        

      </div>


    </div>
  );
};

export default Innerpage_1;
