import React from 'react'
import Musix4 from '../assets/Musix4.jpg';
import './Innerpage_4.css';
import { IoLogoYoutube } from "react-icons/io";


const Innerpage_4 = ({ text }) =>{
  return (
    <div className="image-container mt-20 ml-20">
      <img src={Musix4} alt="Hoverable Image" className="hoverable-image" />
      <div className="overlay">
        <p> <IoLogoYoutube /> {text}</p>
      </div>
    </div>
  )
}

export default Innerpage_4
