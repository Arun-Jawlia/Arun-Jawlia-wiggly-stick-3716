import React,{useEffect} from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import "./Mostorizer.css"
import HoverEffect from '../Components/HoverEffect';
import Product_Page_Footer from '../Components/Product_Page_Footer';
import Filtersort from '../Components/Filtersort';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../Redux/Action';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    
  } from '@chakra-ui/react';

import Navbar from '../Components/Navbar/Navbar';
import Scroll from '../Components/HOME/Scroll';



function MostorizerPage({handleProducts}) {
    const data = useSelector((state) => state.allData.productData);
   
     const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const location =  useLocation();
    console.log(location); //so here we will put the location as a dependency because i have to put this in a location tab;

    // whenever the filter component changes the music album should changes
    useEffect(()=>{
        if(location || data.length === 0){
            const cat  = searchParams.getAll("cat")
        const queryParams = {
            params:{
                cat:cat,
                _sort : searchParams.get("sortBy") && "price",
                _order:searchParams.get("sortBy"),
            }
        }
        dispatch(getData(queryParams))
        }
        
    },[location.search]);
    console.log(data);
    
  return (
    <>
    <Navbar/>
    <Box>
    <h3 style={{textAlign: "left",marginLeft:"8%"}}>SEPHORA / Home/Skincare /
 <span style={{color:"Pink"}}>Face & Skin Moisturizers</span></h3>
 
 </Box>
   <Box className='main-container'>
       
       <Box className='box-1'>
       {/* 1st filter */}
       <h1 className='filter-header'>CATEGORY</h1>
       <br />
       <Filtersort/>
       <br />
        <hr />
        <br />
        <h1 className='filter-header'>FILTER BY</h1>
        
        <div>
 <Accordion display={"grid"} gap={"20px"} defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton border = {"2px solid black"}>
        <Box flex='1' textAlign='left'>
        Gender
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton border = {"2px solid black"}>
        <Box flex='1' textAlign='left'>
         Brand
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton border = {"2px solid black"}>
        <Box flex='1' textAlign='left'>
          Size
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton border = {"2px solid black"}>
        <Box flex='1' textAlign='left'>
          Color
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton border = {"2px solid black"}>
        <Box flex='1' textAlign='left'>
          Promotion
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton border = {"2px solid black"}>
        <Box flex='1' textAlign='left'>
          Price
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton border = {"2px solid black"}>
        <Box flex='1' textAlign='left'>
         Price
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton border = {"2px solid black"}>
        <Box flex='1' textAlign='left'>
          Store
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton border = {"2px solid black"}>
        <Box flex='1' textAlign='left'>
        Skin Type
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton border = {"2px solid black"}>
        <Box flex='1' textAlign='left'>
      Ingredient Preferences
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
        </div>

       </Box>

    
       <Box className='box-2'>
       {data.map((items)=>(

        <Box  className='single-product' key = {items.id} >
        <HoverEffect
        items = {items}
        image = {items.image1}
        id = {items.id}
        handleProducts = {handleProducts}
        />
        <Link to = {`/products/${items.id}`}>
        <Box  className='single-product'>
        <h3 style={{fontWeight:"bolder"}}>{items.brand}</h3>
        <h2>{items.title}</h2>
        <h2 style={{fontWeight:"bolder"}}>Rs.{items.price}</h2>
        </Box>
        </Link>
        </Box>
        ))}
       </Box>
    
   </Box>
   {/* this is the email componenyt */}
   <br /><br />
   <Scroll/>
   <Box className='passage'>
            <h1 className='header'>GET THE LATEST NEWS & OFFERS IN BEAUTY & FASHION</h1>
            <input className='Take-email' type="email" placeholder = "Enter Your Email Adress" />
            <input className='Post-email' type="submit"value="SUBSCRIBE" />
         </Box>
    <Product_Page_Footer/>
   </>
      
   
  )
}

export default MostorizerPage
