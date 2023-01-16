import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { selectedProduct } from '../Redux/Action';
import { Box } from '@chakra-ui/react';
import { BsExclamationCircle,BsSuitHeart,BsShare } from "react-icons/bs";
import'./singleItem.css';
import Navbar from '../Components/Navbar/Navbar';
import Singleshowfooter from './Singleshowfooter';

function Singleitemshow({handleProducts}) {
    const {productId} = useParams();
    const dispatch = useDispatch();
    console.log(productId);
    const product = useSelector((state)=>state.singleData);
     console.log(product);

   const fetchProductDetail  = async() =>{
     const response = await axios
     .get(`https://mock-server-app-working.onrender.com/products/${productId}`)
     .catch((e)=>{
         console.log(e);
        })
        dispatch(selectedProduct(response.data))
   } 
   useEffect(()=>{
   

        fetchProductDetail()
    
   },[productId])
  return (
    <>
    <Navbar/>
    <h3 style={{textAlign: "left",marginLeft:"8%"}}>SEPHORA / Home/Skincare /
 <span style={{color:"Pink"}}>{product.cat}</span></h3>
    <Box className='single-item-main'>
       <Box className='single-item-main-one'>
       <div className='Image-single'>
        <img src={product.image1} alt="" />
     </div>
       </Box>
       <Box className='single-item-main-two'>
          <Box>
            <h1 className='show-headings'>{product.brand}</h1>
            <p>{product.title}</p>
            <h1 className='show-headings'>Rs.{product.price}</h1>
            <br />
            <h1 className='show-headings'>SIZE</h1>
            <div className='size-box'>
              250 g
            </div>
          </Box>
          <Box className='important-box'>
            <Box>
            <BsExclamationCircle color='#f28216'size={40}/>
            </Box>
            <Box>
              <h1 className='show-headings'>IMPORTANT</h1>
              <p>All products that will be shipped will have a shelf-life more than 8 months to 3 years</p>
            </Box>
          </Box>
          <Box>
            <h1 className='show-headings' >COLOR: <span style={{fontWeight:"normal"}}>No color</span> </h1>
            <img className='small-image' src={product.image1} alt="" />
          </Box>
          <button onClick={()=>handleProducts(product)} className='add-bag'>ADD TO BAG</button>
          <Box className='icon-box'>
            <div className='merge-icon'>
            <BsSuitHeart color='#f39'size={30}/>
            <h1 className='show-headings'>Faviourites</h1> 
            </div>
            <div className='merge-icon'>
            <BsShare  color='blue'size={30}/>
            <h1 className='show-headings1'>Share</h1> 
            </div>
           
          </Box>
          <Box className='return-box'>
            <img className='return-img' src="https://static.nnnow.com/client/assets/images/pdp/pdp_non_returnable_logo.png" alt="" />
              <div>
                <h1 className='show-headings'>RETURN POLICY ON THIS ITEM</h1>
                <p>This item is non-returnable</p>
              </div>
          </Box>
          <Box className='random-add'>
            <img src="https://static.nnnow.com/client/assets/images/pdp/pdp_desktop_1.jpg" alt="random add" />
          </Box>
          <Box className='dalivery-box'>
            <h1  className='show-headings'>DELIVERY/STORE OPTIONS :</h1>
            <label>Enter your pincode to view delivery & store options</label>
            <input className='input-email' type="text" />
            <input className='input-btn' type="submit" value="CHECK" />
          </Box>
       </Box>
    </Box>
    <Singleshowfooter/>
    </>
   
  )
}

export default Singleitemshow