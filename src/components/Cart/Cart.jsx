import React, { useEffect, useState } from 'react'
import './Cart.css'
import TopCategory from '../TopCategory/TopCategory'
import Brand from '../Home/Brand/Brand'
import product1 from '../../assets/images/product/product1.jpg'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { toast } from 'react-hot-toast'



function Cart({categories , getSpecificCategoryOfProducts ,getSpecificCategoryURL , cart , deleteProduct , setCart}) {


  const [quantities, setQuantities] = useState(
    cart.reduce((acc, item) => {
      acc[item.title] = item.amount
      return acc
    }, {})
  )



  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + (item.price * item.amount), 0)
  }

  const handleQuantityChange = (product, newAmount) => {
    if (newAmount < 1) return

    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [product.title]: newAmount,
    }))

    const updatedCart = cart.map((item) => 
      item.title === product.title ? { ...item, amount: newAmount } : item
    )
    setCart(updatedCart);

    toast.success(`you already have ${newAmount} of product ${product.title}  `)
  }

  useEffect(() => {
    setQuantities(cart.reduce((acc, item) => {
      acc[item.title] = item.amount;
      return acc;
    }, {}))
  }, [cart])

  const removeAllProducts = () => {
    setCart([])
    toast.success('All products have been removed from the cart.', {
      icon: '🛒',
    })
  }



  return ( 
    <div className='Cart container'>
      <div className="row mt-5">
        <div className="col-lg-3">
          <TopCategory categories={categories} getSpecificCategoryOfProducts={getSpecificCategoryOfProducts} getSpecificCategoryURL={getSpecificCategoryURL}/>
        </div>
        <div className="col-lg-9 col-sm-12 d-flex flex-column align-items-center">
          {cart.length > 0 ?
          <>
            <div className='w-100 mt-3'>
              <table>
                <thead>
                  <th>IMAGE</th>
                  <th>PRODUCT NAME</th>
                  <th>CATEGORY</th>
                  <th>QUANTITY</th>
                  <th>UNIT PRICE</th>
                  <th>TOTAL</th>
                </thead>
                <tbody>
                  {cart.map((val , index)=>(
                    <tr key={index}>
                      <td>
                        <div className='proImg d-flex justify-content-center'>
                          <img src={val.img || val.thumbnail} alt="" />
                        </div>
                      </td>
                      <td className='proTitle'> {val.title?.split(' ' , 2).join(' ')} </td>
                      <td>{val.category}</td>
                      <td>
                        <div className='input-group d-flex justify-content-center'>
                          <input defaultValue={quantities[val.title] || val.amount} onChange={(e) => handleQuantityChange(val, Number(e.target.value))} min="1" className='form-control flex-grow-0 w-50 rounded-0' type="number" />
                          <button className='btn btn-danger rounded-0 text-center' onClick={()=>deleteProduct(val)}> <IoIosCloseCircleOutline/> </button>
                        </div>
                      </td>
                      <td>$ {val.price} </td>
                      <td>${(val.price * val.amount).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className='btn btn-danger rounded-0 m-2' onClick={removeAllProducts}>Remove All Products</button>
            </div>
              <div className='flex justify-content-between w-50 mt-5 totall'>
                <p className='m-0'>Totall cart :</p>
                <p className='m-0'>${calculateTotal().toFixed(2)}</p>
              </div>
          </>
          :
          <div className='fs-3 text-danger text-uppercase text-center'>There is no Product in your Cart</div>
          }
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Brand/>
        </div>
      </div>
    </div>
  )
}

export default Cart
