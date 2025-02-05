import React, { useEffect, useRef, useState } from 'react'
import './Logo.css'
import { IoIosSearch } from "react-icons/io";
import logo from '../../../assets/images/logo.png'
import { FaCartArrowDown } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import { toast} from 'react-hot-toast'

function Logo({cart , deleteProduct , setCart , isCartPage}) {

  const dropDownCart = useRef(null)
  const [total, setTotal] = useState(0)

  function toggleDropDownCart(){
    dropDownCart.current.classList.toggle('open')
  }


  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success ms-2",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  })

  const updateQuantity = (product, action) => {
    if (action === "decrease" && product.amount === 1) {
      swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "Do you want to remove this product from the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, remove it!",
        cancelButtonText: "No, keep it",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          let newArr = cart.filter((el) => el.title !== product.title);
          setCart(newArr);
          toast.success('You Remove this product')
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          return;
        }
      });
    } else {
      let updatedCart = cart.map((item) => {
        if (item.title === product.title) {
          if (action === "increase") {
            const newAmount = item.amount + 1
            toast.success(`you already have ${newAmount} of product ${item.title}`)
            return { ...item, amount: newAmount }
          }
          if (action === "decrease" && item.amount > 1) {
            const newAmount = item.amount - 1
            return { ...item, amount: newAmount }
          }
        }
        return item
      })
  
      setCart(updatedCart)
      calculateTotal(updatedCart)
    }
  }
  
  
  const calculateTotal = (updatedCart) => {
    let totalAmount = updatedCart.reduce((acc, item) => acc + item.price * item.amount, 0)
    setTotal(totalAmount)
  };

  useEffect(() => {
    calculateTotal(cart)
  }, [cart])


  return (
    <div className='Logo container'>
      <div className='flex justify-content-between py-4'>
        <div className='position-relative col-lg-3 col-12'>
          <input type="text" placeholder='Search' className='form-control py-1 rounded-0'/>
          <IoIosSearch className='icon position-absolute top-0 end-0' style={{transform:'translate(-50%,50%)',cursor:'pointer',transition:'0.3s'}}/>
        </div>

        
        <div className='flex justify-content-between col-lg-7'>
          <div>
            <img src={logo} alt="" />
          </div>

          {!isCartPage && (  
            <div className='shopping-cart position-relative'>
              <div className='flex gap-3' onClick={toggleDropDownCart}>
                <FaCartArrowDown className='cart-icon'/>
                <div className='d-flex flex-column gap-0' style={{lineHeight:'1.1',fontSize:'15px'}}>
                  <span className='m-0 p-0' style={{fontWeight:'700'}}>SHOPPING CART</span>
                  <span className='m-0 p-0'>ITEMS ( {cart.reduce((acc, item) => acc + item.amount, 0)} )</span>
                </div>
              </div>
              <div className='dropdown-cart position-absolute end-0 px-3' ref={dropDownCart}>
                <div className="row gy-3">
                  {cart.length > 0 ? (
                    <div className="col-12">
                      {cart.map((val, index) => (
                        <>
                          <div className="row border-bottom border-secondary py-2" key={index}>
                            <div className="col-10">
                              <div className="row g-2">
                                <div className="col-4">
                                  <div>
                                    <img src={val.img || val.thumbnail} className='card-img' alt="" />
                                  </div>
                                </div>
                                <div className="col-8">
                                  <div className='d-flex flex-column gap-1'>
                                    <b> {val.title?.split(' ' , 2).join(' ')} </b>
                                    <p className='m-0'>$ {val.price} </p>
                                    <div className='d-flex gap-2 '>
                                      <button className='btn btn-dark rounded-1 btn-sm'  onClick={() => updateQuantity(val, "increase")}>+</button>
                                      <span> {val.amount} </span>
                                      <button className='btn btn-dark rounded-1 btn-sm'  onClick={() => updateQuantity(val, "decrease")}>-</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-1" onClick={() => deleteProduct(val)}>
                              <IoIosCloseCircle className='close'/>
                            </div>
                          </div>
                        </>
                      ))}
                    </div>
                  ) : (
                    <div className='text-danger text-center'>There is No Products Here</div>
                  )}
                  <div className="col-12">
                    <div className='flex justify-content-between'>
                      <div className='text-secondary fw-bold'>Totall</div>
                      <div className='text-secondary fw-bold'>${total.toFixed(2)}</div>
                    </div>
                  </div>
                  <div className="col-12">
                    <Link to={'/cart'}>
                      <button className='btn btn-danger w-100 rounded-0'>View Cart</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default Logo
