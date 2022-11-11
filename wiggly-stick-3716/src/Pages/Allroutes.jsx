import React from 'react'
import {Routes,Route} from "react-router-dom"
import MostorizerPage from './MostorizerPage'
import Singleitemshow from './Singleitemshow'
function Allroutes() {
  return (
    <Routes>
        <Route path = "/" element = {<MostorizerPage/>}/>
        <Route path = "/products/:productId" element = {<Singleitemshow/>}/>
    </Routes>
  )
}

export default Allroutes
