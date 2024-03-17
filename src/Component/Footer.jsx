import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='bg-[#462a17] shadow-2xl text-white'>
      <div className='container lg:flex lg:gap-96'>
        <div className='first-set lg:ml-20 lg:mt-5'>
          <h1 className='font-semibold text-xl mb-2'>Services</h1>
          <div style={{ display: 'flex', alignItems: 'center' }} className='input-wrapper'>
            <input type="email" placeholder="Enter your email" className='border-b border-white text-white bg-transparent email-input' style={{ outline: 'none' }} />
            <input type="button" value="Subscribe" className='cursor-pointer'/>
          </div>
          <p className='mt-2'>Esteem Spirit high and conservating</p> 
        </div>
        <div className='second-set lg:mt-5 sm:mt-5 md:mt-5'>
          <h1 className='font-semibold text-xl mb-2'>Contact me</h1>
          <p><a href="">+234 90 606 51992</a></p>  
          <p className='mt-2'>No. 4 Rumuesara Farm Road, Eneka, Rivers...</p>  

          <div className='icons'>
            <p className='flex gap-3'><FaFacebookF /> <FaTwitter /> <FaInstagram /></p>
          </div>
        </div>
      </div>
      <div className='lg:flex lg:gap-96 mt-5'>
        <p className='lg:ml-20'>Copy right @2024</p>
        <nav className='flex lg:gap-8 sm:gap-3 lg:relative left-96'>
          <ul className='flex gap-8'>
            <Link to={'/'}><li className='font-semibold'>Home</li></Link>
            <Link to={'/about'}><li className='font-semibold'>About</li></Link>
            <Link to={'/tracks'}><li className='font-semibold'>Tracks</li></Link>
            <Link to={'/blog'}><li className='font-semibold'>Blog</li></Link>
            <Link to={'/contact'}><li className='font-semibold'>Contact</li></Link>
          </ul> 
        </nav>
      </div>
    </div>
  );
};

export default Footer;
