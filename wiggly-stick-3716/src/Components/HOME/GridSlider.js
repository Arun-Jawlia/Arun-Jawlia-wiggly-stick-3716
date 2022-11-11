import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper';
import {Swiper,SwiperSlide} from "swiper/react";
import 'swiper/scss';
import "./GridSlid.css"
// import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/css/scrollbar';
import data from "./data"
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,EffectCube])
export const GridSlider = () => {
  return (
    <div className='App'>
    <Swiper
    // effect="cube"
    // modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={20}
sliderPerView={3}
navigation
pagination={{ clickable: true }}
scrollbar={{ draggable: true }}
onSliderChange={()=>console.log('slider change')}
onSwiper={swiper => console.log(swiper)}>
  {data.map(user =>(
    <SwiperSlide key={user.id} className="slide">
      <div className='slide-content'>
       <div className='user-image'>
        <img alt="" src={user.linkImg} className="user-photo" />
       </div>
       <h4>{user.title}</h4>
       <h5>{user.category}</h5>
       <p className='user-testimonial'>{user.price}₹</p>
      </div>
    </SwiperSlide>
  ))}
    </Swiper>
    </div>
  )
}
