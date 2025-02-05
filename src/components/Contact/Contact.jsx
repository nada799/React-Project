import React from 'react'
import './Contact.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import CBody from './CBody/CBody'
import { Outlet } from 'react-router-dom'
import Navbar from '../Header/Navbar/Navbar'

function Contact({ setCart, wishlist, cart,  deleteProduct , categories , getSpecificCategoryOfProducts ,getSpecificCategoryURL}) {
  return (
    <div className='Contact'>
      <Header setCart={setCart} wishlist={wishlist} cart={cart} deleteProduct={deleteProduct}/>
      <CBody categories={categories} getSpecificCategoryOfProducts={getSpecificCategoryOfProducts} getSpecificCategoryURL={getSpecificCategoryURL}/>
      <Footer/>
    </div>
  )
}

export default Contact
