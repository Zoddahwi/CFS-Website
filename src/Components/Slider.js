import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';

import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import CFS1 from '../Assets/CFS_bg1.png'
import CFS2 from '../Assets/CFS_bg2.png'
import CFS3 from '../Assets/CFS_bg3.png'
import CFS4 from '../Assets/CFS_bg4.png'


const Slider = () => {
  return (
    <div className='article' style={{margin: "0 3rem"}}>
    <h1>News and Events</h1>
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
          <img src={CFS1} alt="" style={{height: "70vh", width: "100%"}}/>
      </SwiperSlide>
      <SwiperSlide>
          <img src={CFS2} alt=""  style={{height: "70vh", width: "100%"}}/>
      </SwiperSlide>
      <SwiperSlide>
          <img src={CFS3} alt=""  style={{height: "70vh", width: "100%"}}/>
      </SwiperSlide>
      <SwiperSlide>
          <img src={CFS4} alt=""  style={{height: "70vh", width: "100%"}}/>
      </SwiperSlide>
      <SwiperSlide>
          <img src={CFS1} alt="" style={{height: "70vh", width: "100%"}}/>
      </SwiperSlide>
      <SwiperSlide>
          <img src={CFS3} alt=""  style={{height: "70vh", width: "100%"}}/>
      </SwiperSlide>
     </div>
    </Swiper>
    </div>
  )
}

export default Slider
