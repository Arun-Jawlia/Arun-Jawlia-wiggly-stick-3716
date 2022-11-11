import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
import myLogo from "../../assets/beautyHubLogo.png";
// I am not able to raise pull request

const Navbar = () => {
  return (
    <div>
         <div id="navbaruppersection">
      <div>
        <a href="https://www.nnnow.com/"
          ><img
            id="logo"
            // src="https://cdn02.nnnow.com/web-images/master/navtree_metaData/59b2425ae4b0d70964ee66e0/1505806763887/12NNNOWLOGODESKTOP.png"
            src={myLogo}
            alt="Nnnow.logo"
        /></a>
      </div>
      <div id="storelocator"><span>|</span> Store Locator</div>

      {/* <!-- Check out Newest Arrivals top center text --> */}
      <div id="centertext">
        <span
          ><img
            src="https://cdn-icons-png.flaticon.com/512/6338/6338304.png"
            alt=""
        /></span>

        <span
          ><img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
            alt=""
        /></span>

        {/* <span
          ><img
            src="https://www.iconsdb.com/icons/preview/pink/star-xxl.png"
            alt=""
        /></span> */}

        Check Out Out Newest Arrivals

        {/* <span
          ><img
            src="https://www.iconsdb.com/icons/preview/pink/star-xxl.png"
            alt=""
        /></span> */}

        <span
          ><img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
            alt=""
        /></span>

        <span
          ><img
            src="https://cdn-icons-png.flaticon.com/512/6338/6338304.png"
            alt=""
        /></span>
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
        <img
          id="searchicon"
          src="https://img.icons8.com/ios/344/search--v1.png"
          alt=""
        /><input
          type="text"
          name=""
          placeholder="Search SEPHORA"
          id="searchbar"
        />
      </div>

      {/* <!-- Sephora Image Navbar --> */}
      <div>
        <a href="homepage.html"
          ><img
            id="sephora"
            src="https://cdn07.nnnow.com/web-images/master/navtree_metaData/59b2657be4b0e6b6e16a9180/1548053082431/se.png"
            alt=""
        /></a>
      </div>

      {/* <!-- Favourite Bag and  class="icondivider"--> */}
      <div>
        <div>
          <a href="#"
            ><span class="material-symbols-outlined"> <Link to='/favourite'>favorite</Link> </span></a
          >
        </div>
        <span class="icondivider">|</span>
        <div>
          <a href="#"
            ><span class="material-symbols-outlined"> <Link to='/cart'>shopping_bag</Link> </span></a
          >
        </div>
        <span class="icondivider">|</span>

        <div>
          <a href='#'
            ><span class="material-symbols-outlined"><Link to='/signup'>person </Link></span></a
          >
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
              <div><Link to='/foundation'>Foundation</Link></div>
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

            <div>
              <h3>LIP</h3>
              <div>lipstick</div>
              <div>Lip Stain</div>
              <div>Lip Gloss</div>
              <div>Lip Liner</div>
              <div>Lip Balm</div>
              <div></div>
            </div>

            <div>
              <h3>CHEEK</h3>
              <div>Blush</div>
              <div>Bronzer</div>
              <div>Highlighter</div>
              <div>Face Oils</div>
            </div>

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
              <div><Link to='/moisturizer'>Moisturizers</Link></div>
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
            </div>
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
                <a id="productpage" href="product_page.html">Shampoo</a>
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
  )
}

export default Navbar



{/* hello */}
{
// Pull request is not updated
}