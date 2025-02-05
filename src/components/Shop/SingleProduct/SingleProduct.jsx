import React, { useEffect, useRef, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import './SingleProduct.css'
import { GoHeartFill } from "react-icons/go";
import { FaCartPlus } from "react-icons/fa6";
import Stars from '../../Stars/Stars';

const SingleProduct = ({ allData , addToCart , addToWishList}) => {

  const { index } = useParams()
  const [pro , setPro] = useState({})
  const bigImg = useRef(null)


  useEffect(() => {
    const selectedIndex = localStorage.getItem('selectedProductIndex');
    
    if (selectedIndex !== null) {
      setPro(allData[selectedIndex])
    } else {
      setPro(allData[0])
    }
  }, [allData])
  

  function changeBG(e){
    let smallImg = bigImg.current.getAttribute('src')
    bigImg.current.setAttribute('src' , e.target.src)
    e.target.setAttribute('src' , smallImg)
  }


  const links = useRef(null)
    function changeActive(e){
      let alllinks = links.current.querySelectorAll('.links a')
      alllinks.forEach(el => el.classList.remove('active'))
      e.target.classList.add('active')
    }


  return (
    <div className='SingleProduct'>
      <div className="card col-sm-12">
        <div className="col-lg-5 col-12">
          <div className='card-img '>
            <img src={pro?.img || pro?.thumbnail} ref={bigImg} alt={pro?.title} className={pro?.img ? "image-1" : "image-2"}/>
          </div>
          <div className='d-flex gap-4'>
            {pro?.images?.map((img , i)=>{
              return(
                <div className='smallImg mt-3'>
                  <img onClick={changeBG} src={img} alt="" />
                </div>
              )
            })}
          </div>
        </div>
        <div className='card-body gap-2'>
          <div className='border-bottom d-flex flex-column gap-2'>
            <p className='fs-5 fw-bold m-0'>{pro?.title}</p>
            <Stars/>
            <p> ${pro?.price}</p>
          </div>
          <div className='border-bottom'>
            <p className='my-2'> Category: <span style={{color:'#888'}}>{pro?.category}</span> </p>
            <p className='my-2'>Rating : <span style={{color:'#888'}}>{pro?.rating}%</span></p>
            <p className='my-2'>Availability : <span style={{color:'#888'}}>Available</span></p>
          </div>
          <div className='border-bottom'>
            <p className='desc '>{pro?.discription}</p>
          </div>
          <div className='d-flex flex-column gap-2 mt-2'>
            <button onClick={()=> addToWishList(pro)} className='btn btn-outline-light text-dark w-50 rounded-0'>Add To Wishlist <GoHeartFill/></button>
            <button onClick={()=> addToCart(pro)} className='btn btn-outline-light text-dark w-50 rounded-0'>Add To cart <FaCartPlus/> </button>
          </div>
        </div>
      </div>


      <div className='mt-5 col-12 border-bottom' ref={links}>
        <div className='d-flex gap-1 links'>
          <Link onClick={changeActive} to={''} className='active'>OverView</Link>
          <Link onClick={changeActive} to={'nested-2'}>Review</Link>
          <Link onClick={changeActive} to={'nested-3'}>Solution</Link>
        </div>
      </div>
        <Outlet/>
    </div>
  )
}

export default SingleProduct


