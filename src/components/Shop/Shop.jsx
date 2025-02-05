import React, { useEffect, useState } from 'react'
import './Shop.css'
import { Link, Outlet } from 'react-router-dom'
import HeadOfPage from '../HeadOfPage/HeadOfPage'
import TopCategory from '../TopCategory/TopCategory'
import {Swiper , SwiperSlide} from 'swiper/react'
import { Autoplay , Navigation } from 'swiper/modules'
import 'swiper/css'
import Product from '../Home/Product/Product'
import SecTitle from '../SecTitle/SecTitle'
import { allProducts } from '../ProductJson'

function Shop({categories , getSpecificCategoryOfProducts ,getSpecificCategoryURL }) {


  const chunkedProducts = [];
  for (let i = 0 ; i < allProducts.length ; i += 3) {
    chunkedProducts.push(allProducts.slice(i, i + 3));
  }

  const showData1 = chunkedProducts.map((chunk, index) => (
    <SwiperSlide key={index} className='mt-3'>
      <div className="card">
        <div className="row">
          {chunk.map((val, key) => (
            <div key={key}>
              <Product
                val={val}
                index={key}
              />
            </div>
          ))}
        </div>
      </div>
    </SwiperSlide>
  ));


  return (
    <div className='Shop container'>
      <HeadOfPage title1={'Products'} title2={'Products'} />
      <div className="row mt-4">
        <div className="col-lg-3">
        <TopCategory categories={categories} getSpecificCategoryOfProducts={getSpecificCategoryOfProducts} getSpecificCategoryURL={getSpecificCategoryURL}  />
          <div className="mySwiper mt-3">
            <SecTitle titleSec={'Featured Products'}/>
            <Swiper 
                slidesPerView={'auto'}
                modules={[Autoplay , Navigation]}
                autoplay={{
                  delay:3000,
                  disableOnInteraction:false
                }}
                navigation={{
                  prevEl: '.SecTitle .slide-to-left',
                  nextEl:'.SecTitle .slide-to-right'
                }}
            >

              {showData1}

            </Swiper>
          </div>
        </div>
        <div className="col-lg-9">
        <Outlet/>
         
        </div>
      </div>
    </div>
  )
}
export default Shop
