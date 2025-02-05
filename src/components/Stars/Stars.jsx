import React from 'react'
import './Stars.css'
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";

function Stars() {
  return (
    <div className='Stars'>
      <div className="star">
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStarHalfAlt/>
        <FaRegStar/>
      </div>
    </div>
  )
}

export default Stars
