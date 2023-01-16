import React from 'react'
import { useState } from 'react'
import "./childCart.css"
const container=[
    {
        id:1,
        image:"https://logan.nnnow.com/content/dam/nnnow-project/25-march-2021/25MAR21_SEPHORA_BP_DESK_Q1.jpg",

    },
    {
        id:2,
        image:"https://logan.nnnow.com/content/dam/nnnow-project/25-march-2021/25MAR21_SEPHORA_BP_DESK_Q1.jpg",
        
    },
    {
        id:3,
        image:"https://logan.nnnow.com/content/dam/nnnow-project/25-march-2021/25MAR21_SEPHORA_BP_DESK_Q1.jpg",
        
    },
    {
        id:4,
        image:"https://logan.nnnow.com/content/dam/nnnow-project/25-march-2021/25MAR21_SEPHORA_BP_DESK_Q1.jpg",
        
    },
    {
        id:5,
        image:"https://logan.nnnow.com/content/dam/nnnow-project/25-march-2021/25MAR21_SEPHORA_BP_DESK_Q1.jpg",
        
    },
]


const Childcart = () => {
const [state, setState] = useState(container);
console.log(state)
  return (
    <div className='cart'>
{state.length && state.map((el)=>(
    <div key={el.id} >
     <img src={el.image} alt={el.id} className='manageSize' />
    </div>
))}
    </div>
  )
}

export default Childcart