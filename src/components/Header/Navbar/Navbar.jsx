import React, { useRef, useState } from 'react'
import './Navbar.css'
import banner1 from '../../../assets/images/menu-banner1.jpg'
import banner2 from '../../../assets/images/menu-banner2.jpg'
import banner3 from '../../../assets/images/menu-banner3.jpg'
import {Swiper , SwiperSlide} from 'swiper/react'
import {Autoplay} from 'swiper/modules'
import 'swiper/css';
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";

function Navbar({wishlist}) {


  const dropDownNav = useRef(null)
  const [isActive, setIsActive] = useState(false)

  function toggleDropDownNav(){
    dropDownNav.current.classList.toggle('open')
    setIsActive(!isActive)
  }



  return (
    <div className='Navbar container'>
      <p className='m-0'>MENU</p>
      <ul className='flex' ref={dropDownNav}>
        <li>
          <Link to={'/'}>HOME</Link>
        </li>
        <li>
          <a href="#">COLLECTION</a>
          <div className='dropdown row'>
            <div className="col-md-3">
              <div className='d-flex flex-column gap-1'>
                <b className='d-block fs-5 mb-2'>WOMAN'S</b>
                <div className='d-flex flex-column gap-1'>
                  <a href="#"> Unique Features </a>
                  <a href="#">Image Responsive</a>
                  <a href="#"> Auto Carousel </a>
                  <a href="#">Newsletter Form </a>
                  <a href="#"> Four columns </a>
                  <a href="#">Newsletter Form </a>
                  <a href="#"> Good Typography </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className='d-flex flex-column gap-1'>
                <b className='d-block fs-5 mb-2'>MAN'S</b>
                <div className='d-flex flex-column gap-1'>
                  <a href="#"> Unique Features </a>
                  <a href="#">Image Responsive</a>
                  <a href="#"> Auto Carousel </a>
                  <a href="#">Newsletter Form </a>
                  <a href="#"> Four columns </a>
                  <a href="#">Newsletter Form </a>
                  <a href="#"> Good Typography </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className='d-flex flex-column gap-1'>
                <b className='d-block fs-5 mb-2'>CHILDREN'S</b>
                <div className='d-flex flex-column gap-1'>
                  <a href="#"> Unique Features </a>
                  <a href="#">Image Responsive</a>
                  <a href="#"> Auto Carousel </a>
                  <a href="#">Newsletter Form </a>
                  <a href="#"> Four columns </a>
                  <a href="#">Newsletter Form </a>
                  <a href="#"> Good Typography </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <Swiper className='slider' slidesPerView={1} spaceBetween={10} modules={[Autoplay]} autoplay={{delay:2000}} speed={1500}>
                <SwiperSlide>
                  <img src={banner1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={banner2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={banner3} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </li>
        <li>
          <Link to={'/shop'}>SHOP</Link>
        </li>
        <li>
          <Link to={'/blog'}>BLOG</Link>
        </li>
        <li>
          <a href="#">PAGES</a>
          <div className='dropdown2 row p-3'>
            <Link to={'/cart'}>CART</Link>
            <Link to={'/wishlist'}>WISHLIST ( {wishlist.length} )</Link>
            <Link to={'/shop/singleProduct/:index'}>PRODUCT DETAILS PAGES</Link>
            <Link to={'/blog/singlePost'}>SINGLE POST</Link>
          </div>
        </li>
        <li>
          <Link to={'/about us'}>ABOUT US</Link>
        </li>
        <li>
          <Link to={'/contact us'} >CONTACT US</Link>
        </li>
      </ul>
      <p className={`m-0 icon ${isActive ? 'active' : ''}`} onClick={toggleDropDownNav}><FaBars/></p>
    </div>

  )
}

export default Navbar
