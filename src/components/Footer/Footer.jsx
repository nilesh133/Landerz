import React from 'react';
import './footer.css'

// icons import
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer_main'>
            <div className='footer_content'>
                <div className='footer_aboutus'>
                    <h3 className='footer_section_headings'>About Us</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A earum enim, assumenda at aliquam expedita porro corporis voluptate possimus ratione?
                    </p>
                </div>
                <div className='footer_navigation'>
                    <h3 className='footer_section_headings'>Navigation Links</h3>
                    <ul className='navigation_links'>
                        <li>Home</li>
                        <li>Features</li>
                        <li>About Us</li>
                        <li>Testimonials</li>
                        <li>Newsletter</li>
                    </ul>
                </div>
                <div className='footer_social'>
                    <h3 className='footer_section_headings'>Follow Us</h3>
                    <p>Let us be social</p>
                    <div className='footer_social_icons'>
                        <span><FaFacebookF/></span>
                        <span><FaInstagram/></span>
                        <span><FaTwitter/></span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer