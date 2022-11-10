import React from "react";
import "./checkout.css";
import myLogo from "../../assets/beautyHubLogo.png";

const Checkout = () => {
  return (
    <div className="checkout" id="checkout">
      {/* Checkout section 1 */}

      <div className="checkout_top">
        <div>
          <img style={{ backgroundColor: "white" }} src={myLogo} alt="myLogo" />
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
            <div className="address">
              <div
                style={{
                  padding: "2px",
                  //   border: "1px solid black",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                <p>Shipping address</p>
              </div>
              <div style={{ fontSize: "12px", padding: "0px 30px 0px 10px" }}>
                <div>
                  <p>Delivery Address</p>
                </div>
                <div>
                  <p>
                    Arun Jawlia, H. No 753 pana mojaan Gurudware wali gali,
                    Delhi New Delhi, Delhi - 110039 9718653508
                  </p>
                </div>
              </div>
            </div>

            {/* Horizontal row */}
            <div className="horizontal_row"></div>

            {/* Cart data */}
            <div className="checkout_cart_data">
              {/* Map cart data  */}
              <div className="flex checkout_cart_detail">
                <div>
                  <img
                    src="https://cdn08.nnnow.com/web-images/thumbnail/styles/9IVNC6KVMBT/1495432220597/1.jpg"
                    alt=""
                  />
                </div>
                <div style={{ padding: "0px 35px 0px 5px" }}>
                  <p>Sephora Collection</p>
                  <p style={{ fontWeight: "800" }}>
                    RETRACTABLE WATERPROOF EYELINER 14 MATTER MOSS
                  </p>
                  <p>14 Matte Moss - Deep Golden Khaki</p>
                  <p>Size - one size</p>
                  <p>Qty - 1</p>
                  <p style={{ fontWeight: "800" }}>Rs. 1,000</p>
                </div>

                <div style={{ display: "flex" }}>
                  <div>
                    <span class="material-symbols-outlined">
                      radio_button_checked
                    </span>
                  </div>
                  <div> Delivery within 5-7 business days</div>
                </div>
              </div>
            </div>

            {/* Checkout edit button */}

            <div className="checkout_edit_bag">
              <p>Edit Bag</p>
            </div>
          </div>

          {/* Price container */}
          <div className="checkout_price_data">
            <div className="flex promoCode">
              <div>
                <i class="bx bxs-discount"></i>
              </div>
              <div>APPLY PROMO CODE</div>
            </div>

            <div>
              <img
                src="chrome-extension://ojplmecpdpgccookcobabopnaifgidhf/apply-coupon.png"
                alt=""
              />
            </div>
            <div className="price_detail">
              <h2> Overview</h2>
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

              <div
                style={{
                  height: "2px",
                  backgroundColor: "black",
                  marginTop: "5px",
                  marginBottom: "5px",
                }}
              ></div>

              <span className="flex">
                <div>Total</div>
                <div>Rs 1,000</div>
              </span>
            </div>
            <div className="price_continue">CONTINUE</div>
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
  );
};

export default Checkout;
