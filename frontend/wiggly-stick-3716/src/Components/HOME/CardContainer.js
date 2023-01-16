import React, { useState } from 'react'
import "./CardContainer.css"
const card =[
    {
        id:2,
        img:"https://logan.nnnow.com/content/dam/nnnow-project/09-nov-2022/se-11-11-/p-storys/Smashbox_P-story.jpg",

    },
    {
        id:3,
        img:"https://logan.nnnow.com/content/dam/nnnow-project/09-nov-2022/se-11-11-/p-storys/Clinique_Pstory.jpg",
    },
    {
        id:4,
        img:"https://logan.nnnow.com/content/dam/nnnow-project/09-nov-2022/se-11-11-/p-storys/EsteeLauder_Pstory.jpg",

    },
    {
        id:5,
        img:"https://logan.nnnow.com/content/dam/nnnow-project/09-nov-2022/se-11-11-/p-storys/Smashbox_P-story.jpg",

    },
    {
        id:6,
        img:"https://logan.nnnow.com/content/dam/nnnow-project/09-nov-2022/se-11-11-/p-storys/Clinique_Pstory.jpg",
    },
    {
        id:7,
        img:"https://logan.nnnow.com/content/dam/nnnow-project/09-nov-2022/se-11-11-/p-storys/EsteeLauder_Pstory.jpg",

    },{
        id:8,
        img:"https://logan.nnnow.com/content/dam/nnnow-project/09-nov-2022/se-11-11-/p-storys/Smashbox_P-story.jpg",

    },
    {
        id:9,
        img:"https://logan.nnnow.com/content/dam/nnnow-project/09-nov-2022/se-11-11-/p-storys/Clinique_Pstory.jpg",
    },
    {
        id:10,
        img:"https://logan.nnnow.com/content/dam/nnnow-project/09-nov-2022/se-11-11-/p-storys/EsteeLauder_Pstory.jpg",

    },{
        id:11,
        img:"https://logan.nnnow.com/content/dam/nnnow-project/09-nov-2022/se-11-11-/p-storys/Smashbox_P-story.jpg",

    },
    {
        id:12,
        img:"https://logan.nnnow.com/content/dam/nnnow-project/09-nov-2022/se-11-11-/p-storys/Clinique_Pstory.jpg",
    },
    {
        id:13,
        img:"https://logan.nnnow.com/content/dam/nnnow-project/09-nov-2022/se-11-11-/p-storys/Clinique_Pstory.jpg",
    },
    {
        id:14,
        img:"https://logan.nnnow.com/content/dam/nnnow-project/09-nov-2022/se-11-11-/p-storys/Smashbox_P-story.jpg",

    },
    {
        id:15,
        img:"https://logan.nnnow.com/content/dam/nnnow-project/09-nov-2022/se-11-11-/p-storys/Clinique_Pstory.jpg",
    },
    {
        id:16,
        img:"https://logan.nnnow.com/content/dam/nnnow-project/09-nov-2022/se-11-11-/p-storys/Clinique_Pstory.jpg",
    },{
        id:17,
        img:"https://logan.nnnow.com/content/dam/nnnow-project/09-nov-2022/se-11-11-/p-storys/Smashbox_P-story.jpg",

    },
    {
        id:18,
        img:"https://logan.nnnow.com/content/dam/nnnow-project/09-nov-2022/se-11-11-/p-storys/Clinique_Pstory.jpg",
    },
    {
        id:19,
        img:"https://logan.nnnow.com/content/dam/nnnow-project/09-nov-2022/se-11-11-/p-storys/Clinique_Pstory.jpg",
    },{
        id:20,
        img:"https://logan.nnnow.com/content/dam/nnnow-project/09-nov-2022/se-11-11-/p-storys/Smashbox_P-story.jpg",

    },
    {
        id:21,
        img:"https://logan.nnnow.com/content/dam/nnnow-project/09-nov-2022/se-11-11-/p-storys/Clinique_Pstory.jpg",
    },
    {
        id:22,
        img:"https://logan.nnnow.com/content/dam/nnnow-project/09-nov-2022/se-11-11-/p-storys/Clinique_Pstory.jpg",
    },
   

]

const CardContainer = () => {
    const [state, setState] = useState(card);
  return (
    <div className='container12'>
{state.length && state.map((item)=>(
    <div key={item.id} >
        <img alt='' src={item.img} width="100px"/>
    </div>
))}
    </div>
  )
}

export default CardContainer