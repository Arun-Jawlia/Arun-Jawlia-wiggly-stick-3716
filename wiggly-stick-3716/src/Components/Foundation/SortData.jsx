import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./SortData.css"
const SortData=()=>{

    const [searchParams,setSearchParams]=useSearchParams();
    const [sortBy,setSortBy]=useState(searchParams.get("sortBy") || "");
    
    const handleSortBy = (e) => {
      setSortBy(e.target.value);
    };

       useEffect(() => {
         const params = {};
        
         sortBy && (params.sortBy = sortBy);
         setSearchParams(params);
       }, [setSearchParams, sortBy]);
   return(
            <div className="sorting">
            <div className="sort">
              <label>SORT:</label>
              <select
                className="ddlist"
                onChange={handleSortBy}
              >
                <option value="popularity">Popularity</option>
                <option value="newest">Newest</option>
                <option value="asc">Price :Low to High</option>
                <option value="desc">Price :High to Low</option>
                <option value="discount">Discount</option>
              </select>
            </div>
          </div>
   )
}

export default SortData;