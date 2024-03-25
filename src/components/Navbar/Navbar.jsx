import React, { useEffect, useState } from 'react';
import './navbar.css';

// icons import
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
  const [navLinks, setNavLinks] = useState([
      "Home",
      "Features",
      "About Us",
      "Testimonials",
     "Newsletter"
  ])

  // const checkComponentInView = () => {
  //   debugger;
  //   const componentElements = document.querySelectorAll('.components');

  //   for (let i = 0; i < componentElements.length; i++) {
  //     const element = componentElements[i];
  //     const rect = element.getBoundingClientRect();

  //     if (rect.x >= 0 && (rect.height - rect.bottom) <= window.innerHeight) {
  //       setCurrentComponentIndex(i);
  //       break;
  //     }
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', checkComponentInView);
  //   return () => {
  //     window.removeEventListener('scroll', checkComponentInView);
  //   };
  // }, []);

  return (
    <nav className='navbar'>
        <div className='navbar_left'>
            <h3>Landerz<span>.</span></h3>
        </div>
        <div className='navbar_hamburger'>
          <RxHamburgerMenu onClick={() => {
            setShowMenu(true)
          }}/>
        </div>
        <div className='navbar_mobile_menu' style={{right: showMenu ? '0' : '-100%'}}>
          <div className='navbar_mobile_menu_crossbtn'>
            <RxCross2 onClick={() => {
            setShowMenu(false)
          }}/>
          </div>
          <ul className='navbar_links_menu'>
            {
              navLinks.map((link, index) => {
                return <li style={{ color: index === currentComponentIndex ? '#00d2b5' : '#000' }}>{link}</li>
              })
            }
              
          </ul>
        </div>
        <ul className='navbar_links'>
        {
              navLinks.map((link, index) => {
                return <li 
                // style={{ color: index === currentComponentIndex ? '#00d2b5' : '#000' }}
                >{link}</li>
              })
            }
        </ul>
    </nav>
  )
}

export default Navbar