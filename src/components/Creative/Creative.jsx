import React from 'react';
import './creative.css';

// image import
import creativeImage1 from '../../assets/images/Creative/creative-image-1.png';
import creativeImage2 from '../../assets/images/Creative/creative-image-2.png';
import creativeImageUser1 from '../../assets/images/Creative/creative-image-user-1.png';
import creativeImageUser2 from '../../assets/images/Creative/creative-image-user-2.png';
import CreativeChild from './CreativeChild/CreativeChild';

const Creative = () => {
    const dataArr = [
        {
            imgSrc: creativeImage1,
            heading: 'Creative interactive prototypes',
            paras: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque nisi architecto autem molestias corrupti officia veniam.',
            checklist: [
                "Adipisci excepturi aliquam", "Deleniti labore reiciendis"
            ],
            userDetails: {
                name: 'Amalia G',
                image: creativeImageUser1,
                profile: 'Co-Founder, XYZ Inc.',
                feedback: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae ipsa asperiores inventore aperiam iure?'

            }
        },
        {
            imgSrc: creativeImage2,
            heading: 'Creative interactive prototypes',
            paras: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque nisi architecto autem molestias corrupti officia veniam.',
            checklist: [
                "Adipisci excepturi aliquam", "Deleniti labore reiciendis"
            ],
            userDetails: {
                name: 'Amalia G',
                image: creativeImageUser2,
                profile: 'Co-Founder, XYZ Inc.',
                feedback: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae ipsa asperiores inventore aperiam iure?'

            }
        }
    ]
  return (
    <div className='creative' data-active=''>
        <div className='creative_container'>
            <CreativeChild data = {dataArr[0]} idx={0}/>
        </div>
        <div className='creative_divider'>

        </div>
        <div className='creative_container'>
            <CreativeChild data = {dataArr[1]} idx={1}/>
        </div>
    </div>
  )
}

export default Creative