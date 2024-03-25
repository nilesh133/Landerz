import React from 'react';
import './testimonials.css';

// images import
import testimonialsImage1 from '../../assets/images/Testimonials/testimonials_user_1.png';
import testimonialsImage2 from '../../assets/images/Testimonials/testimonials_user_2.png';
import testimonialsImage3 from '../../assets/images/Testimonials/testimonials_user_3.png';
import testimonialsImage4 from '../../assets/images/Testimonials/testimonials_user_4.png';

// swiper import
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Keyboard, Pagination, Navigation } from 'swiper/modules';

// aos import
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
    

    const feedbackData = [
        {
            userImg: testimonialsImage1,
            feedback: 'Eos cumque optio dolores excepturi rerum temporibus magni recusandae eveniet, totam omnis consectetur maxime quibusdam expedita dolorem dolor nobis dicta labore quaerat esse magnam unde, aperiam delectus! At maiores, itaque.',
            name: 'Roger Spears'
        },
        {
            userImg: testimonialsImage2,
            feedback: 'Eos cumque optio dolores excepturi rerum temporibus magni recusandae eveniet, totam omnis consectetur maxime quibusdam expedita dolorem dolor nobis dicta labore quaerat esse magnam unde, aperiam delectus! At maiores, itaque.',
            name: 'Kylie McDonald'
        },
        {
            userImg: testimonialsImage3,
            feedback: 'Eos cumque optio dolores excepturi rerum temporibus magni recusandae eveniet, totam omnis consectetur maxime quibusdam expedita dolorem dolor nobis dicta labore quaerat esse magnam unde, aperiam delectus! At maiores, itaque.',
            name: 'John Smith'
        },
        {
            userImg: testimonialsImage4,
            feedback: 'Eos cumque optio dolores excepturi rerum temporibus magni recusandae eveniet, totam omnis consectetur maxime quibusdam expedita dolorem dolor nobis dicta labore quaerat esse magnam unde, aperiam delectus! At maiores, itaque.',
            name: 'Robert Aguilar'
        }
    ]
  return (
    <div className='testimonials components'>
        <div className='section_heading'>
            Testimonials
        </div>
        <div className='swiper_container'>
            <>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    keyboard={{
                    enabled: true,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Keyboard, Pagination, Navigation]}
                    className="mySwiper"
            >
                {
                    feedbackData?.map((dt) => {
                        return (
                            <SwiperSlide>
                                <div className='testimonials_feedback'>
                                    <div className='testimonials_feedback_img'>
                                        <img src={dt.userImg} alt="" />
                                    </div>
                                    <div className='testimonials_feedback_para'>
                                        <p>"{dt.feedback}"</p>
                                    </div>
                                    <div className='testimonials_feedback_user'>
                                        {dt.name}
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
                </Swiper>
            </>
        </div>
    </div>
  )
}

export default Testimonials