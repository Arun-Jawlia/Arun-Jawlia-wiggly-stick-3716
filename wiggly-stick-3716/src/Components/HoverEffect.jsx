import React from 'react'
import { Box } from '@chakra-ui/react';
import { BsBag,BsHeartFill } from "react-icons/bs";
import './HoverEffect.css';
function HoverEffect({image}) {
  return (
    <Box className='hover-effect'>
 
		<div className="container">
			<div className="card">
				<div className="content">
					<div className="imgBx">
						<img src={image} alt="this is a image"/>
					</div>
					
				</div>
				<ul className="sci">
					<li>
						<BsBag size={30}/>
					
						
					</li>
					<li>
						<BsHeartFill size ={30}/>
						
					</li>
					
				</ul>
			</div>
			
			</div>
		

        </Box>
  )
}

export default HoverEffect
