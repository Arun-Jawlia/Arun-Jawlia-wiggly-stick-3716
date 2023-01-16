import React from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import "./FoundationPage.css";
import { useEffect } from "react";
import FoundationCard from "../../Components/Foundation/FoundationCard";
import { useDispatch, useSelector } from "react-redux";

import SortData from "../../Components/Foundation/SortData";
import { useLocation, useSearchParams } from "react-router-dom";
import { getProductsData } from "../../Redux/Action";
import Navbar from "../../Components/Navbar/Navbar";
import Product_Page_Footer from "../../Components/Product_Page_Footer";
import LargeWithLogoCentered from "../../Components/footer/footer";
 
const FoundationPage=()=>{
   const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
   const products = useSelector((store) => store.foundData.products);
   
   //const [data,setData]=useState(item);
 const location = useLocation();
 console.log(location);
   useEffect(() => {
      if(location  || products.length===0){

         const queryParams = {
           params: {
             _sort: searchParams.get("sortBy") && "price",
             _order: searchParams.get("sortBy"),
           },
         };
    
     dispatch(getProductsData(queryParams));
    }
   }, [location]);
   console.log(products);

  //  Sorting


   
    return (
      <>
      <div><Navbar/></div>
      <h1>{products.path}</h1>
      <div className="main-div">
       
        <div className="filtering">
          <div className="filterby">
            <p
              style={{
                textAlign: "left",
                marginLeft: "8px",
                fontWeight: "bold",
                marginBottom: "0.5rem",
              }}
            >
              FILTER BY
            </p>
            
            <div className="filter-option">
              <div>Brand</div>
              <div>
                <ChevronRightIcon w={6} h={6} />
              </div>
            </div>
            <div className="filter-option">
              <div>Size</div>
              <div>
                <ChevronRightIcon w={6} h={6} />
              </div>
            </div>
            <div className="filter-option">
              <div>Color</div>
              <div>
                <ChevronRightIcon w={6} h={6} />
              </div>
            </div>
            <div className="filter-option">
              <div>Promotion</div>
              <div>
                <ChevronRightIcon w={6} h={6} />
              </div>
            </div>
            <div className="filter-option">
              <div>Price</div>
              <div>
                <ChevronRightIcon w={6} h={6} />
              </div>
            </div>
            <div className="filter-option">
              <div>Store</div>
              <div>
                <ChevronRightIcon w={6} h={6} />
              </div>
            </div>
            <div className="filter-option">
              <div>Finish</div>
              <div>
                <ChevronRightIcon w={6} h={6} />
              </div>
            </div>
            <div className="filter-option">
              <div>Skin Type</div>
              <div>
                <ChevronRightIcon w={6} h={6} />
              </div>
            </div>
            <div className="filter-option">
              <div>Formulation</div>
              <div>
                <ChevronRightIcon w={6} h={6} />
              </div>
            </div>
            <div className="filter-option">
              <div>Ingredients Preferences</div>
              <div>
                <ChevronRightIcon w={6} h={6} />
              </div>
            </div>
            <div className="filter-option">
              <div>Coverage</div>
              <div>
                <ChevronRightIcon w={6} h={6} />
              </div>
            </div>
            <div className="filter-option">
              <div>Sun Protection</div>
              <div>
                <ChevronRightIcon w={6} h={6} />
              </div>
            </div>
          </div>
        </div>
        <div className="product-data-main">
         <SortData/>
          <div className="product-data">
            {products.map((data) => (
              <FoundationCard key={data.id} product={data} />
            ))}
          </div>
        </div>
      </div>
      <div><LargeWithLogoCentered/></div>
      </>
    );
}

export default FoundationPage;