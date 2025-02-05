import React from 'react'
import './Home.css'
import Heading from './Heading/Heading'
import Featured from './Featured/Featured'
import News from './News/News'
import Brand from './Brand/Brand'


function Home({allData , addToCart , addToWishList}) {
  return (
    <div className='Home'>
      <Heading/>
      <Featured addToWishList={addToWishList} allData={allData} addToCart={addToCart}/>
      <News/>
      <Brand/>
    </div>
  )
}

export default Home
