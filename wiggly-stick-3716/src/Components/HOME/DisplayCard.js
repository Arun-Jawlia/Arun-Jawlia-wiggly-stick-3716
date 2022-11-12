import React from 'react'
import "./oneCard.css"
const DisplayCard = () => {
  return (
    <div className='card' style={{textAlign:'center'}}>
        <h2 style={{marginTop:"40px"}}>GET THE LATEST NEWS & OFFERS IN BEAUTY & FASHION</h2>
    
    <div className='btn_inp'>
    <input type="email" className='inp' placeholder="Enter your email address" />
    <button className='btn'>SUBSCRIBE</button>
    </div>
    
    </div>
  )
}

export default DisplayCard