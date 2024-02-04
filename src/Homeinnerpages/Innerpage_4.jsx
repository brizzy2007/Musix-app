import React from 'react'
import Main from '../assets/Main.jpg';
import Main2 from '../assets/Main2.jpg';
import Main3 from '../assets/Main3.jpg';
import Main4 from '../assets/Main4.jpg';
import './Innerpage_4.css';
import { IoLogoYoutube } from "react-icons/io";


const Innerpage_4 = ({ text, texts }) =>{
  return (
    <div className='lg:flex gap-2 mt-16 sm:block'>
    <div className="image-container">
      <img src={Main} alt="Hoverable Image" className="hoverable-imag"/>
      <div className="overlay">
        <p> <IoLogoYoutube /> {text}</p>
      </div>
    </div>

    <div className="image-container">
      <img src={Main2} alt="Hoverable Image" className="hoverable-image" />
      <div className="overlay">
        <p> <IoLogoYoutube /> {texts}</p>
      </div>
    </div>

    <div className="image-container">
      <img src={Main3} alt="Hoverable Image" className="hoverable-image" />
      <div className="overlay">
        <p> <IoLogoYoutube /> {text}</p>
      </div>
    </div>

    <div className="image-container">
      <img src={Main4} alt="Hoverable Image" className="hoverable-image" />
      <div className="overlay">
        <p> <IoLogoYoutube /> {text}</p>
      </div>
    </div>
    </div>
  )
}

export default Innerpage_4
