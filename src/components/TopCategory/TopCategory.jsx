import React, { useEffect, useState } from 'react'
import './TopCategory.css'
import left from '../../assets/images/left1.jpg'
import { spcificCategory } from '../ProductJson'
import { Link } from 'react-router-dom'
import { IoIosArrowUp } from "react-icons/io";

function TopCategory({getAllProducts, categories , getSpecificCategoryOfProducts ,getSpecificCategoryURL}) {
  
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
      if (window.innerWidth > 992) {
        setIsOpen(true)
      } else {
        setIsOpen(false)
      }
    }


    

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className='TopCategory'>
      <b className='text-uppercase fs-5 flex justify-content-between border-bottom' style={{fontWeight:'600' , whiteSpace:'wrap'}}>Top category
      {isMobile && (
         <IoIosArrowUp className={`category-icon ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}/> 
      )}
         </b>
         {(isOpen || !isMobile) && (
      <div className='d-flex flex-column'>
        <Link to={'/shop'} style={{fontSize:'18px'}} onClick={() => getAllProducts(categories) }>All Products</Link>
        {spcificCategory?.map((el , index) => (
          <Link to={'/shop'} key={index} onClick={() => getSpecificCategoryOfProducts(index)}> {el.category} </Link>
        ))}
        {categories?.map((el , index) => (
          <Link to={'/shop'} key={index} onClick={() => getSpecificCategoryURL(el.url)}> {el.name} </Link>
        ))}
      </div>
      )}
      <img className='mt-3' style={{cursor:'pointer'}} src={left} alt="" />
    </div>
  )
}

export default TopCategory
