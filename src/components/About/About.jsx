import React, { useEffect, useRef, useState } from 'react'
import './About.css'
import { Outlet } from 'react-router-dom'
import TopCategory from '../TopCategory/TopCategory'
import aboutImg from '../../assets/images/about-page-gaando.jpg'
import SecTitle from '../SecTitle/SecTitle'
import {Swiper , SwiperSlide} from 'swiper/react'
import {Autoplay , Navigation} from 'swiper/modules'
import team1 from '../../assets/images/tm1.jpg'
import team2 from '../../assets/images/tm2.jpg'
import team3 from '../../assets/images/tm3.jpg'
import team4 from '../../assets/images/tm4.jpg'
import team5 from '../../assets/images/tm5.jpg'
import team6 from '../../assets/images/user1.jpg'
import team7 from '../../assets/images/user2.jpg'
import team8 from '../../assets/images/user3.jpg'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

function About({categories , getSpecificCategoryOfProducts ,getSpecificCategoryURL}) {


  const [openIndex, setOpenIndex] = useState(1)


  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const skillsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <div className='About'>
      <Outlet/>
      <div className="container">
        <div className="row mt-4">

          <div className="col-lg-3">
            <TopCategory categories={categories} getSpecificCategoryOfProducts={getSpecificCategoryOfProducts} getSpecificCategoryURL={getSpecificCategoryURL}  />
            <div className='topBrand mt-4'>
              <b className='text-uppercase topbrands fs-5' style={{fontWeight:'600'}}>top brands</b>
              <div className='d-flex flex-column mt-3'>
                <a href="#">Brand-1</a>
                <a href="#">Brand-2</a>
                <a href="#">Brand-3</a>
                <a href="#">Brand-4</a>
                <a href="#">Brand-5</a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-9">
            <div className='bigImage'>
              <img src={aboutImg} alt="" />
            </div>
            <div className=' mt-3 d-flex flex-column gap-3'>
              <b className='text-uppercase fs-5 fw-2'>themini Design is Best Part of my Life</b>
              <p className='text-secondary' style={{lineHeight:2}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
              <button className='btn btn-success w-25 rounded-0'>Hire Me</button>
            </div>
              
                <div className="row mt-5" >
                    <div className="col-lg-6">
                      <div>
                          <b className='fs-5 title'>->> What We Do ?</b>
                          <div className='mt-4 '>
                            <div className='textToggle' onClick={() => toggleItem(1)}>1. What is HTML?</div>
                            <div className={` details ${openIndex === 1 ? "open" : ""}`}>HTML is a computer language devised to can then b the Internet. It is relatively easy to learn, with the basics being accessible.</div>
                          </div>
                          <div className='mt-1 '>
                            <div className='textToggle' onClick={() => toggleItem(2)}>2. What is Bootstrap?</div>
                            <div className={` details ${openIndex === 2 ? "open" : ""}`}>Bootstrap is the most popular HTML, CSS, and JS frameen I discovered Bootstrap a few was still gaining in popularity, addition to HTML, CSS and JS</div>
                          </div>
                          <div className='mt-1 '>
                            <div className='textToggle' onClick={() => toggleItem(3)}>3. What is CSS?</div>
                            <div className={` details ${openIndex === 3 ? "open" : ""}`}>Cascading Style Sheets, fondly referred to as CSS, is a simple design language intended to simplify the procrt of a web page. Using CSS.</div>
                          </div>
                      </div>
                    </div>
                    <div className="col-lg-6 ">
                      <div>
                          <b className='fs-5 title title-2'>->> Skills ..</b>
                          <div ref={skillsRef} className="skills mt-4">
                              <div className="skill-bar">
                                  <div className="skill-color html" style={{ width: isVisible ? "80%" : "0%" }}>Html → 80%</div>
                              </div>

                              <div className="skill-bar">
                                  <div className="skill-color css" style={{ width: isVisible ? "90%" : "0%" }}>Css → 90%</div>
                              </div>

                              <div className="skill-bar">
                                  <div className="skill-color js" style={{ width: isVisible ? "65%" : "0%" }}>JavaScript → 65%</div>
                              </div>

                              <div className="skill-bar">
                                  <div className="skill-color jquery" style={{ width: isVisible ? "50%" : "0%" }}>jQuery → 50%</div>
                              </div>

                              <div className="skill-bar">
                                  <div className="skill-color bootstrap" style={{ width: isVisible ? "95%" : "0%" }}>Bootstrap → 95%</div>
                              </div>

                              <div className="skill-bar">
                                  <div className="skill-color react" style={{ width: isVisible ? "75%" : "0%" }}>React.js → 75%</div>
                              </div>
                          </div>
                      </div>
                    </div>
                </div>

            <div className='mt-5'>
              <SecTitle titleSec={'Our Creative Team'}/>
              <Swiper
                className='row mt-2'
                slidesPerView={3}
                spaceBetween={20}
                breakpoints={{
                  1100:{slidesPerView:3},
                  992:{slidesPerView:2},
                  768:{slidesPerView:2},
                  300:{slidesPerView:1}
                }}
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
                <SwiperSlide>  
                  <div className="card">
                    <div className="card-img">
                      <img src={team1} alt="" />
                    </div>
                    <div className="card-body p-3">
                      <p className='text-secondary'>JavaScript Developer</p>
                      <p className='my-2 text-light'>User One</p>
                      <p className='datails text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate aut commodi consequatur tempora voluptatibus odit, et atque dolorem earum sed pariatur nisi corrupti nesciunt, quos qui inventore! Quasi, asperiores.</p>
                      <div className='flex gap-1'>
                        <div className='icons'>
                          <FaFacebookF/>
                        </div>
                        <div className='icons'>
                          <FaTwitter/>
                        </div>
                        <div className='icons'>
                          <FaWhatsapp/>
                        </div>
                        <div className='icons'>
                          <FaInstagram/>
                        </div>
                        <div className='icons'>
                          <FaLinkedinIn/>
                        </div>
                        <div className='icons'>
                          <FaPinterest/>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                
                <SwiperSlide>  
                  <div className="card">
                    <div className="card-img">
                      <img src={team2} alt="" />
                    </div>
                    <div className="card-body p-3">
                      <p className='text-secondary'>JavaScript Developer</p>
                      <p className='my-2 text-light'>User Two</p>
                      <p className='datails text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate aut commodi consequatur tempora voluptatibus odit, et atque dolorem earum sed pariatur nisi corrupti nesciunt, quos qui inventore! Quasi, asperiores.</p>
                      <div className='flex gap-1'>
                        <div className='icons'>
                          <FaFacebookF/>
                        </div>
                        <div className='icons'>
                          <FaTwitter/>
                        </div>
                        <div className='icons'>
                          <FaWhatsapp/>
                        </div>
                        <div className='icons'>
                          <FaInstagram/>
                        </div>
                        <div className='icons'>
                          <FaLinkedinIn/>
                        </div>
                        <div className='icons'>
                          <FaPinterest/>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>  
                  <div className="card">
                    <div className="card-img">
                      <img src={team3} alt="" />
                    </div>
                    <div className="card-body p-3">
                      <p className='text-secondary'>JavaScript Developer</p>
                      <p className='my-2 text-light'>User Three</p>
                      <p className='datails text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate aut commodi consequatur tempora voluptatibus odit, et atque dolorem earum sed pariatur nisi corrupti nesciunt, quos qui inventore! Quasi, asperiores.</p>
                      <div className='flex gap-1'>
                        <div className='icons'>
                          <FaFacebookF/>
                        </div>
                        <div className='icons'>
                          <FaTwitter/>
                        </div>
                        <div className='icons'>
                          <FaWhatsapp/>
                        </div>
                        <div className='icons'>
                          <FaInstagram/>
                        </div>
                        <div className='icons'>
                          <FaLinkedinIn/>
                        </div>
                        <div className='icons'>
                          <FaPinterest/>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>  
                  <div className="card">
                    <div className="card-img">
                      <img src={team4} alt="" />
                    </div>
                    <div className="card-body p-3">
                      <p className='text-secondary'>JavaScript Developer</p>
                      <p className='my-2 text-light'>User Four</p>
                      <p className='datails text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate aut commodi consequatur tempora voluptatibus odit, et atque dolorem earum sed pariatur nisi corrupti nesciunt, quos qui inventore! Quasi, asperiores.</p>
                      <div className='flex gap-1'>
                        <div className='icons'>
                          <FaFacebookF/>
                        </div>
                        <div className='icons'>
                          <FaTwitter/>
                        </div>
                        <div className='icons'>
                          <FaWhatsapp/>
                        </div>
                        <div className='icons'>
                          <FaInstagram/>
                        </div>
                        <div className='icons'>
                          <FaLinkedinIn/>
                        </div>
                        <div className='icons'>
                          <FaPinterest/>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>  
                  <div className="card">
                    <div className="card-img">
                      <img src={team5} alt="" />
                    </div>
                    <div className="card-body p-3">
                      <p className='text-secondary'>JavaScript Developer</p>
                      <p className='my-2 text-light'>User Five</p>
                      <p className='datails text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate aut commodi consequatur tempora voluptatibus odit, et atque dolorem earum sed pariatur nisi corrupti nesciunt, quos qui inventore! Quasi, asperiores.</p>
                      <div className='flex gap-1'>
                        <div className='icons'>
                          <FaFacebookF/>
                        </div>
                        <div className='icons'>
                          <FaTwitter/>
                        </div>
                        <div className='icons'>
                          <FaWhatsapp/>
                        </div>
                        <div className='icons'>
                          <FaInstagram/>
                        </div>
                        <div className='icons'>
                          <FaLinkedinIn/>
                        </div>
                        <div className='icons'>
                          <FaPinterest/>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>  
                  <div className="card">
                    <div className="card-img">
                      <img src={team6} alt="" />
                    </div>
                    <div className="card-body p-3">
                      <p className='text-secondary'>JavaScript Developer</p>
                      <p className='my-2 text-light'>User Six</p>
                      <p className='datails text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate aut commodi consequatur tempora voluptatibus odit, et atque dolorem earum sed pariatur nisi corrupti nesciunt, quos qui inventore! Quasi, asperiores.</p>
                      <div className='flex gap-1'>
                        <div className='icons'>
                          <FaFacebookF/>
                        </div>
                        <div className='icons'>
                          <FaTwitter/>
                        </div>
                        <div className='icons'>
                          <FaWhatsapp/>
                        </div>
                        <div className='icons'>
                          <FaInstagram/>
                        </div>
                        <div className='icons'>
                          <FaLinkedinIn/>
                        </div>
                        <div className='icons'>
                          <FaPinterest/>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>  
                  <div className="card">
                    <div className="card-img">
                      <img src={team7} alt="" />
                    </div>
                    <div className="card-body p-3">
                      <p className='text-secondary'>JavaScript Developer</p>
                      <p className='my-2 text-light'>User Seven</p>
                      <p className='datails text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate aut commodi consequatur tempora voluptatibus odit, et atque dolorem earum sed pariatur nisi corrupti nesciunt, quos qui inventore! Quasi, asperiores.</p>
                      <div className='flex gap-1'>
                        <div className='icons'>
                          <FaFacebookF/>
                        </div>
                        <div className='icons'>
                          <FaTwitter/>
                        </div>
                        <div className='icons'>
                          <FaWhatsapp/>
                        </div>
                        <div className='icons'>
                          <FaInstagram/>
                        </div>
                        <div className='icons'>
                          <FaLinkedinIn/>
                        </div>
                        <div className='icons'>
                          <FaPinterest/>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>  
                  <div className="card">
                    <div className="card-img">
                      <img src={team8} alt="" />
                    </div>
                    <div className="card-body p-3">
                      <p className='text-secondary'>JavaScript Developer</p>
                      <p className='my-2 text-light'>User Eight</p>
                      <p className='datails text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate aut commodi consequatur tempora voluptatibus odit, et atque dolorem earum sed pariatur nisi corrupti nesciunt, quos qui inventore! Quasi, asperiores.</p>
                      <div className='flex gap-1'>
                        <div className='icons'>
                          <FaFacebookF/>
                        </div>
                        <div className='icons'>
                          <FaTwitter/>
                        </div>
                        <div className='icons'>
                          <FaWhatsapp/>
                        </div>
                        <div className='icons'>
                          <FaInstagram/>
                        </div>
                        <div className='icons'>
                          <FaLinkedinIn/>
                        </div>
                        <div className='icons'>
                          <FaPinterest/>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
