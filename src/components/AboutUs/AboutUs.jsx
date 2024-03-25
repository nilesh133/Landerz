import React, { useEffect } from 'react';
import './aboutus.css';

// images import
import aboutus_main from "../../assets/images/AboutUs/aboutus_main.png";

// aos import
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {

    // useEffect(() => {
    //     AOS.init({});
    // }, [])

  return (
    <div className='aboutus' data-active='about'>
        <div className='section_heading'>
            About Us
        </div>
        <div className='aboutus_main'>
            <div className='aboutus_image' 
            // data-aos="fade-right"  data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"
            >
                <img src={aboutus_main} alt="" />
            </div>
            <div className='aboutus_content' 
            // data-aos="fade-left"  data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"
            >
                <h3>Create interactive prototypes</h3>
                <p>Eos cumque optio dolores excepturi rerum temporibus magni recusandae eveniet, totam omnis consectetur maxime quibusdam expedita dolorem dolor nobis dicta labore quaerat esse magnam unde, aperiam delectus! At maiores, itaque.</p>
                <div className='aboutus_button'>
                    Learn more
                </div> 
            </div>
        </div>
    </div>
  )
}

export default AboutUs