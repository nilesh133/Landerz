import React, { useEffect } from 'react'
import './newsletter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter components'>
        <div className='newsletter_main section_width'>
            <div className='section_heading'>
                Newsletter
            </div>
            <div className='newsletter_content'>
                <div className='newsletter_content_p'>
                    <p>RE-IMAGINING THE WAY</p>
                </div>
                <div className='newsletter_content_input'>
                    <input type="text" placeholder='Email Address'/>
                    <div className='newsletter_content_input_button'>
                        Get Started
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter