import React, { useState } from 'react'
import { IoIosClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import Musix from '../assets/Musix.png'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';



const Navbar = () =>{
    const [nav, setNav] = useState(false);

    const handleClick = () =>{
        setNav(!nav)
    };
    const handleClose = () =>{
        setNav(!nav)
    };




  return (
    <div className='w-screen h-[80px] z-10 fixed bg-[#351a05] shadow-2xl'>
      <div className='px-2 flex justify-between items-center w-full h-full'>

        <div className='flex items-center'>
         <Link to={'/'}><h1 className='text-4xl  mr-4 sm:text-3xl flex text-white'>
            <img src={Musix} className='w-11 mr-2 '/>Musix</h1></Link> 
            <ul className='hidden md:flex gap-7 text-2xl px-40 text-white'>
           <Link to={'/'}><li>Home</li></Link>
            <Link to={'/about'}><li>About</li></Link>
           <Link to={'/tracks'}><li> Tracks</li></Link>
            <Link to={'/blog'}><li>Blog</li></Link>
            <Link to={'/contact'}><li>Contact</li></Link>
            
            </ul>
          
        </div>

        
        <div className='hidden md:flex pr-4'>
          <button className='mr-8 font-bold rounded-full bg-red-700 hover:bg-red-900 transition duration-300 ease-in-out p-2 text-white'><FaFacebookF /></button>
          <button className='mr-8 font-bold rounded-full bg-red-700 hover:bg-red-900 transition duration-300 ease-in-out p-2 text-white'><FaTwitter /></button>
          <button className='font-bold mr-16 rounded-full bg-red-700 hover:bg-red-900 transition duration-300 ease-in-out p-2 text-white'><FaInstagram /></button>
        </div>

        <div className='md:hidden mr-4 text-white' onClick={handleClick}>
          {!nav ? <IoMenu size={25}/> : <IoIosClose  size={25}/>}
        </div>


      </div>
      <ul className={!nav ? 'hidden' : 'absolute bg-[#351a05] w-[100%] px-8 h-[50vh] text-white'} onClick={handleClose}>
        <Link to={'/'}><li className='border-b-2 py-3 border-black-300 w-full'>Home</li></Link>
        <Link to={'/about'}><li className='border-b-2 py-3 border-black-300 w-full'>About</li></Link>
        <Link to={'/tracks'}><li className='border-b-2 py-3 border-black-300 w-full'>Tracks</li></Link>
       <Link to={'/blog'}><li className='border-b-2 py-3 border-black-300 w-full'>Blog</li></Link>
       <Link to={'/contact'}><li className='border-b-2 py-3 border-black-300 w-full'>Contact</li></Link>

        
        <div className='mt-4'>
          <button className='mr-8 font-bold rounded-full bg-red-700 hover:bg-red-900 transition duration-300 ease-in-out p-2 text-white'><FaFacebookF /></button>
          <button className='mr-8 font-bold rounded-full bg-red-700 hover:bg-red-900 transition duration-300 ease-in-out p-2 text-white'><FaTwitter /></button>
          <button className='font-bold mr-16 rounded-full bg-red-700 hover:bg-red-900 transition duration-300 ease-in-out p-2 text-white'><FaInstagram /></button>
        </div>
      </ul>
      
    </div>

  )
}

export default Navbar
