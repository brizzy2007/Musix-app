import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosHome } from "react-icons/io";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { BiLogoTelegram } from "react-icons/bi";
import { IoMdContact } from "react-icons/io";
import './Contact.css'
import { IoIosArrowDropdownCircle } from "react-icons/io";

const Contact= () =>{

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div>
      <header className='contactHeader'>
      <div className="main">
        {/* Add a menu icon for smaller screens */}
        <div className="menu-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
          </div>

          {/* Navigation menu */}

          <h1 className='homeH1 logo'>[Food Website]</h1>
          <ul className={`homeul link ${showMenu ? 'show-menu' : ''}`}>
        <li><h1 className='homeh1'>[Food Website]</h1></li>
          <li className="active">
            <Link to={'/'}><IoIosHome />HOME</Link>
          </li>
          <li>
          <a href="">About</a>
          </li>
          <li>
            <Link to={'/contact'}>Contact</Link>
          </li>
          <li>
            <a href="#">Pasta</a>
          </li>
          <li>
            <a href="#">Salad</a>
          </li>
          <li>
            <a href="#">Burger</a>
          </li>
          <li>
            <a href="#">Pizza</a>
          </li>
          <li>
            <a href="#">More Recipe <IoIosArrowDropdownCircle /> </a>
            <div className="sub-menu">
              <ul className='homeul'>
                <li><a href="#">Cookies</a></li>
                <li><a href="#">Sandwich</a></li>
                <li><a href="#">Hotdog</a></li>
              </ul>
            </div>
          </li>
        </ul>
        
      </div>
     <div className='hola'>
      <div className='contactcontainer'>
        <form>
            <h2 className='contacth2'>Contact us </h2>
           
            <div className='contact-div'>
           <p className='contactp'>Name <IoMdContact  size={15} className='contacticon'/>-  <input type="text" required/></p>
            </div>
            <div className='contact-div'>
           <p className='contactp'>Email <MdOutlineMarkEmailRead className='contacticon'/>-  <input type="email" required/></p>
            </div>
            
           <button type='submit' className='butt'>Send us a message <BiLogoTelegram /></button>
            
            
        </form>
        </div>
      </div>
    </header>

    </div>
  )
}

export default Contact
