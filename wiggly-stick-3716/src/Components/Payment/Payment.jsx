import React from "react";
import "../Checkout/checkout.css";
import myLogo from "../../assets/beautyHubLogo.png";
import { useState } from "react";

const Payment = () => {
  const [toggle, showMenu]= useState(false)
  const [netBanking, showNetBanking]= useState(false)
  const [wallet, showWallet]= useState(false)
  const [upi, showUpi]= useState(false)
  
 

  return (
    <div className="checkout" id="checkout">
      {/* Checkout section 1 */}

      <div className="checkout_top">
        <div>
          <img
            style={{ backgroundColor: "transparent" }}
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
          {/* <div className=" checkout_2_mid">
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
          </div> */}
        </div>
      </div>

      <div className=" checkout_main_container">
        <div className="checkout_container">
          <div>
            {/* Address */}
            <div className="flex total_amount">
              <div>TOTAL PAYABLE AMOUNT</div>
              <div>Rs 1,000</div>
            </div>

            {/* Horizontal row */}

            {/* Cart data */}
            <div className="checkout_cart_data payment_container">
              <h1 className="total_amount">Payment Methods </h1>
              <div className="horizontal_row"></div>
              {/* Map cart data  */}

              <div>
                <div className="payment_methods">
                  <div>
                    <button onClick={()=>showMenu(!toggle)}>
                      <span class="material-symbols-outlined">circle</span>
                    </button>
                  </div>
                  <div>Credit / Debit Card</div>
                </div>
                <div className={toggle ? 'payment_method_detail ' : 'payment_method_hide'}>
                  <div>
                    <div>
                      <label>Enter your card number</label>
                    </div>
                    <div>
                      <input type="number" placeholder="16 digit number" />
                    </div>
                  </div>
                  <div>
                    <div>
                      <label>Enter Name on Card</label>
                    </div>
                    <div>
                      <input type="text" />
                    </div>
                  </div>
                  <div>
                    <div>
                      <label>CVV</label>
                    </div>
                    <div>
                      <input type="number" />
                    </div>
                  </div>
                  <div>
                    <div>
                      <label>Expiry Date</label>
                    </div>
                    <div>
                      <input type="date" />
                    </div>
                  </div>
                  <button>Pay</button>
                </div>
              </div>

              <div>
                <div className="payment_methods">
                  <div>
                    <button onClick={()=>showNetBanking(!netBanking)}>
                      <span class="material-symbols-outlined">circle</span>
                    </button>
                  </div>
                  <div>Net Banking</div>
                </div>
                <div className={netBanking ? 'payment_method_detail grid_container' : 'payment_method_hide'}>
                  <div
                    style={{
                      padding: "10px",
                      border: "2px solid black",
                      borderRadius: "10px",
                    }}
                  >
                    <img
                      src="https://static.nnnow.com/client/assets/images/netbanking/axis.png"
                      alt="logo"
                    />
                    <p>Axis</p>
                  </div>
                  <div
                    style={{
                      padding: "10px",
                      border: "2px solid black",
                      borderRadius: "10px",
                    }}
                  >
                    <img
                      src="https://static.nnnow.com/client/assets/images/netbanking/hdfc.png"
                      alt="logo"
                    />
                    <p>Axis</p>
                  </div>
                  <div
                    style={{
                      padding: "10px",
                      border: "2px solid black",
                      borderRadius: "10px",
                    }}
                  >
                    <img
                      src="https://static.nnnow.com/client/assets/images/netbanking/icici.png"
                      alt="logo"
                    />
                    <p>Axis</p>
                  </div>
                  <div
                    style={{
                      padding: "10px",
                      border: "2px solid black",
                      borderRadius: "10px",
                    }}
                  >
                    <img
                      src="https://static.nnnow.com/client/assets/images/netbanking/sbi.png"
                      alt="logo"
                    />
                    <p>Axis</p>
                  </div>
                  <div
                    style={{
                      padding: "10px",
                      border: "2px solid black",
                      borderRadius: "10px",
                    }}
                  >
                    <img
                      src="https://static.nnnow.com/client/assets/images/netbanking/kotak.png"
                      alt="logo"
                    />
                    <p>Axis</p>
                  </div>
                  
                </div>
              </div>

              <div>
                <div className="payment_methods">
                  <div>
                    <button onClick={()=>showWallet(!wallet)} >
                      <span class="material-symbols-outlined">circle</span>
                    </button>
                  </div>
                  <div>Other Wallets</div>
                </div>
                <div className={wallet ? 'payment_method_detail grid_container' : 'payment_method_hide'}>
                  <div
                    style={{
                      padding: "10px",
                      border: "2px solid black",
                      borderRadius: "10px",
                    }}
                  >
                    <img
                      src="https://static.nnnow.com/client/assets/images/razorpay/Amazonpay.png"
                      alt="logo"
                    />
                    <p>Amazon pay</p>
                  </div>
                  <div
                    style={{
                      padding: "10px",
                      border: "2px solid black",
                      borderRadius: "10px",
                    }}
                  >
                    <img
                      src="https://static.nnnow.com/client/assets/images/razorpay/phonepe.png"
                      alt="logo"
                    />
                    <p>PhonePe</p>
                  </div>
                  <div
                    style={{
                      padding: "10px",
                      border: "2px solid black",
                      borderRadius: "10px",
                    }}
                  >
                    <img
                      src="https://static.nnnow.com/client/assets/images/razorpay/freecharge.png"
                      alt="logo"
                    />
                    <p>FreeCharge Wallet</p>
                  </div>
                  <div
                    style={{
                      padding: "10px",
                      border: "2px solid black",
                      borderRadius: "10px",
                    }}
                  >
                    <img
                      src="https://static.nnnow.com/client/assets/images/razorpay/Mobikwik.png"
                      alt="logo"
                    />
                    <p>MobiKwik</p>
                  </div>
                  <div
                    style={{
                      padding: "10px",
                      border: "2px solid black",
                      borderRadius: "10px",
                    }}
                  >
                    <img
                      src="https://static.nnnow.com/client/assets/images/razorpay/airtel.png"
                      alt="logo"
                    />
                    <p>Razoypay</p>
                  </div>
                  <div
                    style={{
                      padding: "10px",
                      border: "2px solid black",
                      borderRadius: "10px",
                    }}
                  >
                    <img
                      src="https://static.nnnow.com/client/assets/images/razorpay/olamoney.png"
                      alt="logo"
                    />
                    <p>Ola Money</p>
                  </div>
                  <div
                    style={{
                      padding: "10px",
                      border: "2px solid black",
                      borderRadius: "10px",
                    }}
                  >
                    <img
                      src="https://static.nnnow.com/client/assets/images/razorpay/payzapp.png"
                      alt="logo"
                    />
                    <p>Payzapp</p>
                  </div>
                  
                </div>
              </div>

              <div>
                <div className="payment_methods">
                  <div>
                    <button onClick={()=>showUpi(!upi)}>
                      <span class="material-symbols-outlined">circle</span>
                    </button>
                  </div>
                  <div>UPI</div>
                </div>
                <div className={upi ? 'payment_method_detail ' : 'payment_method_hide'}>
                  <div><label>UPI ID:</label></div>
                  <div><input type="text" placeholder="Upi id" /></div>
                  <button>Pay</button>
                </div>
              </div>

              <div>
                <div className="payment_methods">
                  <div>
                    <button>
                      <span class="material-symbols-outlined">circle</span>
                    </button>
                  </div>
                  <div>Pay on Delivery( UPI, Wallet, Card and Cash )</div>
                </div>
              </div>
            </div>

            {/* Checkout edit button */}
          </div>

          {/* Price container */}
          <div className="checkout_price_data">
            <div className="price_detail">
              <h1 style={{ fontWeight: "600", fontSize: "25px" }}> Overview</h1>
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
            <div className="price_continue">PLACE ORDER</div>
          </div>
        </div>
      </div>
      <div className="checkout_Footer">
        <div className="checkout_footer_main">
          <div className="checkout_footer_left">
            <img
              src="https://static.nnnow.com/Verified_by_Visa_logo.png"
              alt=""
            />
            <img
              src="https://static.nnnow.com/verified-mastercard.png"
              alt=""
            />
            <img src="https://static.nnnow.com/verified-pci.png" alt="" />
            <img src="https://static.nnnow.com/AMEX-safekey.png" alt="" />
          </div>
          <div className="checkout_footer_right">
            <p> © 2022 NNNOW | Privacy Policy | Terms & Condition</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
