import React from 'react'
import { Route, Routes } from 'react-router-dom'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<h1>Home</h1>}/>
        <Route path='/login' element={<h1>LOgin</h1>}/>
    </Routes>
  )
}

export default AllRoutes