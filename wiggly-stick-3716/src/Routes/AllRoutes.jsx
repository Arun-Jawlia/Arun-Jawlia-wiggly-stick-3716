import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import {Login} from '../Components/Login/login'
import {Signup} from '../Components/Login/Signup'
import Checkout from '../Components/Checkout/Checkout'
import Payment from '../Components/Payment/Payment'
import MostorizerPage from '../Pages/MostorizerPage'
import Singleitemshow from '../Pages/Singleitemshow'
import FoundationPage from '../Pages/Foundation/FoundationPage'
import Cart from '../Pages/Cart'
import ProductShow from '../Components/Foundation/ProductShow'

const AllRoutes = ({cartItems,handleProducts,handleRemove}) => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/moisturizer' element={<MostorizerPage  handleProducts = {handleProducts} />}/>
        <Route path='/foundation' element={<FoundationPage/>} />
        <Route path='/checkout' element={<Checkout cartItems={cartItems}/>}/>
        <Route path='/payment' element={<Payment cartItems = {cartItems}  />}/>
        <Route path='/cart' element={<Cart cartItems = {cartItems} handleProducts = {handleProducts} handleRemove = {handleRemove} />}/>
        <Route path='/favourite' element={<h1>Favourite</h1>}/>
        <Route path = "/products/:productId" element = {<Singleitemshow handleProducts = {handleProducts} />}/>
       

    </Routes>
  );
}

export default AllRoutes