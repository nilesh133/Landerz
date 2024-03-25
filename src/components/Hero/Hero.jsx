import React, { useEffect } from 'react';
import './hero.css';

// image import
import home_page_main from '../../assets/images/Hero/hero_main_image.png'

// aos import
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {

    // useEffect(() => {
    //     AOS.init({});
    // }, [])

  return (
    <div className='hero' data-active='hero'>
        <div className='hero_left'>
            <div className='hero_left_heading' 
            // data-aos="fade-right"  data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"
            >
                <h1>Grow Your Business Faster</h1>
            </div>
            <div className='hero_left_paras' 
            // data-aos="fade-right"  data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"
            >
                <p>In the dynamic arena of business, our hero eigns supreme, a visionary trailblazer sculpting success with boldness and brilliance.</p>
            </div>
            <div className='hero_left_button' 
            // data-aos="fade-right"  data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"
            >
                Get Started
            </div>
        </div>
        <div className='hero_right'>
            <div className='hero_right_image_container'>
                <img src={home_page_main} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero