
import React, { lazy, Suspense, useEffect, useState } from 'react'
import {createBrowserRouter , createHashRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import Child1 from './components/Home/Featured/Child1/Child1'
import Child2 from './components/Home/Featured/Child2/Child2'
import Child3 from './components/Home/Featured/Child3/Child3'
import Shop from './components/Shop/Shop'
import axios from 'axios'
import { allProducts, spcificCategory } from './components/ProductJson'
import About from './components/About/About'
import SingleProduct from './components/Shop/SingleProduct/SingleProduct'
import AllProducts from './components/Shop/AllProducts/AllProducts'
import Nested1 from './components/Shop/SingleProduct/Nested1/Nested1'
import Nested2 from './components/Shop/SingleProduct/Nested2/Nested2'
import Nested3 from './components/Shop/SingleProduct/Nested3/Nested3'
import WishList from './components/WishList/WishList'
import Cart from './components/Cart/Cart'
import Blog from './components/Blog/Blog'
import SinglePost from './components/Blog/SinglePost/SinglePost'
import {Toaster, toast} from 'react-hot-toast'
import Swal from "sweetalert2";
import Loading from './components/Loading'
import ScrollTop from './components/ScrollTop/ScrollTop'



const Layout = lazy(()=> import('./components/Layout'))
function App() {

  const [flexDir , setFlexDir] = useState('row')
  const [ allData , setAllData ] = useState([])
  const [categories , setCategories] = useState([])
  const [ sort , setSort ] = useState(null)
  const [cart , setCart] = useState([])
  const [wishlist , setWishlist ] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  

  const handleProductClick = (index) => {
    localStorage.setItem('selectedProductIndex', index)
  }

  function changeFlexDir(state){
    if(state == 'row'){
      setFlexDir('row')
    }else{
      setFlexDir('col')
    }
  }


  //api

  async function getAllProducts(){
    let {data} = await axios.get('https://dummyjson.com/products')
    setAllData( allProducts.concat(data.products) )
  }

  async function getCategories() {
    let {data} = await axios.get('https://dummyjson.com/products/categories')
    setCategories(data)
  }

  function getSpecificCategoryOfProducts(index){
    let newArr = spcificCategory[index].products
    setAllData(newArr)
  }

  async function getSpecificCategoryURL(url) {
    let {data} = await axios.get(url)
    setAllData(data.products)
  }

  useEffect(() => {
    getAllProducts()
    getCategories()
  },[])


  //sorting

  function changeSorting(e){
    if(e.target.value === 'A-Z'){
      allData.sort((a,b) =>{
        return a.title > b.title ? 1 : -1
      })
      setAllData([...allData])
      setSort('A-Z')
    }else if(e.target.value === 'Z-A'){
      allData.sort((a,b) =>{
        return a.title < b.title ? 1 : -1
      })
      setAllData([...allData])
      setSort('Z-A')
    }else if(e.target.value === 'Price(Low-High)'){
      allData.sort((a,b) =>{
        return a.price - b.price
      })
      setAllData([...allData])
      setSort('Price(Low-High)')
    }else if(e.target.value === 'Price(High-Low)'){
      allData.sort((a,b) => {
        return b.price - a.price
      })
      setAllData([...allData])
      setSort('Price(High-Low)')
    }else{
      getAllProducts()
      setSort('Default')
    }
  }


  //cart

  function addToCart(product) {
    const existingProduct = cart.find((item) => item.title === product.title)
    
    if (existingProduct) {
      toast.error("This product is already added!")
      swalWithBootstrapButtons.fire({
        title: "Product already in cart",
        text: `Do you want to add one more? Current quantity: ${existingProduct.amount}`,
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Yes, add one more!",
        cancelButtonText: "Cancel",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          let updatedCart = cart.map((item) => 
            item.title === product.title ? { ...item, amount: item.amount + 1 } : item
          );
          setCart(updatedCart);
          toast.success(`you already have ${existingProduct.amount + 1} of product ${product.title}`);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          toast.info('Product not added again.')
        }
      });
    } else {
      setCart([...cart, { ...product, amount: 1 }])
      toast.success('Successfully added Product!')
    }
  }
  
  


const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success ms-2",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: false
})

function deleteProduct(product) {
  swalWithBootstrapButtons.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel!",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      let newArr = cart.filter((el) => el.title !== product.title);
      setCart(newArr)
      toast.success('You Remove this item')
      
    } else if (
      result.dismiss === Swal.DismissReason.cancel) {
      
    }
  })
}



  //wishlist
  function addToWishList(product) {
    const existingProduct = wishlist.find((item) => item.title === product.title);
  
    if (existingProduct) {
      
      toast.error("This product is already added!");
      swalWithBootstrapButtons.fire({
        title: "Product already in wishlist",
        text: "This product is already added!",
        icon: "warning",
        confirmButtonText: "Ok", 
        reverseButtons: true 
      })
    } else {
     
      setWishlist([...wishlist, product]);

      toast.success('Successfully added product!', {
        icon: '❤️',
      })
    }
  }

  function deleteProductInWishlist(product){
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        let newArr = wishlist.filter((el) => el.title !== product.title);
        setWishlist(newArr)
        toast.success('Success remove poroduct from Wishlist')
      } else if (
        result.dismiss === Swal.DismissReason.cancel) {
      }
    })
  }
  const clearWishlist = () => {
    setWishlist([])
  }


  const handleSearch = (term) => {
    setSearchTerm(term)
    if (term.trim() === '') {
      getAllProducts()
    } else {
      const filtered = allData.filter(product =>
        product.title.toLowerCase().includes(term.toLowerCase())
      )
      setAllData([...filtered])
    }
  }


  useEffect(()=>{
    if(localStorage.getItem('cart') && localStorage.getItem('wishlist')){
      setCart(JSON.parse(localStorage.getItem('cart')))
      setWishlist(JSON.parse(localStorage.getItem('wishlist')))
    }else{
      setCart([])
      setWishlist([])
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('cart' , JSON.stringify(cart))
    localStorage.setItem('wishlist' , JSON.stringify(wishlist))
  },[cart , wishlist])
  


  const router = createHashRouter([{
      path:'' , element:<Suspense fallback={<Loading/>}> <Layout setCart={setCart} wishlist={wishlist} cart={cart} deleteProduct={deleteProduct} /> </Suspense> , children:[
      {path:'' , element: <Home addToWishList={addToWishList} allData={allData} addToCart={addToCart}/> ,children:[
        {path:'' , element : <Child1 handleProductClick={handleProductClick} addToWishList={addToWishList} allData={allData} addToCart={addToCart} />},
        {path:'best seller' , element:<Child2 handleProductClick={handleProductClick} addToWishList={addToWishList} allData={allData} addToCart={addToCart} />},
        {path:'featured' , element:<Child3 handleProductClick={handleProductClick} addToWishList={addToWishList} allData={allData} addToCart={addToCart} />}
      ]},
      {path:'shop', element:<Shop flexDir={flexDir} changeFlexDir={changeFlexDir} allData={allData} categories={categories} getSpecificCategoryOfProducts={getSpecificCategoryOfProducts} getSpecificCategoryURL={getSpecificCategoryURL} /> ,children:[
        {path:'' , element:<AllProducts handleProductClick={handleProductClick} searchTerm={searchTerm} handleSearch={handleSearch} addToWishList={addToWishList} addToCart={addToCart} sort={sort} changeSorting={changeSorting} flexDir={flexDir} changeFlexDir={changeFlexDir} allData={allData}/>},
        {path:'singleProduct/:index' , element:<SingleProduct addToWishList={addToWishList} addToCart={addToCart} allData={allData}/> , children:[
          {path:'' , element:<Nested1/>},
          {path:'nested-2' , element: <Nested2/>},
          {path:'nested-3' , element:<Nested3/>}
        ]}
      ]},
      {path:'wishlist' , element : <WishList clearWishlist={clearWishlist} deleteProductInWishlist={deleteProductInWishlist} wishlist={wishlist} addToCart={addToCart} categories={categories} getSpecificCategoryOfProducts={getSpecificCategoryOfProducts} getSpecificCategoryURL={getSpecificCategoryURL}/>},
      {path:'about us' , element : <About categories={categories} getSpecificCategoryOfProducts={getSpecificCategoryOfProducts} getSpecificCategoryURL={getSpecificCategoryURL}/>},
      {path:'cart' , element: <Cart setCart={setCart} deleteProduct={deleteProduct} cart={cart} categories={categories} getSpecificCategoryOfProducts={getSpecificCategoryOfProducts} getSpecificCategoryURL={getSpecificCategoryURL}/>},
      {path:'blog' , element: <Blog categories={categories} getSpecificCategoryOfProducts={getSpecificCategoryOfProducts} getSpecificCategoryURL={getSpecificCategoryURL}/>},
      {path:'blog/singlePost' , element: <SinglePost categories={categories} getSpecificCategoryOfProducts={getSpecificCategoryOfProducts} getSpecificCategoryURL={getSpecificCategoryURL}/>},
    ]},
    {path:'contact us',element:<Contact setCart={setCart} wishlist={wishlist} cart={cart} deleteProduct={deleteProduct} categories={categories} getSpecificCategoryOfProducts={getSpecificCategoryOfProducts} getSpecificCategoryURL={getSpecificCategoryURL} />}
  ])

  return (
    <main>
      <ScrollTop/>
      <Toaster/>
      <RouterProvider router={router} />
    </main>
  )
}

export default App
