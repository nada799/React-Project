import React from 'react'
import './CBody.css'
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import TopCategory from '../../TopCategory/TopCategory';

function CBody({categories , getSpecificCategoryOfProducts ,getSpecificCategoryURL}) {
  return (
    <div className='CBody container'>
      <div className="row">
        <div className="col-lg-3">
          <TopCategory categories={categories} getSpecificCategoryOfProducts={getSpecificCategoryOfProducts} getSpecificCategoryURL={getSpecificCategoryURL}/>
        </div>
        <div className="col-lg-9">
          <div className="row">
            <div className="second col-lg-4 mt-4">
              <div>
                <b>Our Location</b>
                <p className='m-0'>Office address</p>
                <p className='mt-2'>124,Lorem Ipsum has been
                text ever since the 1500</p>
                <p> <FaPhone/> +91-9987-654-321</p>
              </div>
              <div className='my-5'>
                <b>Careers</b>
                <p className='mt-2'>dummy text ever since the 1500s, simply dummy text of the typesetting industry.</p>
                <p className=''> <MdEmail style={{fontSize:'20px'}}/> careers@yourdomain.com</p>
              </div>
              <div>
                <b>Say Hello</b>
                <p className='mt-2'>simply dummy text of the printing and typesetting industry.</p>
                <p className=''> <MdEmail style={{fontSize:'20px'}}/> info@yourdomailname.com</p>
              </div>
            </div>
            <div className="col-lg-8">
              <div className='d-flex flex-column gap-4'>
              <input type="text" placeholder='Name' />
              <input type="text" placeholder='Email Address' />
              <input type="text" placeholder='Phone Number' />
              <input type="text" placeholder='Subject' />
              <textarea name="" id="" placeholder='Message'></textarea>
              <button>SEND MESSAGE</button>
              </div>
            </div>
          </div>
          <iframe className='mt-3' src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d55100.81748483263!2d31.72933753862304!3d30.328175100000003!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1737732061582!5m2!1sar!2seg" frameborder="0"></iframe>
        </div>
      </div>
    </div>
  )
}

export default CBody
