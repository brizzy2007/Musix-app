import React, { useState } from 'react'
import { IoIosClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import Musix from '../assets/Musix.png'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";



const Navbar = () =>{
    const [nav, setNav] = useState(false);

    const handleClick = () =>{
        setNav(!nav)
    };
    const handleClose = () =>{
        setNav(!nav)
    };




  return (
    <div className='w-screen h-[80px] z-10 bg-[#f9f9f9] fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>

        <div className='flex items-center'>
          <h1 className='text-4xl font-bold mr-4 sm:text-3xl flex'>
            <img src={Musix} className='w-8 mr-2 '/>Musix</h1>
            <ul className='hidden md:flex gap-7 font-bold text-2xl px-40'>
           <li>Home</li>
            <li>About</li>
           <li> Tracks</li>
            <li>Blog</li>
            <li>Contact</li>
            
            </ul>
          
        </div>

        {/* <div className='hidden md:flex pr-4'>
            <button className='border-none bg-[#201f1f] text-[#eedfdf] rounded-xl px-5 py-3 mr-4'>login</button>
            <button className='border-none bg-[#201f1f] text-[#eedfdf] rounded-xl px-5 py-3 mr-4'>register</button>
        </div> */}
        <div className='hidden md:flex pr-4'>
          <button className='mr-8 font-bold rounded-full bg-red-500 p-2'><FaFacebookF /></button>
          <button className='mr-8 font-bold rounded-full bg-red-500 p-2'><FaTwitter /></button>
          <button className='font-bold mr-16 rounded-full bg-red-500 p-2'><FaInstagram /></button>
        </div>

        <div className='md:hidden mr-4' onClick={handleClick}>
          {!nav ? <IoMenu size={25}/> : <IoIosClose  size={25}/>}
        </div>


      </div>
      <ul className={!nav ? 'hidden' : 'absolute bg-[#F9F9F9] w-[100%] px-8'} onClick={handleClose}>
        <li className='border-b-2 py-3 border-black-300 w-full'>Home</li>
        <li className='border-b-2 py-3 border-black-300 w-full'>About</li>
        <li className='border-b-2 py-3 border-black-300 w-full'>Tracks</li>
       <li className='border-b-2 py-3 border-black-300 w-full'>Blog</li>
       <li className='border-b-2 py-3 border-black-300 w-full'>Contact</li>

        {/* <div className='flex flex-col my-4'>
          <button className='border-none bg-[#201f1f] text-[#eedfdf] px-8 py-3 mb-4 rounded-2xl'>Login</button>
          <button className='border-none bg-[#201f1f] text-[#eedfdf] px-8 py-3 mb-4 rounded-2xl'>Register</button>
        </div> */}
        <div className='mt-4'>
          <button className='mr-8 font-bold rounded-full bg-red-500 p-2'><FaFacebookF /></button>
          <button className='mr-8 font-bold rounded-full bg-red-500 p-2'><FaTwitter /></button>
          <button className='font-bold mr-16 rounded-full bg-red-500 p-2'><FaInstagram /></button>
        </div>
      </ul>
      
    </div>

  )
}

export default Navbar
