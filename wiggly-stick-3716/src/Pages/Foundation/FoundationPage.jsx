import React from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import "./FoundationPage.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import FoundationCard from "../../Components/Foundation/FoundationCard";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData } from "../../Redux/FoundationPageReducer/actions";
    
    // const getData = (url) =>
    //   axios.get(url).then((res) => {
    //     return res.data;
    //   });

 
const FoundationPage=()=>{
   const dispatch = useDispatch();
   const products = useSelector((store) => store.products);
   
   //const [data,setData]=useState(item);

   useEffect(() => {
     dispatch(getProductsData);
   }, []);
   console.log(products);

  //  Sorting
  const handleSort=(by)=>{
    console.log(by)
  }

   
    return (
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
          <div className="sorting">
            <div className="sort">
              <label>SORT:</label>
              <select
                className="ddlist"
                onChange={(e)=>{
                  handleSort(e.target.value)
                }}
              >
                <option value="popularity">Popularity</option>
                <option value="newest">Newest</option>
                <option value="lowTohigh">Price :Low to High</option>
                <option value="highTolow">Price :High to Low</option>
                <option value="discount">Discount</option>
              </select>
            </div>
          </div>
          <div className="product-data">
            {products.map((data) => (
              <FoundationCard key={data.id} product={data} />
            ))}
          </div>
        </div>
      </div>
    );
}

export default FoundationPage;