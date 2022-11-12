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
import { NotFound } from '../Components/Not found/NotFound'
import { Otp } from '../Components/Otp Page/Otp'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/moisturizer' element={<MostorizerPage/>}/>
        <Route path='/foundation' element={<FoundationPage/>} />
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/cart' element={<h1>Cart</h1>}/>
        <Route path='/favourite' element={<h1>Favourite</h1>}/>
        <Route path ="/products/:productId" element = {<Singleitemshow/>}/>
        <Route  path='/otp' element={<Otp/>}/>
        <Route path='*' element={<NotFound/>}/>
       

    </Routes>
  )
}

export default AllRoutes