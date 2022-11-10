import React,{useState,useEffect} from 'react'
import { useSearchParams } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
function Filtersort() {
    const [searchParams,setSearchParams] = useSearchParams();
    const [sortBy,setSortBy] = useState(searchParams.get("sortBy")|| "");
    console.log(searchParams.cur);

    const [category,setCategory] = useState([]);
   
    // this is for checkbox
    const handleFilter = (e) =>{
      
        const option = e.target.value;
        let newCategory = [...category];

        if(newCategory.includes(option)){
         newCategory.splice(newCategory.indexOf(option),1)
        }
        else{
         newCategory.push(option);
        }
        setCategory(newCategory)
   }

   console.log(category);
  //  this is the sorting method
   const handleShort = (e) =>{
    setSortBy(e.target.value);

  }
  //  create the dynamic params
   useEffect(()=>{
       const params = {};
       category && (params.cat = category);
       sortBy && (params.sortBy = sortBy);
       setSearchParams(params);
   },[category,setSearchParams,sortBy]);

  //  this is the handleshoprt
  
  return (
    <div>
    <div style={{display:"grid",justifyContent:"center"}}>
       
       <div>
       <input defaultChecked = {category.includes("Moisturizer")} type="checkbox" value = "Moisturizer"onChange={handleFilter} />
      
       <label>Moisturizer</label>
       </div>
       <div>
       <input defaultChecked = {category.includes("Cream")} type="checkbox" value = "Cream"onChange={handleFilter} />
       <label>Creams(07)</label>
       </div>
       <div>
       <input defaultChecked = {category.includes("Facial Gel")} type="checkbox" value = "Facial Gel"onChange={handleFilter} />
       <label>Facial Gel(1)</label>
       </div>
         {/* filter by */}
        
  </div>
  <br />
         <hr />
   <br />
        
  <div>
   <h2 className='filter-header'>SHORT BY THE PRICE</h2>
  </div>
  <div onChange={handleShort}>
  <Box>
        <input type="radio"value ="asc" name ="sortBy"
        defaultChecked = {sortBy === "asc"}
        />
        <label>Ascending</label>
      </Box> 
     <Box>
        <input type="radio"value ="desc" name ="sortBy" 
        defaultChecked = {sortBy === "desc"}
        />
        <label>Descending</label>
      </Box> 
  </div>
    
  </div>
        
  )
}

export default Filtersort
