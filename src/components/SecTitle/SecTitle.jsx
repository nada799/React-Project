import React, { useRef } from 'react'
import './SecTitle.css'
import { Link } from 'react-router-dom'
import { BiLeftArrow } from "react-icons/bi";
import { BiRightArrow } from "react-icons/bi";


function SecTitle({titleSec, link1, link2, link3}){ 

  const links = useRef(null)
  function changeActive(e){
    let alllinks = links.current.querySelectorAll('li a')
    alllinks.forEach(el => el.classList.remove('active'))
    e.target.classList.add('active')
  }


  return (
    <div className='SecTitle flex justify-content-between border-bottom pb-2'>
      <div className='text-uppercase fw-bold fs-5'>{titleSec}</div>
      <div className='flex gap-4'>
        <ul className='flex' ref={links}>
          <li onClick={changeActive}>
            <Link className='active' to={''}>{link1}</Link>
          </li>
          <li onClick={changeActive}>
            <Link to={'best seller'}>{link2}</Link>
          </li>
          <li onClick={changeActive}>
            <Link to={'featured'}>{link3}</Link>
          </li>
        </ul>
        <div className='flex gap-1'>
          <div className='slide-to-left slider-icons'>
            <BiLeftArrow/>
          </div>
          <div className='slide-to-right slider-icons'>
            <BiRightArrow/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecTitle
