import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosHome } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import './About.css'



const About= () =>{

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
          <Link to={'/about'}>About</Link>
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
      
      <div className="tittles">
        <h1 className='aboutH1'>About us </h1>
        <p className='aboutP'>Welcome to [Your Food Website]! We are passionate about bringing delicious and nutritious food to your table.</p>
        <h1 className='aboutH1'>Our mission </h1>
        <p className='aboutP'>At [Your Food Website], our mission is to provide high-quality , fresh, and mouthwatering dishes that satisfy your cravings and nourish your body.</p>
        <h2 className='aboutH1'>Our Team</h2>
      <p className='aboutP'>We have a dedicated team of chefs and culinary experts who work tirelessly to create unique and flavourable recipes. Meet the talented individuals behind the magic!</p>

      <ul className='aboutUl'>
        <li className='aboutLi'>Chef John Doe - Head Chef</li>
        <li className='aboutLi'>Emily Smith - Pastry Chef</li>
        <li className='aboutLi'>Alex Rodriguez - Nutrition Specialist</li>
        
      </ul>
      

      <h2 className='aboutH1'>Contact Us</h2>
      <p className='aboutP'>Have Questions or feedback? We'd love to hear from you</p>
      <p className='aboutP'>Visit our contact page. <Link to={'/contact'} className='Aboutcontactt'>Contact us</Link></p>
      <h2>Our Adress</h2>
      <p className='aboutP'>123 Food Street, CityVille, State, ZIP</p>

      </div>
      
      
      
    </header>
    </div>
  )
}

export default About
