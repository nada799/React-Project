import React from 'react'
import './Header.css'
import Info from './Info/Info'
import Logo from './Logo/Logo'
import Navbar from './Navbar/Navbar'

function Header({cart , deleteProduct , wishlist , setCart , isCartPage}) {
  return (
    <div className='Header'>
      <Info/>
      <Logo isCartPage={isCartPage} setCart={setCart} cart={cart}  deleteProduct={deleteProduct} />
      <Navbar wishlist={wishlist} />
    </div>
  )
}

export default Header
