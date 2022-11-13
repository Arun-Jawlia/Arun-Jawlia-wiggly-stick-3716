import { LockIcon, StarIcon } from "@chakra-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./FoundationCard.css";
import styles from "./FoundationCard.css";
const FoundationCard = ({ product }) => {
  //let showData = JSON.parse(localStorage.getItem("showdata"));
   
  const handleProductDetail = () => {
    //console.log(product);
    localStorage.setItem("showdata",JSON.stringify(product));
    // navigate
  };
  return (
    <div className="foundation-card" onClick={handleProductDetail}>
      <div>
        <div className="hover-animation">
          <Link to={`/foundation/${product.id}`}>
            <div>
              <img src={product.image2} alt="" className="front-image" />
              <img src={product.image1} alt="" className="back-image" />
            </div>
          </Link>
          <div className="overlay overlay-bottom">
            <div className="text">
              <div>
                <div>
                  <LockIcon />
                </div>
                <div style={{ fontSize: "13px", fontWeight: "bold" }}>
                  SHOP NNOW
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <StarIcon />
                  </div>
                  <div style={{ fontSize: "13px", fontWeight: "bold" }}>
                    FAVOURITE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="products-offer" style={{ marginTop: "1rem" }}>
          <div className="logo">
            {product.offerType == "BESTSELLER" ? (
              <div className="bestseller offertype">
                <img src="https://cdn12.nnnow.com/web-images/master/product_tags/386af615-6d5a-48be-8ac8-e41088e8d264/1554199034568/Bestselling.png" />
                <p> {product.offerType}</p>
              </div>
            ) : (
              <div className="offer offertype">
                <img src="https://cdn02.nnnow.com/web-images/master/product_tags/cb6e9f96-922e-42cb-84ae-9337178f87fa/1554297283453/Sale.png" />
                <p> {product.offerType}</p>
              </div>
            )}
          </div>
        </div>
        <Link to={`/foundation/${product.id}`}>
          <div className="info">
            <div
              className="brand"
              style={{ fontWeight: "bold", fontSize: "13px" }}
            >
              {product.brand}
            </div>
            <div className="title">{product.title}</div>
            <div
              className="price"
              style={{ fontWeight: "bold", fontSize: "13px" }}
            >
              Rs.{product.price}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};;

export default FoundationCard;
