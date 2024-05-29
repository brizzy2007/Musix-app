import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import "./Navbar.css";

const Footer = () => {
  const location = useLocation();
  const [email, setEmail] = useState('');

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = () => {
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailRegex.test(email)) {
      // Add your subscription logic here
      console.log(`Subscribed with email: ${email}`);
      alert('Subscribed successfully!');
      // Reset the input field after subscription
      setEmail('');
    } else {
      alert('Invalid email');
    }
  };

  return (
    <div className='bg-[#462a17] shadow-2xl text-white'>
      <div className='container lg:flex lg:gap-96'>
        <div className='first-set lg:ml-20 lg:mt-5'>
          <h1 className='font-semibold text-xl mb-2'>Services</h1>
          <div style={{ display: 'flex', alignItems: 'center' }} className='input-wrapper'>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className='border-b border-white text-white bg-transparent email-input' 
              style={{ outline: 'none' }}
              value={email}
              onChange={handleInputChange}
            />
            <button onClick={handleSubscribe}>Subscribe</button>
          </div>
          <p className='mt-2'>Esteem Spirit high and conservating</p> 
        </div>
        <div className='second-set lg:mt-5 sm:mt-5 md:mt-5'>
          <h1 className='font-semibold text-xl mb-2'>Contact me</h1>
          <p><a href="tel:+2349060651992">+234 90 606 51992</a></p>  
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
            <Link to='/' className={location.pathname === '/' ? 'font-semibold underline-yellow' : 'font-semibold'}><li>Home</li></Link>
            <Link to='/about' className={location.pathname === '/about' ? 'font-semibold underline-yellow' : 'font-semibold'}><li>About</li></Link>
            <Link to='/tracks' className={location.pathname === '/tracks' ? 'font-semibold underline-yellow' : 'font-semibold'}><li>Tracks</li></Link>
            <Link to='/blog' className={location.pathname === '/blog' ? 'font-semibold underline-yellow' : 'font-semibold'}><li>Blog</li></Link>
            <Link to='/contact' className={location.pathname === '/contact' ? 'font-semibold underline-yellow' : 'font-semibold'}><li>Contact</li></Link>
          </ul> 
        </nav>
      </div>
    </div>
  );
};

export default Footer;
