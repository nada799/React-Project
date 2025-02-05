import React from 'react'
import './Featured.css'
import SecTitle from '../../SecTitle/SecTitle'
import { Outlet } from 'react-router-dom'
import fashion from '../../../assets/images/sub5.jpg'


function Featured({allData , addToCart , addToWishList}) {
  return (
    <section className='Featured container'>
      <SecTitle titleSec={'Featured Products'} link1={'New Arrivals'} link2={'Best Sellers'} link3={'Featured'}/>
      <Outlet />

      <div className='container mt-5'>
        <div className='fashion'>
          <img src={fashion} alt=""/>
        </div>
      </div>
    </section>
  )
}

export default Featured
