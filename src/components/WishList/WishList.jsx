import React from 'react'
import './WishList.css'
import { Outlet } from 'react-router-dom'
import TopCategory from '../TopCategory/TopCategory'
import product1 from '../../assets/images/product/product1.jpg'
import { IoCloseSharp } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";

function WishList({getAllProducts, clearWishlist , categories , getSpecificCategoryOfProducts ,getSpecificCategoryURL , wishlist , addToCart , deleteProductInWishlist}) {
  return (
    <div className='WishList container mt-2'>
      <div className="row">
        <div className="col-lg-3">
          <TopCategory getAllProducts={getAllProducts} categories={categories} getSpecificCategoryOfProducts={getSpecificCategoryOfProducts} getSpecificCategoryURL={getSpecificCategoryURL}/>
        </div>
        
        <div className="col-lg-9 mt-3">
            {wishlist.length > 0 ?
                <div className="row g-2">
                  {wishlist.map((val,index) => (

                  <>
                    <div className="col-lg-6 col-xl-4 col-md-6 col-sm-12" key={index}>
                      <div className="card">
                        <div className="card-img">
                          <img src={val.img || val.thumbnail} alt="" />
                        </div>
                        <div className="card-body">
                          <p className='text-center'>{val.title}</p>
                          <div className='d-flex justify-content-between'>
                            <button className='btn btn-danger' onClick={()=>deleteProductInWishlist(val)}><IoCloseSharp/></button>
                            <button onClick={() => addToCart(val)} className='btn btn-success'><FaCartPlus/></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                  ))}
                  </div>
                  :
                  <div className='fs-3 text-danger text-uppercase text-center'>There is no Products Here</div>
                }
                {wishlist.length > 0 && (
                  <button className='btn btn-outline-danger m-3 rounded-0 w-25' onClick={clearWishlist}>Remove All</button>
                )}
                </div>

      </div>
    </div>
  )
}

export default WishList
