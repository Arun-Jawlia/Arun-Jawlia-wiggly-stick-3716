import React from "react";
import "./Home.css";
import UncontrolledExample from "../Components/HOME/Slider";
import Childcart from "../Components/HOME/childcart";
import { GridSlider } from "../Components/HOME/GridSlider";
import YoutubeVideo from "../Components/HOME/YoutubeVideo";
import CardContainer from "../Components/HOME/CardContainer";
import DisplayCard from "../Components/HOME/DisplayCard";
import Scroll from "../Components/HOME/Scroll";
import Product_Page_Footer from "../Components/HOME/Product_Page_Footer";
import Navbar from "../Components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <UncontrolledExample />
      <Childcart />
      <div className="container">
        <div style={{ width: "50%", height: "350px", marginBottom:"50px", padding:'50px', overflow:'hidden' }}>
          <GridSlider />
        </div>
        <div style={{ width: "50%", height: "350px", marginLeft: "10px" }}>
          <YoutubeVideo />
        </div>
      </div>

      <div
        style={{
          marginTop: "70px",
          marginBottom: "30px",
          textAlign: "center",
          fontWeight: "700",
          fontSize: "20px",
        }}
      >
        <h2>Hottest On The Scene</h2>
        <CardContainer />
      </div>

      <div style={{ margin: "auto" }}>
        <Scroll />
      </div>
      <div style={{ marginBottom: "30px" }}>
        <DisplayCard />
      </div>
      <div>
        <Product_Page_Footer />
      </div>
    </div>
  );
};

export default Home;
