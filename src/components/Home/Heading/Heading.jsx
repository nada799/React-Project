import React from 'react'
import './Heading.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import mBanner1 from '../../../assets/images/main_banner1.jpg'
import mBanner2 from '../../../assets/images/main_banner2.jpg'
import heading1 from '../../../assets/images/heading-1.png'
import heading2 from '../../../assets/images/heading-2.png'
import heading3 from '../../../assets/images/heading-3.png'
import heading4 from '../../../assets/images/heading-4.png'

function Heading() {
  return (
    <div className='Heading'>
      <div className='slider'>
              <Swiper modules={[Pagination]} pagination={{dynamicBullets: true , clickable:true}}>
                <SwiperSlide>
                  <img src={mBanner1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={mBanner2} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="flex my-4">
              <div className="row g-5">
                <div className="col-xl-3 col-md-6 col-sm-6">
                  <div className='details d-flex justify-content-center align-items-center'>
                    <img src={heading1} alt="" className=''/>
                    <div className='d-flex flex-column justify-content-center'>
                      <b className='text-uppercase' style={{fontSize:'15px'}}>Free Shipping</b>
                      <p className='text-secondary' style={{fontSize:'15px' , whiteSpace:'nowrap',whiteSpace:'nowrap'}}>Free dedlivery worldwide</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-6">
                  <div className='details d-flex justify-content-center align-items-center'>
                    <img src={heading2} alt="" className=''/>
                    <div className='d-flex flex-column justify-content-center'>
                      <b className='text-uppercase' style={{fontSize:'15px'}}>Order Onlivne</b>
                      <p className='text-secondary' style={{fontSize:'15px' , whiteSpace:'nowrap'}}>Hours : 8am - 11pm</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-6">
                  <div className='details d-flex justify-content-center align-items-center'>
                    <img src={heading3} alt="" className=''/>
                    <div className='d-flex flex-column justify-content-center'>
                      <b className='text-uppercase' style={{fontSize:'15px'}}>Shop And Save</b>
                      <p className='text-secondary' style={{fontSize:'15px' , whiteSpace:'nowrap'}}>For All Spices & Herbs</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-6">
                  <div className='details d-flex justify-content-center align-items-center'>
                    <img src={heading4} alt="" className=''/>
                    <div className='d-flex flex-column justify-content-center'>
                      <b className='text-uppercase' style={{fontSize:'15px'}}>Safe Shoping</b>
                      <p className='text-secondary' style={{fontSize:'15px' , whiteSpace:'nowrap'}}>Ensure genuine 100%</p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
    </div>
  )
}

export default Heading
