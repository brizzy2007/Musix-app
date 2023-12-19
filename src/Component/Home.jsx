import React, { useState } from 'react'
import './Home.css'
import { IoIosHome } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoIosArrowDropdownCircle } from "react-icons/io";


const Home= () =>{
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };


  return (
    <div>
      
      
      <header>
      
      <div className="main">

        {/* Add a menu icon for smaller screens */}
        <div className="menu-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            
          </div>

          {/* Navigation menu */}

          <h1 className='homeH1 logo'>[Food Website]</h1>
          <ul className={`homeul link ${showMenu ? 'show-menu' : ''}`}>
          <li> <h1 className='homeh1'>[Food Website]</h1></li>
          
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
            
            <a href="#">More Recipe <IoIosArrowDropdownCircle /></a>
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
      <div className='homecont'>
      <div className="tittle">
        <h1>HOME RECIPES</h1>
      </div>
      <div className="button">
        <a href="#" className="btn">WATCH VIDEO</a>
        <a href="#" className="btn">BASIC SKILLS</a>
        <a href="#" className="btn">LEARN MORE</a>
      </div>
      </div>
    </header>
    </div>
  )
}


export default Home
