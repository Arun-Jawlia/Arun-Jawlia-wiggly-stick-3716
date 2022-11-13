import { InfoOutlineIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProduct } from "../../Redux/Action";
import Navbar from "../Navbar/Navbar";
import "./ProductShow.css";
import Slider from "./Slider";
import VerticalSlider from "./VerticalSlider";
import axios from "axios";
import { Box } from "@chakra-ui/react";
const ProductShow = ({ handleProducts }) => {
  // let Data = JSON.parse(localStorage.getItem("showdata"));
  // console.log(Data);
  //     let data = {
  //       id: "105",
  //       path: "SEPHORA / Sephora Collection / Makeup / Face Makeup / ",
  //       cur: "Face Foundation Cream",
  //       title: "Matte Perfection Powder Foundation - 21 Petal",
  //       offerType: "OFFER",
  //       brand: "SEPHORA COLLECTION",
  //       image1:
  //         "https://cdn07.nnnow.com/web-images/large/styles/5CC4W2M4YQC/1551249758723/1.jpg",
  //       image2:
  //         "https://cdn13.nnnow.com/web-images/large/styles/5CC4W2M4YQC/1617175487045/2.jpg",

  //       color: ["rgb(224,183,146)", "rgb(204,167,127)"],
  //       size: ["7.5 gm"],
  //       price: 1500,
  //     };
  // const [showData, setShowData] = useState(data);
  // const [current, setCurrent] = useState(0);
  // const [slideData, setSlideData] = useState([
  //   { image: showData.image1 },
  //   { image: showData.image2 },
  // ]);
  //console.log(imageData);
  const { foundationId } = useParams();
  const dispatch = useDispatch();
  // console.log(faundationId);
  const product = useSelector((state) => state.singleData);
  console.log(product);
  const [showData, setShowData] = useState([]);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`http://localhost:8080/Face_Foundation_Cream/${foundationId}`)
      .catch((e) => {
        console.log(e);
        // setShowData({response.data.image1})
      });
    dispatch(selectedProduct(response.data));
    setShowData([{ image: "response.data.image1" },{ image: "response.data.image2" }]);
    console.log(response.data.image1)
  };
  useEffect(() => {
    fetchProductDetail();
  }, [foundationId]);
  console.log(showData)
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="show-detail">
        <div id="first">
          {/* <img src={product.image1} alt="" /> */}
          <VerticalSlider slides={showData} />
        </div>
        <div id="second">
          {/* <img src={product.image2} alt="" /> */}
          <Slider slides={showData} />
        </div>
        <div id="third">
          <div
            className="detail"
            style={{ textAlign: "left", marginTop: "3rem", marginLeft: "2rem" }}
          >
            <div className="brand" style={{ fontWeight: "bold" }}>
              {product.brand}
            </div>
            <div className="title">{product.title}</div>
            <div
              className="price-icon"
              style={{ display: "flex", gap: "20px" }}
            >
              <div className="price" style={{ fontWeight: "bold" }}>
                Rs.{product.price}
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
                    <div>Rs.{product.price}</div>
                  </div>
                  <hr style={{ borderStyle: "1px solid black" }} />
                </div>
              </div>
            </div>
            <h1 className="show-headings" style={{ marginTop: "2rem" }}>
              SIZE
            </h1>
            <div className="size-box">{product.size}</div>
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
              <InfoOutlineIcon
                className="icon-div"
                color="orange"
                w={8}
                h={8}
              />
            </div>
            <div style={{ alignItems: "center", justifyContent: "center" }}>
              IMPORTANT All products that will be shipped will have a shelf-life
              more than 8 months to 3 years.
            </div>
          </div>
          <Box className="return-box">
            <img
              className="return-img"
              src="https://static.nnnow.com/client/assets/images/pdp/pdp_non_returnable_logo.png"
              alt=""
            />
            <div >
              <h1 className="show-headings">RETURN POLICY ON THIS ITEM</h1>
              <p>This item is non-returnable</p>
            </div>
          </Box>
          <div className="add-cart">
            <button
              style={{
                padding: "20px 170px",
                background: "#FF3399",
                marginTop: "3rem",
                fontWeight: "bold",
                color: "white",
              }}
              onClick={() => handleProducts(product)}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductShow;

 