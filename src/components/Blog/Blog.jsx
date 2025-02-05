import React from 'react'
import './Blog.css'
import TopCategory from '../TopCategory/TopCategory'
import left from '../../assets/images/left1.jpg'
import blog1 from '../../assets/images/blog/blog_img_01.jpg'
import blog2 from '../../assets/images/blog/blog_img_02.jpg'
import blog3 from '../../assets/images/blog/blog_img_03.jpg'
import blog4 from '../../assets/images/blog/blog_img_04.jpg'
import blog5 from '../../assets/images/blog/blog_img_05.jpg'
import blog6 from '../../assets/images/blog/blog_img_06.jpg'
import blog7 from '../../assets/images/blog/blog_img_07.jpg'
import blog8 from '../../assets/images/blog/blog_img_08.jpg'
import { FaArrowCircleRight } from "react-icons/fa";

import { FaCalendarAlt, FaLink } from "react-icons/fa";
import HeadOfPage from '../HeadOfPage/HeadOfPage'
import { Link, useNavigate } from 'react-router-dom'


function Blog({categories , getSpecificCategoryOfProducts ,getSpecificCategoryURL}) {


  const navigate = useNavigate()


  const goToSinglePost = (image) => {
    localStorage.setItem("lastSelectedPost", image);
    navigate(`/blog/singlePost`);
  }



  return (
    <div className='Blog container'>
      <HeadOfPage title1={'Blogs'} title2={'Blog'}/>
      <div className="row mt-4">
        <div className="col-lg-3">
          <div className='topBrand'>
            <b className='text-uppercase topbrands fs-5' style={{fontWeight:'600'}}>top brands</b>
            <div className='d-flex flex-column mt-3'>
              <a href="#">Brand-1</a>
              <a href="#">Brand-2</a>
              <a href="#">Brand-3</a>
              <a href="#">Brand-4</a>
              <a href="#">Brand-5</a>
            </div>
          </div>
          <div className='mt-5'>
            <img src={left} alt="" />
          </div>
          <div className='mt-5'>
            <TopCategory categories={categories} getSpecificCategoryOfProducts={getSpecificCategoryOfProducts} getSpecificCategoryURL={getSpecificCategoryURL}/>
          </div>
          <div className='mt-4'>
            <b className='topbrands text-uppercase fs-5'>latest post</b>
            <div className='mt-3'>
              <div className='posts d-flex gap-4'>
                <img src={blog1} alt="" />
                <div>
                  <b>Fashions fade, style is eternal</b>
                  <p> <FaCalendarAlt/> 11 May 2023 </p>
                </div>
              </div>
              <div className='posts d-flex gap-4'>
                <img src={blog2} alt="" />
                <div>
                  <b>Fashions fade, style is eternal</b>
                  <p> <FaCalendarAlt/> 11 May 2023 </p>
                </div>
              </div>
              <div className='posts d-flex gap-4'>
                <img src={blog3} alt="" />
                <div>
                  <b>Fashions fade, style is eternal</b>
                  <p> <FaCalendarAlt/> 11 May 2023 </p>
                </div>
              </div>
              <div className='posts d-flex gap-4'>
                <img src={blog4} alt="" />
                <div>
                  <b>Fashions fade, style is eternal</b>
                  <p> <FaCalendarAlt/> 11 May 2023 </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-9 mt-2">
          <div className="row g-3">
            <div className="col-lg-6 col-md-6 col-xs-12">
              <div className="card rounded-3">
                <img src={blog1} alt="" />
                <div className="card-body">
                  <div>
                    <b className='fs-5 text-light'>FASHIONS FADE, STYLE IS ETERNAL</b>
                    <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula
                    ullamcorper scelerisque. Morbi eu luctus nisl.</p>
                  </div>
                  <div className='flex justify-content-between'>
                    <p className='my-2'> <FaCalendarAlt/> 11 May 2024 </p>
                    <Link className='my-2' onClick={() => goToSinglePost(blog1)}> Read More <FaArrowCircleRight/> </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12">
              <div className="card rounded-3">
                <img src={blog2} alt="" />
                <div className="card-body">
                  <div>
                    <b className='fs-5 text-light'>FASHIONS FADE, STYLE IS ETERNAL</b>
                    <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula
                    ullamcorper scelerisque. Morbi eu luctus nisl.</p>
                  </div>
                  <div className='flex justify-content-between'>
                    <p className='my-2'> <FaCalendarAlt/> 11 May 2024 </p>
                    <Link className='my-2' onClick={() => goToSinglePost(blog2)}> Read More <FaArrowCircleRight/> </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12">
              <div className="card rounded-3">
                <img src={blog3} alt="" />
                <div className="card-body">
                  <div>
                    <b className='fs-5 text-light'>FASHIONS FADE, STYLE IS ETERNAL</b>
                    <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula
                    ullamcorper scelerisque. Morbi eu luctus nisl.</p>
                  </div>
                  <div className='flex justify-content-between'>
                    <p className='my-2'> <FaCalendarAlt/> 11 May 2024 </p>
                    <Link className='my-2' onClick={() => goToSinglePost(blog3)}> Read More <FaArrowCircleRight/> </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12">
              <div className="card rounded-3">
                <img src={blog4} alt="" />
                <div className="card-body">
                  <div>
                    <b className='fs-5 text-light'>FASHIONS FADE, STYLE IS ETERNAL</b>
                    <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula
                    ullamcorper scelerisque. Morbi eu luctus nisl.</p>
                  </div>
                  <div className='flex justify-content-between'>
                    <p className='my-2'> <FaCalendarAlt/> 11 May 2024 </p>
                    <Link className='my-2' onClick={() => goToSinglePost(blog4)}> Read More <FaArrowCircleRight/> </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12">
              <div className="card rounded-3">
                <img src={blog5} alt="" />
                <div className="card-body">
                  <div>
                    <b className='fs-5 text-light'>FASHIONS FADE, STYLE IS ETERNAL</b>
                    <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula
                    ullamcorper scelerisque. Morbi eu luctus nisl.</p>
                  </div>
                  <div className='flex justify-content-between'>
                    <p className='my-2'> <FaCalendarAlt/> 11 May 2024 </p>
                    <Link className='my-2' onClick={() => goToSinglePost(blog5)}> Read More <FaArrowCircleRight/> </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12">
              <div className="card rounded-3">
                <img src={blog6} alt="" />
                <div className="card-body">
                  <div>
                    <b className='fs-5 text-light'>FASHIONS FADE, STYLE IS ETERNAL</b>
                    <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula
                    ullamcorper scelerisque. Morbi eu luctus nisl.</p>
                  </div>
                  <div className='flex justify-content-between'>
                    <p className='my-2'> <FaCalendarAlt/> 11 May 2024 </p>
                    <Link className='my-2' onClick={() => goToSinglePost(blog6)}> Read More <FaArrowCircleRight/> </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12">
              <div className="card rounded-3">
                <img src={blog7} alt="" />
                <div className="card-body">
                  <div>
                    <b className='fs-5 text-light'>FASHIONS FADE, STYLE IS ETERNAL</b>
                    <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula
                    ullamcorper scelerisque. Morbi eu luctus nisl.</p>
                  </div>
                  <div className='flex justify-content-between'>
                    <p className='my-2'> <FaCalendarAlt/> 11 May 2024 </p>
                    <Link className='my-2' onClick={() => goToSinglePost(blog7)}> Read More <FaArrowCircleRight/> </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12">
              <div className="card rounded-3">
                <img src={blog8} alt="" />
                <div className="card-body">
                  <div>
                    <b className='fs-5 text-light'>FASHIONS FADE, STYLE IS ETERNAL</b>
                    <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula
                    ullamcorper scelerisque. Morbi eu luctus nisl.</p>
                  </div>
                  <div className='flex justify-content-between'>
                    <p className='my-2'> <FaCalendarAlt/> 11 May 2024 </p>
                    <Link className='my-2' onClick={() => goToSinglePost(blog8)}> Read More <FaArrowCircleRight/> </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
