import React from 'react'
import Musix2 from '../assets/Musix2.jpg'

const Innerpage_1 = () =>{
  return (
    <div className="relative">
      <img src={Musix2} alt="" className="w-full h-auto filter brightness-1" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="lg:text-9xl md:text-6xl  mt-8">Musician</h1>
      </div>
    </div>
  )
}

export default Innerpage_1
