import React from 'react'

import { Routes,Route } from 'react-router-dom'

import Home from "../pages/Home"
import ProductDetails from "../pages/ProductDetails"
import Cart from "../pages/Cart"
import Category from "../pages/Category"

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/category' element={<Category/>} />
        <Route path='/product/:id' element={<ProductDetails/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </>
  )
}

export default Routers