import React from 'react'
import './Child3.css'
import {Swiper , SwiperSlide} from 'swiper/react'
import {Autoplay , Pagination , Navigation} from 'swiper/modules'
import 'swiper/css/pagination';
import 'swiper/css'
import Product from '../../Product/Product'
import product1 from '../../../../assets/images/product/product8.jpg'
import product1_1 from '../../../../assets/images/product/product8-1.jpg'
import product2 from '../../../../assets/images/product/product10.jpg'
import product2_1 from '../../../../assets/images/product/product10-1.jpg'
import product3 from '../../../../assets/images/product/product3.jpg'
import product3_1 from '../../../../assets/images/product/product3-1.jpg'
import product4 from '../../../../assets/images/product/product4-1.jpg'
import product4_1 from '../../../../assets/images/product/product5.jpg'
import product5 from '../../../../assets/images/product/product2-1.jpg'
import product5_1 from '../../../../assets/images/product/product2.jpg'

function Child3({allData , addToCart , addToWishList , handleProductClick}) {
  return (
    <div className='Child3'>
      <div className="container">
      <Swiper 
        className='row'
        slidesPerView={4}
        breakpoints={{
          1024:{slidesPerView:4},
          992:{slidesPerView:3},
          768:{slidesPerView:2},
          300:{slidesPerView:1}
        }}
        modules={[Autoplay , Pagination,Navigation]}
        autoplay={{
          delay:2000,
          disableOnInteraction:false
        }}
        pagination={{
          clickable:true,
          dynamicBullets:true
        }}
        navigation={{
          prevEl: '.SecTitle .slide-to-left',
          nextEl:'.SecTitle .slide-to-right'
        }}
      >
        {allData.slice(20 , 30).map((val , key) => {
          return(
          <SwiperSlide key={key}>
            <Product addToWishList={addToWishList} addToCart={addToCart} val={val} index={key} onClick={() => handleProductClick(key)}/>
          </SwiperSlide>
          )
        })}
      </Swiper>
      </div>
    </div>
  )
}

export default Child3
