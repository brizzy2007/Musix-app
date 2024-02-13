import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='bg-[#462a17] shadow-2xl text-white'>
      <div className='container lg:flex lg:gap-x-custom'>
        <div className='first-set lg:ml-20'>
          <h1 className='font-semibold'>Services</h1>
          <div style={{ display: 'flex', alignItems: 'center' }} className='input-wrapper'>
            <input type="email" placeholder="Enter your email" className='border-b border-white text-white bg-transparent email-input' style={{ outline: 'none' }} />
            <input type="button" value="Subscribe" className='cursor-pointer'/>
          </div>
          <p>Esteem Spirit high and conservating</p> 
        </div>
        <div className='second-set'>
          <h1 className='font-semibold'>Contact me</h1>
          <p><a href="">+234 90 606 51992</a></p>  
          <p>No. 4 Rumuesara Farm Road, Eneka, Rivers...</p>  

          <div className='icons'>
            <p className='flex gap-3'><FaFacebookF /> <FaTwitter /> <FaInstagram /></p>
          </div>
        </div>
      </div>
      <div className='lg:flex lg:gap-96'>
        <p>Copy right @2024</p>
        <nav className='flex lg:gap-8 sm:gap-3'>
          <ul className='flex gap-8'>
            <Link to={'/'}><li>Home</li></Link>
            <Link to={'/about'}><li>About</li></Link>
            <Link to={'/tracks'}><li>Tracks</li></Link>
            <Link to={'/blog'}><li>Blog</li></Link>
            <Link to={'/contact'}><li>Contact</li></Link>
          </ul> 
        </nav>
      </div>
    </div>
  );
};

export default Footer;
