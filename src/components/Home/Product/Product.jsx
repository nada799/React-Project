import React from 'react'
import './Product.css'
import { GoHeartFill } from "react-icons/go";
import { FaCartPlus } from "react-icons/fa6";
import Stars from '../../Stars/Stars';
import { useNavigate } from 'react-router-dom';

function Product({ val , index , onClick , addToCart , addToWishList }) {

  const navigate = useNavigate()

  const handleClick = () => {
    localStorage.setItem('selectedProductIndex', index)
    if (onClick) onClick()
    navigate(`/shop/singleProduct/${index}`)
  };

  return (
    <div className='Product flex'>
        <div className="images" onClick={handleClick}>
          <img src={val?.img || val?.thumbnail} alt="" className='card-img'/>
          <img src={val?.images[0]} alt="" className='card-img'/>
        </div>
        <div className='card-body d-flex flex-column gap-1 align-items-center'>
          <b onClick={handleClick}>{val?.title}</b>
          <Stars/>
          <div className="details">
            {val?.description}
          </div>
          <p className='m-0 fw-bold'>${val?.price}</p>
      </div>
      <div className="process">
        <div onClick={() => addToWishList(val)}>
          <GoHeartFill/>
        </div>
        <div onClick={()=> addToCart(val)}>
          <FaCartPlus/>
        </div>
      </div>
    </div>
  )
}

export default Product
