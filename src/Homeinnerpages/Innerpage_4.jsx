import React, { useEffect } from 'react'
import Main from '../assets/Main.jpg';
import Main2 from '../assets/Main2.jpg';
import Main3 from '../assets/Main3.jpg';
import Main4 from '../assets/Main4.jpg';
import './Innerpage_4.css';
import { IoLogoYoutube } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Innerpage_4 = ({ text, texts }) =>{
  useEffect(() => {
    console.log('AOS initialization started');
    AOS.init({
      duration: 2000, // You can adjust the duration as needed
      // once: true // Animation will only happen once
    });
  }, []);


  return (
    <div className='flex mt-20'>
    <div className="image-container" data-aos="fade-up">
      <img src={Main4} alt="Hoverable Image" className="hoverable-image" />
      <div className="overlay">
        <p className='flex gap-2'>  <IoLogoYoutube className='mt-1'/> {text}</p>
      </div>
    </div>

    <div className="image-container" data-aos="fade-up">
      <img src={Main2} alt="Hoverable Image" className="hoverable-image " />
      <div className="overlay">
        <p> <IoLogoYoutube /> {texts}</p>
      </div>
    </div>

    <div className="image-container" data-aos="fade-up">
      <img src={Main3} alt="Hoverable Image" className="hoverable-image " />
      <div className="overlay">
        <p> <IoLogoYoutube /> {text}</p>
      </div>
    </div>

    {/* <div className="image-container" data-aos="fade-up">
      <img src={Main4} alt="Hoverable Image" className="hoverable-image" />
      <div className="overlay">
        <p> <IoLogoYoutube /> {text}</p>
      </div>
    </div> */}
    </div>
  )
}

export default Innerpage_4
