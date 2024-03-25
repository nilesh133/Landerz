import React, { useEffect } from 'react';
import './features.css';

// icons import
import { LuRefreshCw } from "react-icons/lu";
import { RiHomeOfficeFill } from "react-icons/ri";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { TbReload } from "react-icons/tb";
import { FaRegSmile } from "react-icons/fa";
import { BiSolidPlug } from "react-icons/bi";

// aos import
import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  return (
    <div className='features' data-active='features'>
        <div className='features_container'>
            <div className='section_heading'>
                Features
            </div>
            <div className='features_content'>
                <div className='features_content_box'>
                    <span className='features_content_box_icon'><LuRefreshCw/></span>
                    <h3 className='features_content_box_h3'>Business Consulting</h3>
                    <div className='features_content_box_paras'>
                        <p>Business consulting, the art of strategic guidance and transformative insights, where experts dissect complexities.</p>
                    </div>
                    <div className='features_content_box_learnmore'>
                        Learn more
                    </div>
                </div>
                <div className='features_content_box'>
                    <span className='features_content_box_icon'><RiHomeOfficeFill/></span>
                    <h3 className='features_content_box_h3'>Market Analysis</h3>
                    <div className='features_content_box_paras'>
                        <p>Market analysis, the cornerstone of informed decision-making, where data unveils trends and insights strategies.</p>
                    </div>
                    <div className='features_content_box_learnmore'>
                        Learn more
                    </div>
                </div>
                <div className='features_content_box'>
                    <span className='features_content_box_icon'><HiMiniShoppingBag/></span>
                    <h3 className='features_content_box_h3'>User Monitoring</h3>
                    <div className='features_content_box_paras'>
                        <p>User monitoring, the indispensable tool for understanding and optimizing digital interactions, where insights drive user experiences.</p>
                    </div>
                    <div className='features_content_box_learnmore'>
                        Learn more
                    </div>
                </div>
                <div className='features_content_box'>
                    <span className='features_content_box_icon'><TbReload/></span>
                    <h3 className='features_content_box_h3'>Insurance Consulting</h3>
                    <div className='features_content_box_paras'>
                        <p>Insurance consulting, the strategic compass navigating businesses through the intricate terrain of risk management.</p>
                    </div>
                    <div className='features_content_box_learnmore'>
                        Learn more
                    </div>
                </div>
                <div className='features_content_box'>
                    <span className='features_content_box_icon'><FaRegSmile /></span>
                    <h3 className='features_content_box_h3'>Customer Satisfied</h3>
                    <div className='features_content_box_paras'>
                        <p>Customer satisfaction, the heartbeat of business success, where every interaction shapes loyalty and advocacy.</p>
                    </div>
                    <div className='features_content_box_learnmore'>
                        Learn more
                    </div>
                </div>
                <div className='features_content_box'>
                    <span className='features_content_box_icon'><BiSolidPlug/></span>
                    <h3 className='features_content_box_h3'>Plug & Play</h3>
                    <div className='features_content_box_paras'>
                        <p>Plug and play, the epitome of seamless integration and instant functionality, revolutionizing the tech landscape.</p>
                    </div>
                    <div className='features_content_box_learnmore'>
                        Learn more
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features