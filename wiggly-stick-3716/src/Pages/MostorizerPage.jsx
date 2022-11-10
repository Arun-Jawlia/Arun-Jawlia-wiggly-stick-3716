import React,{useState,useEffect} from 'react'
import { useSearchParams } from 'react-router-dom';
import axios from "axios";
import { Box } from '@chakra-ui/react';
import "./Mostorizer.css"
import HoverEffect from '../components/HoverEffect';
import Product_Page_Footer from '../components/Product_Page_Footer';
import Filtersort from '../components/Filtersort';

function MostorizerPage() {

    const[data,setData] = useState([]);
    const [searchParams] = useSearchParams();
    const getData = () =>{
        axios
        .get("http://localhost:8080/products")
        .then((r)=>{
            setData(r.data);
        })
        .catch((e)=>{
            console.log(e);
        })
    }
    useEffect(()=>{
        getData();
    },[]);
    console.log(data);
    
  return (
    <>
   <Box className='main-container'>
       
       <Box className='box-1'>
       {/* 1st filter */}
       <Filtersort/>
         <br />
         <hr />
   <br /><br />
         <h1 style={{textAlign:"left"}}>FILTER BY</h1>
         <br />
  
       </Box>

    
       <Box className='box-2'>
       {data.map((items)=>(

        <Box className='single-product' key = {items.id} >
       
        
        <HoverEffect
        image = {items.image1}
        
        />
        <Box className='single-product'>
        <h2>{items.title}</h2>
        <h2 style={{fontWeight:"bolder"}}>Rs.{items.price}</h2>
        </Box>

     
       
        </Box>
        ))}
       </Box>
    
   </Box>
   {/* this is the email componenyt */}
    <Product_Page_Footer/>
   </>
      
   
  )
}

export default MostorizerPage
