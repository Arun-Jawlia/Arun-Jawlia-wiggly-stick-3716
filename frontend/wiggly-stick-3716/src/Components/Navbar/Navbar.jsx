import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import myLogo from "../../assets/beautyHubLogo.png";
import { BsFillPersonFill,BsSearch } from "react-icons/bs";
import { Box, Heading } from "@chakra-ui/react";
// I am not able to raise pull request


const Navbar = () => {
  return (
    <div id="Navbar">
      <div id="navbaruppersection">
        <div id="logo">
          <Heading as="samp" style={{ fontWeight: 700, fontSize: "25px" }}>Beauty Hub</Heading>
        </div>

        {/* <!-- Check out Newest Arrivals top center text --> */}
        <div id="centertext">
          <span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/6338/6338304.png"
              alt=""
            />
          </span>
          <span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
              alt=""
            />
          </span>
          <span> Check Out Newest Arrivals</span>
          <span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
              alt=""
            />
          </span>
          <span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/6338/6338304.png"
              alt=""
            />
          </span>
        </div>

        {/* <!-- Top Right corner --> */}

        <div id="top-right-corner">
          <div>Get APP</div>
          <span>|</span>
          <div>Track Order</div>
          <span>|</span>
          <div>Loyality</div>
        </div>
      </div>

      {/* <!-- Section 2 upperHeading --> */}

      {/* <!-- Search Bar  --> */}
      <div id="headingsephora">
        <div>
          <Box mt="5px">
          <BsSearch />
          </Box>
        
          <input
            type="text"
            name=""
            placeholder="Search.."
            id="searchbar"
          />
        </div>

        {/* <!-- Sephora Image Navbar --> */}
        <div>
          <Link to="/">
            {" "}
            <img id="sephora" src={myLogo} alt="" />
          </Link>
        </div>

        {/* <!-- Favourite Bag and  class="icondivider"--> */}
        <div className="navbar_icons">
          <div >
              {" "}
              <Link to="/favourite"><i class='bx bxs-heart'></i></Link>{" "}
          </div>
          <span class="icondivider">|</span>
          <div >
              <Link to="/cart">
              <i  class='bx bxs-shopping-bag'></i></Link>{" "}
          
          </div>
          <span class="icondivider">|</span>

          <div className="bx">
          
              <Link to="/signup"> <  BsFillPersonFill/> </Link>
          </div>
        </div>
      </div>

      {/* <!-- Catgories-- above main product image --> */}
      <div id="categories">
        <div id="categories-sale">SALE</div>

        <div class="drop-down">
          <div>MAKEUP</div>
          <div class="dropdown-content">
            <div class="dropdownflex">
              <div>
                <h3>FACE</h3>
                <div>
                  <Link to="/foundation">Foundation</Link>
                </div>
                <div>BB & CC Cream</div>
                <div>Concealer</div>
                <div>Face Primer</div>
                <div>Highlighter</div>
                <div>Face Brushes</div>
                <div>Makeup Palette</div>
              </div>

              <div>
                <h3>EYE</h3>
                <div>Eye Palettes</div>
                <div>Mascara</div>
                <div>Eyeliners</div>
                <div>Eyebrow</div>
                <div>Eyeshadow</div>
                <div>Eye Primer</div>
                <div>Eye Brushes</div>
                <div>Contact Lenses</div>
              </div>

              {/* <div>
                <h3>LIP</h3>
                <div>lipstick</div>
                <div>Lip Stain</div>
                <div>Lip Gloss</div>
                <div>Lip Liner</div>
                <div>Lip Balm</div>
                <div></div>
              </div> */}

              {/* <div>
                <h3>CHEEK</h3>
                <div>Blush</div>
                <div>Bronzer</div>
                <div>Highlighter</div>
                <div>Face Oils</div>
              </div> */}

              {/* <!--  --> */}
            </div>
          </div>
        </div>

        <div class="drop-down">
          <div>SKIN CARE</div>
          <div class="dropdown-content">
            <div class="dropdownflex">
              <div>
                <h3>MOISTURIZERS</h3>
                <div>
                  <Link to="/moisturizer">Moisturizers</Link>
                </div>
                <div>Night Creams</div>
                <div>Mists & Essence</div>
                <div>BB & CC Creams</div>
              </div>

              <div>
                <h3>CLEANSERS</h3>
                <div>Face Wash & Cleansers</div>
                <div>Makeup Removers</div>
                <div>Face Wipes</div>
                <div>Toners</div>
                <div>Hand Sanitizers</div>
              </div>
{/* 
              <div>
                <h3>MASKS</h3>
                <div>Face Mask</div>
                <div>Sheet Masks</div>
                <div>Eye Masks</div>
                <div>Nose Masks & Strips</div>
                <div>Lip Masks</div>
                <div>Lip Masks</div>
                <div>Hair Masks</div>
                <div>Hand Masks</div>
                <div>Foot Masks</div>
              </div> */}
            </div>
          </div>
        </div>
        <div class="drop-down">
          <div>FRAGRANCE</div>
          <div class="dropdown-content">
            <div class="dropdownflex">
              <div>
                <h3>WOMEN</h3>
                <div>Perfume</div>
                <div>Mists and Deodrants</div>
              </div>

              <div>
                <h3>MAN</h3>
                <div>Perfume</div>
                <div>Body Spray & Deodrants</div>
              </div>
            </div>
          </div>
        </div>

        <div class="drop-down">
          <div>HAIR CARE</div>
          <div class="dropdown-content">
            <div class="dropdownflex">
              <div>
                <h3>SHAMPOO & CONDITIONER</h3>
                <div>
                  <a id="productpage" href="product_page.html">
                    Shampoo
                  </a>
                </div>
                <div>Conditioner</div>
              </div>

              <div>
                <h3>HAIR STYLING & TREATMENTS</h3>
                <div>Hair Spray & Styling Products</div>
                <div>Hair Oil</div>
                <div>Hair Masks</div>
                <div>Hair Clips</div>
              </div>
            </div>
          </div>
        </div>
        <div class="drop-down">
          <div>TOOLS & BRUSHES</div>
          <div class="dropdown-content"></div>
        </div>
        <div class="drop-down">
          <div>BRANDS</div>
          <div class="dropdown-content">
            <div class="dropdownflex"></div>
          </div>
        </div>
      </div>

      {/* <!-- HR line below categories --> */}
      <div id="hrdiv"></div>
    </div>
  );
};

export default Navbar;

