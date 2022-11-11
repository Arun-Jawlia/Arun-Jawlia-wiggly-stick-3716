import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { selectedProduct } from '../Redux/Action';

function Singleitemshow() {
    const {productId} = useParams();
    const dispatch = useDispatch();
    console.log(productId);
    const product = useSelector((state)=>state.singleData);
     console.log(product);

   const fetchProductDetail  = async() =>{
     const response = await axios
     .get(`http://localhost:8080/products/${productId}`)
     .catch((e)=>{
         console.log(e);
        })
        dispatch(selectedProduct(response.data))
   } 
   useEffect(()=>{
   

        fetchProductDetail()
    
   },[productId])
  return (
    <div>
        <img src={product.image1} alt="" />
    </div>
  )
}

export default Singleitemshow