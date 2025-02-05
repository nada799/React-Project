import React from 'react'
import './Brand.css'
import SecTitle from '../../SecTitle/SecTitle'
import {Swiper , SwiperSlide} from 'swiper/react'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import brand1 from '../../../assets/images/brand/brand1.png'
import brand2 from '../../../assets/images/brand/brand2.png'
import brand3 from '../../../assets/images/brand/brand3.png'
import brand4 from '../../../assets/images/brand/brand4.png'
import brand5 from '../../../assets/images/brand/brand5.png'
import brand6 from '../../../assets/images/brand/brand6.png'
import brand7 from '../../../assets/images/brand/brand7.png'
import brand8 from '../../../assets/images/brand/brand8.png'
import brand9 from '../../../assets/images/brand/brand9.png'


function Brand() {
  return (
    <section className='Brand container'>
      <SecTitle titleSec={'Brand Logo'}/>
      <div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3} 
          breakpoints={{
            200:{slidesPerView:2}
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0, 
            depth: 300,
            modifier: 1,
          }}
          loop={true}
          modules={[EffectCoverflow, Pagination  , Navigation]}
          className="mySwiper"
          navigation={{
            prevEl: '.Brand .slide-to-left',
            nextEl:'.Brand .slide-to-right'
          }}
        >
          <SwiperSlide>
            <img src={brand1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={brand2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={brand3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={brand4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={brand5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={brand6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={brand7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={brand8} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={brand9} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Brand
