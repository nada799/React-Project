import React, { useEffect, useRef, useState } from 'react'
import './AllProducts.css'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import { FaList } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import Product from '../../Home/Product/Product'
import Loading from '../../Loading'

function AllProducts({changeFlexDir , flexDir,allData ,changeSorting , sort ,addToCart , addToWishList , searchTerm , handleSearch , handleProductClick}) {


  const row = useRef(null)
  const col = useRef(null)
  const change = useRef(null)
  
  
  function changeFlex(state){
    if(state == 'row'){
      row.current.classList.add('active')
      col.current.classList.remove('active')
      change.current.classList.remove('change')
      changeFlexDir('row')
    }else if(state == 'col'){
      row.current.classList.remove('active')
      col.current.classList.add('active')
      change.current.classList.add('change')
      changeFlexDir('col')
    }
  }

  

  
  const showData = allData.map((val , key) => (
    <div key={key}>
        <Product addToWishList={addToWishList} addToCart={addToCart} val={val} index={key} onClick={() => handleProductClick(key)} />
    </div>
  ))
  

    useEffect(()=>{
      if (row.current && col.current && change.current) {
        if (flexDir === 'row') {
          row.current.classList.add('active');
          col.current.classList.remove('active');
          change.current.classList.remove('change');
        } else {
          row.current.classList.remove('active');
          col.current.classList.add('active');
          change.current.classList.add('change');
        }
      }
    },[])




  return (
    <div className='AllProducts'>
      <div className="sorting-data d-flex align-items-center justify-content-between py-2 px-3 border rounded">
        <div className='flex gap-2'>
          <div className='icon active' onClick={() => changeFlex('row')} ref={row}>
            <BsFillGrid3X3GapFill/>
          </div>
          <div className='icon' onClick={() => changeFlex('col')} ref={col}>
            <FaList/>
          </div>
        </div>
        <div className='flex gap-2'>
          <span style={{whiteSpace:'nowrap'}}>Sort By : </span>
          <select defaultValue={sort} onChange={e => changeSorting(e , allData)} className='form-control bg-dark text-light w-50'>
            <option value="Default">Default</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="Price(Low-High)">Price(Low-High)</option>
            <option value="Price(High-Low)">Price(High-Low)</option>
          </select>
        <div className="search-bar ">
        <input
          type="search"
          className="form-control "
          placeholder="Search for a product..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
        </div>
      </div>

        <div className="container mt-3">
          <div className="row box" ref={change}>
            {showData}
          </div>
        </div>
    </div>
  )
}

export default AllProducts
