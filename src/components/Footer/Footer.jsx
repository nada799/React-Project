import React, { useState } from 'react'
import './Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRss } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcDiscover } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcAmex } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";

function Footer() {


  const [openIndex, setOpenIndex] = useState(null)


  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }


  return (
    <div className='Footer'>
      <div className="container">
          <div className="d-flex justify-content-between">
            <div className="detailss">
              <b className='fs-3'>Follow Our Updates !</b>
              <p>Be the First to know about our Fresh Arrivals and much more!</p>
            </div>
            <div className="subscribe">
              <input type="text" placeholder='Enter Your E-mail'/>
              <button>SUBSCRIBE</button>
            </div>
          </div>
          <div className="row gy-3 my-5 mb-0">
            <div className="col-lg-3">
              <b className='text-uppercase d-flex justify-content-between' onClick={() => toggleItem(1)}>Information <FaCirclePlus className={`icon ${openIndex === 1 ? "active" : ""}`}/></b>
              <div className={` details ${openIndex === 1 ? "open" : ""}`}>
                <p className='mt-3'>About Us</p>
                <p className='mt-3'>Delivery Information</p>
                <p className='mt-3'>Privacy Policy</p>
                <p className='mt-3'>Terms & Conditions</p>
                <p className='mt-3'>Contact Us</p>
              </div>
            </div>
            <div className="col-lg-3">
              <b className='text-uppercase d-flex justify-content-between' onClick={() => toggleItem(2)}>Services <FaCirclePlus className={`icon ${openIndex === 2 ? "active" : ""}`}/></b>
              <div className={` details ${openIndex === 2 ? "open" : ""}`}>
                <p className='mt-3'>Returns</p>
                <p className='mt-3'>Site Map</p>
                <p className='mt-3'>Wish List</p>
                <p className='mt-3'>My Account</p>
                <p className='mt-3'>Order History</p>
              </div>
            </div>
            <div className="col-lg-3">
              <b className='text-uppercase d-flex justify-content-between' onClick={() => toggleItem(3)}>Extras <FaCirclePlus className={`icon ${openIndex === 3 ? "active" : ""}`}/></b>
              <div className={` details ${openIndex === 3 ? "open" : ""}`}>
                <p className='mt-3'>Brands</p>
                <p className='mt-3'>Gift Certificates</p>
                <p className='mt-3'>Affiliates</p>
                <p className='mt-3'>Specials</p>
                <p className='mt-3'>Newsletter</p>
              </div>
            </div>
            <div className="col-lg-3">
              <b className='text-uppercase d-flex justify-content-between' onClick={() => toggleItem(4)}>Contacts <FaCirclePlus className={`icon ${openIndex === 4 ? "active" : ""}`}/></b>
              <div className={` details ${openIndex === 4 ? "open" : ""}`}>
                <p className='mt-3'>Warehouse & Offices,</p>
                <p className='mt-3'>12345 Street name, California USA</p>
                <p className='mt-3'>(+024) 666 888</p>
                <p className='mt-3'>yourid@domain.com</p>
                <p className='mt-3'>www.yoursite.com</p>
              </div>
            </div>
          </div>
      </div>
          <div className='bottom'>
            <div className='flex justify-content-between container'>

              <div className='flex gap-4 flex-row'>
                <FaFacebookF className='icons'/>
                <FaGoogle className='icons'/>
                <FaLinkedinIn className='icons'/>
                <FaTwitter className='icons'/>
                <FaRss className='icons'/>
              </div>

              <p className='m-0'>@ 2019 All Rights Reserved Darklook</p>

              <div className='flex gap-3 fs-2'>
                <FaCcPaypal className='icons'/>
                <FaCcVisa className='icons'/>
                <FaCcDiscover className='icons'/>
                <FaCcMastercard className='icons'/>
                <FaCcAmex className='icons'/>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Footer
