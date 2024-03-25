import React, { useEffect } from 'react';
import './creativechild.css'

// icons import
import { TiTick } from "react-icons/ti";

// aos import
import AOS from "aos";
import "aos/dist/aos.css";

const CreativeChild = ({data, idx}) => {
    const {imgSrc, heading, paras, checklist, userDetails} = data;

    // useEffect(() => {
    //     AOS.init({});
    // }, [])

  return (
    <div className='creative_child_main' style={{flexDirection: idx%2 == 0 ? 'row' : 'row-reverse'}}>
        <div className='creative_child_image'>
            <img src={imgSrc} alt="" />
        </div>
        <div className='creative_child_content'>
            <h3 
            // data-aos="fade-up"  data-aos-delay="50" data-aos-duration="600" data-aos-easing="ease-in-out"
            >{heading}</h3>
            <p 
            // data-aos="fade-up"  data-aos-delay="60" data-aos-duration="600" data-aos-easing="ease-in-out"
            >{paras}</p>
            <div className='creative_child_checklists'>
                {
                    checklist?.map((list) => {
                        return (
                            <div className='creative_child_checklists_line' 
                            // data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600" data-aos-easing="ease-in-out"
                            >
                                <span><TiTick /></span>
                                <p>{list}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className='creative_child_user' 
            // data-aos="fade-up"  data-aos-delay="80" data-aos-duration="600" data-aos-easing="ease-in-out"
            >
                <div className='creative_child_user_top'>
                    <div className='creative_child_userimg'>
                        <img src={userDetails.image} alt="" />
                    </div>
                    <div className='creative_child_userdetails'>
                        <h3>{userDetails.name}</h3>
                        <p>{userDetails.profile}</p>
                    </div>
                    
                </div>
                <div className='creative_child_user_bottom'>
                    <p>
                        "{userDetails.feedback}"
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreativeChild