import React from 'react'
import './SinglePost.css'
import TopCategory from '../../TopCategory/TopCategory'
import HeadOfPage from '../../HeadOfPage/HeadOfPage'
import left from '../../../assets/images/left1.jpg'
import blog1 from '../../../assets/images/blog/blog_img_01.jpg'
import blog2 from '../../../assets/images/blog/blog_img_02.jpg'
import blog3 from '../../../assets/images/blog/blog_img_03.jpg'
import blog4 from '../../../assets/images/blog/blog_img_04.jpg'
import blog5 from "../../../assets/images/blog/blog_img_05.jpg";
import blog6 from "../../../assets/images/blog/blog_img_06.jpg";
import blog7 from "../../../assets/images/blog/blog_img_07.jpg";
import blog8 from "../../../assets/images/blog/blog_img_08.jpg";
import user1 from '../../../assets/images/user1.jpg'
import user2 from '../../../assets/images/user2.jpg'
import user3 from '../../../assets/images/user3.jpg'
import { FaCalendarAlt } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'

function SinglePost({categories , getSpecificCategoryOfProducts ,getSpecificCategoryURL}) {

  const location = useLocation()
  const params = new URLSearchParams(location.search)
  let image = params.get("image") || localStorage.getItem("lastSelectedPost")

  if (!image) {
    image = blog1
  }
  
  return (
    <div className='SinglePost container'>
      <HeadOfPage title1={'Blogs'} title2={'Blog / Single Post'}/>
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
        <div className="col-lg-9">
          <div className="card">
            <div className="card-img">
              <img src={image} alt="" />
            </div>
            <div className="card-body ">
              <b className='fs-3 text-light'>Fashions fade, style is eternal</b>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae provident minus similique porro assumenda illo dolore ducimus vero ipsum illum ipsa velit, deleniti accusantium repellat facilis tempora ab Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae provident minus similique porro assumenda illo dolore ducimus vero ipsum illum ipsa velit, deleniti accusantium repellat facilis tempora ab Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae provident minus similique porro assumenda illo dolore ducimus vero ipsum illum ipsa velit, deleniti accusantium repellat facilis tempora ab Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae provident minus similique porro assumenda illo dolore ducimus vero ipsum illum ipsa velit, deleniti accusantium repellat facilis tempora ab</p>
              <p >consectetur adipiscing elit. In rutrum odio urna, vitae ultrices mi malesuada ut. Praesent lacus erat, ultricies ut risus nec, pellentesque interdum purus. In mi justo, consectetur tincidunt sapien eget, venenatis volutpat risus. Maecenas eget pretium eros. Integer tincidunt aliquet ligula in vulputate. Ut ut justo facilisis, vulputate augue vel, vestibulum tortor. Nullam varius lacus non porttitor sodales. Vivamus ultricies est vitae pharetra convallis. Sed suscipit, nisi sit amet tempus mollis, mauris ante tempor risu</p>
              <p>etur adipisicing elit. Repudiandae provident minus similique porro assumenda illo dolore ducimus vero ipsum illum ipsa velit, deleniti accusantium repellat facilis tempora ab Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae provident minus similique porro assumenda illo dolore ducimus vero ipsum illum ipsa velit, deleniti accusantium repellat facilis tempora ab Lorem ipsum dolor sit amet, consectet</p>
              <p className='my-2'> <FaCalendarAlt/> 11 May 2024 </p>
            </div>
          </div>
          <div className='mt-5 comments'>
            <p className='fs-5'>3 Comments</p>
            <div className='d-flex gap-2 border-bottom'>
              <div>
                <img src={user1} alt="" />
              </div>
              <div>
                <p className='m-0'>Radley Lobortis <span>8 months ago</span></p>
                <p>Sed lobortis rpi luctus. Aenean posuere nulla in turluctus. Aenean posuere nulla in turs porttitor larpis porttitor larpis porttitor lauctus. Aenean posuere nulla in turpis porttitor laoreet.</p>
              </div>
            </div>
            <div className='d-flex mt-4 gap-2 border-bottom'>
              <div>
                <img src={user2} alt="" />
              </div>
              <div>
                <p className='m-0'>Radley Lobortis <span>8 months ago</span></p>
                <p>Sed lobortis rpi luctus. Aenean posuere nulla in turluctus. Aenean posuere nulla in turs porttitor larpis porttitor larpis porttitor lauctus. Aenean posuere nulla in turpis porttitor laoreet.</p>
              </div>
            </div>
            <div className='d-flex mt-4 gap-2 '>
              <div>
                <img src={user3} alt="" />
              </div>
              <div>
                <p className='m-0'>Radley Lobortis <span>8 months ago</span></p>
                <p>Sed lobortis rpi luctus. Aenean posuere nulla in turluctus. Aenean posuere nulla in turs porttitor larpis porttitor larpis porttitor lauctus. Aenean posuere nulla in turpis porttitor laoreet.</p>
              </div>
            </div>
          </div>
          <div className="leave mt-5">
            <p className='fs-5'>Leave A Comment</p>
            <div className='d-flex flex-column gap-3'>
              <div className='d-flex gap-3'>
                <input className='form-control rounded-0' type="text" placeholder='Name'/>
                <input className='form-control rounded-0' type="text" placeholder='E-mail Address'/>
              </div>
              <textarea className='form-control rounded-0' placeholder='Enter Your Message'></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePost
