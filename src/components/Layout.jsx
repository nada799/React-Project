import React, { useEffect, useState } from 'react'
import Header from './Header/Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer/Footer'

function Layout({cart , deleteProduct , wishlist , setCart}) {


  const location = useLocation()

  const [isCartPage, setIsCartPage] = useState(false);

  useEffect(() => {
    if (location.pathname === '/cart') {
      setIsCartPage(true)
    } else {
      setIsCartPage(false)
    }
  }, [location.pathname])

  return (
    <>
      <Header isCartPage={isCartPage} setCart={setCart} wishlist={wishlist} cart={cart} deleteProduct={deleteProduct}/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
