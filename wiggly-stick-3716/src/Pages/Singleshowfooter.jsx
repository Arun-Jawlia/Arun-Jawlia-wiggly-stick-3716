import React from 'react'
import { Box } from '@chakra-ui/react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import './singleitemfooter.css';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper';
import {Swiper,SwiperSlide} from "swiper/react";
import 'swiper/scss';
import "./singleitemfooter.css";
// import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/css/scrollbar'; 
import data from "./CaroData";
import data2 from './RecentData';
import Scroll from '../Components/HOME/Scroll';
import Product_Page_Footer from '../Components/Product_Page_Footer';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
function Singleshowfooter() {
 
  
  return (
    <Box >
       <Box className='tabs-area'>
        <Tabs className='tabul' isFitted variant='enclosed'>
          <TabList mb='1em'>
            <Tab className='tabbu'>THE FINER DETAILS</Tab>
            <Tab className='tabbu'>ABOUT MARIO BADESHKU</Tab>
            <Tab className='tabbu'>RETURN & EXCHANGES</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolorem magni quaerat error, consequuntur aperiam porro voluptatem ratione est minus.</p>
            </TabPanel>
            <TabPanel>
              <p>It started in 1967 with Mario Badescu mixing products and giving facials in his one-room studio in New York City. It's grown to a 24-room signature salon filled with Badescu-trained facialists and a line of 200 products available around the world. Why are most of our original products still in the line? Because they deliver results. We see it every day, in real life in real time with our clients. Why do three generations and countless faces who start with us stay with us? Because they like what they see. Get started and see for yourself. That good skin is forever.</p>
            </TabPanel>
            <TabPanel>
              <p>This item can’t be returned — our Returns Policy doesn’t cover innerwear, lingerie, fragrances and beauty products.
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
       </Box>
       <h1 className='headings3'>SIMILAR PRODUCTS</h1>
       <Box className='carosol-cont'>
       <Swiper
    // effect="cube"
    // modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={20}
sliderPerView={3}
navigation
pagination={{ clickable: false }}
scrollbar={{ draggable: false }}
onSliderChange={()=>console.log('slider change')}
onSwiper={swiper => console.log(swiper)}>
  {data.map(user =>(
    <SwiperSlide key={user.id} className="slide">
      <div className='slide-content'>
       <div className='user-image'>
        <img alt="" src={user.image1} className="user-photo" />
       </div>
       <div className='tag-line'>
       <h4 className = "user-testimonial">{user.brand}</h4>
       <h4>{user.title}</h4>
       <h5>{user.category}</h5>
       <p className='user-testimonial'>Rs.{user.price}</p>
       </div>
      </div>
    </SwiperSlide>
  ))}
    </Swiper>
       </Box>
  <h1 className='headings3'>RECENTLY VIEWED</h1>
       <Box className='carosol-cont'>
       <Swiper
    // effect="cube"
    // modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={20}
sliderPerView={3}
navigation
pagination={{ clickable: false }}
scrollbar={{ draggable: false }}
onSliderChange={()=>console.log('slider change')}
onSwiper={swiper => console.log(swiper)}>
  {data2.map(user =>(
    <SwiperSlide key={user.id} className="slide">
      <div className='slide-content'>
       <div className='user-image'>
        <img alt="" src={user.image1} className="user-photo" />
       </div>
       <div className='tag-line'>
        <h4 className = "user-testimonial">{user.brand}</h4>
       <h4>{user.title}</h4>
       <h5>{user.category}</h5>
       <p className='user-testimonial'>Rs.{user.price}</p>
       </div>
      </div>
    </SwiperSlide>
  ))}
    </Swiper>
       </Box>

       <div style={{margin:"auto"}}>
          <Scroll/>
        </div>
        <Box className='passage'>
            <h1 className='header'>GET THE LATEST NEWS & OFFERS IN BEAUTY & FASHION</h1>
            <input className='Take-email' type="email" placeholder = "Enter Your Email Adress" />
            <input className='Post-email' type="submit"value="SUBSCRIBE" />
         </Box>
         <Product_Page_Footer/>
     </Box>
  )
}

export default Singleshowfooter;
