import React,{useState,useEffect} from 'react'
import { useSearchParams } from 'react-router-dom';
function Filtersort() {
    const [searchParams,setSearchParams] = useSearchParams();
    console.log(searchParams.cur)
    const [category,setCategory] = useState([])
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
   useEffect(()=>{
       const params = {};
       category && (params.cur = category);
       setSearchParams(params);
   },[category,setSearchParams])
  return (
    <div>
        <h1 style={{textAlign:"left"}}>CATEGORY</h1>
       <br />
       <div>
       <input defaultChecked = {category.includes("MOSTORIZER")} type="checkbox" value = "Mostorizer"onChange={handleFilter} />
       <label>Mostorizer</label>
       </div>
       <div>
       <input defaultChecked = {category.includes("Makeup")} type="checkbox" value = "Makeup"onChange={handleFilter} />
       <label>Makeup</label>
      
       </div>
       <div>
       <input defaultChecked = {category.includes("Perfume")} type="checkbox" value = "Perfume"onChange={handleFilter} />
       <label>Perfume</label>
      
       </div>
         {/* filter by */}
    </div>
  )
}

export default Filtersort
