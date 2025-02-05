import React from 'react'
import './News.css'
import SecTitle from '../../SecTitle/SecTitle'
import {Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay , Pagination , Navigation } from 'swiper/modules'
import blog1 from '../../../assets/images/blog/blog_img_01.jpg'
import blog2 from '../../../assets/images/blog/blog_img_02.jpg'
import blog3 from '../../../assets/images/blog/blog_img_03.jpg'
import blog4 from '../../../assets/images/blog/blog_img_04.jpg'
import blog5 from '../../../assets/images/blog/blog_img_05.jpg'
import blog6 from '../../../assets/images/blog/blog_img_06.jpg'
import blog7 from '../../../assets/images/blog/blog_img_07.jpg'
import blog8 from '../../../assets/images/blog/blog_img_08.jpg'
import { FaLink } from "react-icons/fa6";

function News() {
  return (
    <section className='News container'>
      <SecTitle titleSec={'Latest News'}/>
      <Swiper
        className='row mt-3'
        spaceBetween={25}
        slidesPerView={2}
        breakpoints={{
          768:{slidesPerView:2},
          300:{slidesPerView:1}
        }}
        modules={[Autoplay , Pagination , Navigation]}
        autoplay={{
          delay:5000,
          disableOnInteraction:false
        }}
        navigation={{
          prevEl: '.SecTitle .slide-to-left',
          nextEl:'.SecTitle .slide-to-right'
        }}
        style={{width:'100%' , padding:'0 15px'}}
      >
        <SwiperSlide>
          <div className="card">
            <img src={blog1} alt="" />
            <div className="card-body">
              <div>
                <b>FASHIONS FADE, STYLE IS ETERNAL</b>
                <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula
                ullamcorper scelerisque. Morbi eu luctus nisl.</p>
              </div>
              <div className='flex justify-content-between'>
                <p>0 Comments</p>
                <p> <FaLink/> Read More </p>
              </div>
            </div>
            <div className='flex flex-column gap-1'>
              <b className='m-0'>11</b>
              <p className='m-0'>Aug</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src={blog2} alt="" />
            <div className="card-body">
              <div>
                <b>FASHIONS FADE, STYLE IS ETERNAL</b>
                <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula
                ullamcorper scelerisque. Morbi eu luctus nisl.</p>
              </div>
              <div className='flex justify-content-between'>
                <p>0 Comments</p>
                <p> <FaLink/> Read More </p>
              </div>
            </div>
            <div className='flex flex-column gap-1'>
              <b className='m-0'>11</b>
              <p className='m-0'>Aug</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src={blog3} alt="" />
            <div className="card-body">
              <div>
                <b>FASHIONS FADE, STYLE IS ETERNAL</b>
                <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula
                ullamcorper scelerisque. Morbi eu luctus nisl.</p>
              </div>
              <div className='flex justify-content-between'>
                <p>0 Comments</p>
                <p> <FaLink/> Read More </p>
              </div>
            </div>
            <div className='flex flex-column gap-1'>
              <b className='m-0'>11</b>
              <p className='m-0'>Aug</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src={blog4} alt="" />
            <div className="card-body">
              <div>
                <b>FASHIONS FADE, STYLE IS ETERNAL</b>
                <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula
                ullamcorper scelerisque. Morbi eu luctus nisl.</p>
              </div>
              <div className='flex justify-content-between'>
                <p>0 Comments</p>
                <p> <FaLink/> Read More </p>
              </div>
            </div>
            <div className='flex flex-column gap-1'>
              <b className='m-0'>11</b>
              <p className='m-0'>Aug</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src={blog5} alt="" />
            <div className="card-body">
              <div>
                <b>FASHIONS FADE, STYLE IS ETERNAL</b>
                <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula
                ullamcorper scelerisque. Morbi eu luctus nisl.</p>
              </div>
              <div className='flex justify-content-between'>
                <p>0 Comments</p>
                <p> <FaLink/> Read More </p>
              </div>
            </div>
            <div className='flex flex-column gap-1'>
              <b className='m-0'>11</b>
              <p className='m-0'>Aug</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src={blog6} alt="" />
            <div className="card-body">
              <div>
                <b>FASHIONS FADE, STYLE IS ETERNAL</b>
                <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula
                ullamcorper scelerisque. Morbi eu luctus nisl.</p>
              </div>
              <div className='flex justify-content-between'>
                <p>0 Comments</p>
                <p> <FaLink/> Read More </p>
              </div>
            </div>
            <div className='flex flex-column gap-1'>
              <b className='m-0'>11</b>
              <p className='m-0'>Aug</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src={blog7} alt="" />
            <div className="card-body">
              <div>
                <b>FASHIONS FADE, STYLE IS ETERNAL</b>
                <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula
                ullamcorper scelerisque. Morbi eu luctus nisl.</p>
              </div>
              <div className='flex justify-content-between'>
                <p>0 Comments</p>
                <p> <FaLink/> Read More </p>
              </div>
            </div>
            <div className='flex flex-column gap-1'>
              <b className='m-0'>11</b>
              <p className='m-0'>Aug</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src={blog8} alt="" />
            <div className="card-body">
              <div>
                <b>FASHIONS FADE, STYLE IS ETERNAL</b>
                <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula
                ullamcorper scelerisque. Morbi eu luctus nisl.</p>
              </div>
              <div className='flex justify-content-between'>
                <p>0 Comments</p>
                <p> <FaLink/> Read More </p>
              </div>
            </div>
            <div className='flex flex-column gap-1'>
              <b className='m-0'>11</b>
              <p className='m-0'>Aug</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default News
