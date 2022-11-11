import { InfoOutlineIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import "./ProductShow.css";
import Slider from "./Slider";
import VerticalSlider from "./VerticalSlider";
const ProductShow=()=>{
  let Data = JSON.parse(localStorage.getItem("showdata"));
  console.log(Data);
      let data = {
        id: "105",
        path: "SEPHORA / Sephora Collection / Makeup / Face Makeup / ",
        cur: "Face Foundation Cream",
        title: "Matte Perfection Powder Foundation - 21 Petal",
        offerType: "OFFER",
        brand: "SEPHORA COLLECTION",
        image1:
          "https://cdn07.nnnow.com/web-images/large/styles/5CC4W2M4YQC/1551249758723/1.jpg",
        image2:
          "https://cdn13.nnnow.com/web-images/large/styles/5CC4W2M4YQC/1617175487045/2.jpg",
      
        color: ["rgb(224,183,146)", "rgb(204,167,127)"],
        size: ["7.5 gm"],
        price: 1500,
      };
  const [showData, setShowData] = useState(data);
  const [current, setCurrent] = useState(0);
  const [slideData, setSlideData] = useState([
    { image: showData.image1 },
    { image: showData.image2 },
  ]);
 //console.log(imageData);
  return (
    <div className="show-detail">
      <div id="first">
        <VerticalSlider slides={slideData} />
      </div>
      <div id="second">
        <Slider slides={slideData} />
      </div>
      <div id="third">
        <div
          className="detail"
          style={{ textAlign: "left", marginTop: "3rem", marginLeft: "2rem" }}
        >
          <div className="brand" style={{ fontWeight: "bold" }}>
            {showData.brand}
          </div>
          <div className="title">{showData.title}</div>
          <div className="price-icon" style={{ display: "flex", gap: "20px" }}>
            <div className="price" style={{ fontWeight: "bold" }}>
              Rs.{showData.price}
            </div>
            <div style={{ width: "85%" }}>
              <InfoOutlineIcon className="icon-div" />
              <div
                className="hide"
                style={{
                  width: "90%",
                  height: "200px",
                  background: "#98D6D2",
                  marginLeft: "-5rem",
                }}
              >
                <div className="price-title">PRICE DETAILS</div>
                <div
                  className="pdetails"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <div>Maximum Retail Price</div>

                    <div>(inclusive of all taxes)</div>
                  </div>
                  <div>Rs.{showData.price}</div>
                </div>
                <hr style={{ borderStyle: "1px solid black" }} />
              </div>
            </div>
          </div>
        </div>

        <div
          className="imp"
          style={{
            border: "2px solid orange",
            width: "75%",
            height: "100px",
            marginLeft: "3rem",
            marginTop: "3rem",
            display: "flex",
            padding: "5px 10px",
          }}
        >
          <div>
            <InfoOutlineIcon className="icon-div" color="orange" w={8} h={8} />
          </div>
          <div styel={{ alignItems: "center", justifyContent: "center" }}>
            IMPORTANT All products that will be shipped will have a shelf-life
            more than 8 months to 3 years.
          </div>
        </div>

        <div className="add-cart">
          <button
            style={{
              padding: "20px 170px",
              background: "#FF3399",
              marginTop: "3rem",
              fontWeight: "bold",
              color: "white",
            }}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductShow;

 