import React, { useState } from 'react'
import ItYours from'../assets/ItYours.mp3'
import Musix4 from '../assets/Musix4.jpg'



const Innerpage_2 = () =>{
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
    setIsPlaying(!isPlaying);
    };
   
  return (
    <div className='text-blue-500 lg:mt-12 lg:ml-12 lg:hidden md:hidden'>
     
     <div className='lg:flex lg:gap-36'>
        <img src={Musix4} alt="" className='w-auto'/>
        <div>
            <h1>Omah Lay- It yours  <p>Album:Boy alone</p> </h1>
      <audio
        controls
        src={ItYours}
        onPlay={togglePlay}
        onPause={togglePlay}
        className='lg:mt-12'>
        </audio>
      </div>
      <button className=''>Buy Album</button>
      </div>
    </div>
  )
}

export default Innerpage_2
