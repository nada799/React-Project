import React from 'react'
import './Info.css'
import { IoChevronDownOutline } from "react-icons/io5";
import { useRef } from 'react';

function Info() {


  const dropdown_1 = useRef(null)
  const dropdown_2 = useRef(null)

  const toggleDropDown = (state)=>{
    switch (state) {
      case 'one':
        
        dropdown_1.current.classList.toggle('open')
        dropdown_2.current.classList.remove('open')
        break;
        
        default:
        dropdown_2.current.classList.toggle('open')
        dropdown_1.current.classList.remove('open')
        break;
    }
  }

  return (
    <div className='Info border-1'>
      <div className='container flex justify-content-between p-2'>
        <div className='text-uppercase'>Days a week from 9:00 am to 7:00 pm</div>
        <div className='flex gap-3'>
          <div>My Account</div>
          <div>
            <div onClick={e => toggleDropDown('one')} style={{cursor:'pointer'}}>
            Language <IoChevronDownOutline/> 
            </div> 
            <div className='dropdown' ref={dropdown_1}>
              <p>English</p>
              <p>Arabic</p>
            </div>
          </div>

          <div>
            <div onClick={e => toggleDropDown('two')} style={{cursor:'pointer'}}>
            Currency <IoChevronDownOutline/>
            </div>
          <div className='dropdown' ref={dropdown_2}>
            <p>€ Euro</p>
            <p>£ Pound Sterling</p>
            <p>$ US Dollar</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
