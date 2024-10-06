import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';

import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Blog5 from '../Assets/blog5.jpg';
import Blog6 from '../Assets/blog6.jpg';
import Blog7 from '../Assets/blog7.jpg';
import Blog8 from '../Assets/blog8.jpg';
import Blog1 from '../Assets/blog1.jpg';
import Blog2 from '../Assets/blog2.jpg';
import Blog3 from '../Assets/blog3.jpg';


const Slider = () => {
  return (
    <div className='article' style={{margin: "0 3rem"}}>
    {/* <h1>News and Events</h1> */}
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
      effect='fade'
      spaceBetween={100}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}>

     <div className="container2">

      <SwiperSlide>
          <img src={Blog5} alt="" style={{height: "70vh", width: "100%"}}/>
      </SwiperSlide>
      <SwiperSlide>
          <img src={Blog6} alt=""  style={{height: "70vh", width: "100%"}}/>
      </SwiperSlide>
      <SwiperSlide>
          <img src={Blog7} alt=""  style={{height: "70vh", width: "100%"}}/>
      </SwiperSlide>
      <SwiperSlide>
          <img src={Blog8} alt=""  style={{height: "70vh", width: "100%"}}/>
      </SwiperSlide>
      <SwiperSlide>
          <img src={Blog1} alt="" style={{height: "70vh", width: "100%"}}/>
      </SwiperSlide>
      <SwiperSlide>
          <img src={Blog2} alt=""  style={{height: "70vh", width: "100%"}}/>
      </SwiperSlide>
      <SwiperSlide>
          <img src={Blog3} alt=""  style={{height: "70vh", width: "100%"}}/>
      </SwiperSlide>
     </div>
    </Swiper>
    </div>
  )
}

export default Slider
