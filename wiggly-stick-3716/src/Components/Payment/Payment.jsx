import React from "react";
import "../Checkout/checkout.css";
import myLogo from '../../assets/beautyHubLogo.png'

const Payment = () => {
  return (
    <div className="checkout" id="checkout">
    {/* Checkout section 1 */}

    <div className="checkout_top">
      <div>
        <img
        style={{backgroundColor:'transparent'}}
        
          src={myLogo}
          alt="myLogo"
        />
      </div>
      <div className="checkout_top_acc">
        <span>Arun</span>
        <span class="material-symbols-outlined">expand_more</span>
      </div>
    </div>

    <div className="checkout_section_2">
      {/* checkout section 2 */}
      <div className="checkout_top_2 flex">
        <div className="flex checkout_icon">CHECKOUT</div>
        <div className=" checkout_2_mid">
          <div className="flex">
            <div className="flex">
              <div>1</div>
              <div>Shipping</div>
            </div>
            <div className="flex">
              <div>2</div>
              <div>Payment</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className=" checkout_main_container">
      <div className="checkout_container">
        <div>
          {/* Address */}
          <div >
           <h1>Total Payable Amount</h1>
          </div>

          {/* Horizontal row */}
          <div className="horizontal_row"></div>

          {/* Cart data */}
          <div className="checkout_cart_data">
            {/* Map cart data  */}
           
          </div>

          {/* Checkout edit button */}

        </div>






















        {/* Price container */}
        <div className="checkout_price_data">
          

          
          <div className="price_detail">
            <h1 style={{fontWeight:'600', fontSize:'25px'}}> Overview</h1>
            <span className="flex">
              <div>Subtotal</div>
              <div>Rs 1,000</div>
            </span>
            <span className="flex">
              <div>Discount</div>
              <div>Rs 0</div>
            </span>
            <span className="flex">
              <div>GST</div>
              <div>Rs 0</div>
            </span>
            <span className="flex">
              <div>delivery charges</div>
              <div>Rs 0</div>
            </span>

            <div style={{height:'2px', backgroundColor:'black', marginTop:'5px', marginBottom:'5px'}}></div>

            <span className="flex">
              <div>Total</div>
              <div>Rs 1,000</div>
            </span>


          </div>
          <div className="price_continue">PLACE ORDER</div>
        </div>
      </div>
    </div>
    <div className="checkout_Footer">
        <div className="checkout_footer_main">
          <div className="checkout_footer_left">
            <img src="https://static.nnnow.com/Verified_by_Visa_logo.png" alt="" />
            <img src="https://static.nnnow.com/verified-mastercard.png" alt="" />
            <img src="https://static.nnnow.com/verified-pci.png" alt="" />
            <img src="https://static.nnnow.com/AMEX-safekey.png" alt="" />
          
          </div>
          <div className="checkout_footer_right">
            <p> © 2022 NNNOW  |  Privacy Policy   |    Terms & Condition</p>
          </div>
        </div>
      </div>
  </div>

  )
}

export default Payment