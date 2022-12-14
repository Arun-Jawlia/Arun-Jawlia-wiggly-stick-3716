import React from "react";
import "./otp.css";
import { useNavigate } from "react-router-dom";
import {
  
  Button,
  Center,
  FormControl,
  FormLabel,
    Input
} from "@chakra-ui/react";
import { useEffect } from "react";

export const Otp = () => {
    const navigate = useNavigate()


    useEffect(()=>
    {
         let timer= setTimeout(()=>
         {
            alert('OTP  is 317897')
         },2000)


         return()=>
         {
            clearTimeout(timer)
         }
    },[])


 
    
    const handlePayment=()=>
    {
      
            alert('Payment Successfully')
            alert("Order Placed")
            return navigate('/')
      

       

        
        
    }


    const handleCancelPayment =()=>
    {
        alert('Payment canceled by the user')
        navigate('/payment')
    }



  return (
    <div className="otp_container">
      <div className="otp_div">
        <div className="maestro_img">
          <div>
            <img
              src="https://1000logos.net/wp-content/uploads/2020/07/Maestro-Logo-1996-768x512.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://bank.sbi/o/SBI-Theme/images/custom/logo.png"
              alt=""
            />
          </div>
        </div>
        <div id="hor_div"></div>

        <div>
          <div>
            <p style={{fontSize:'12px', marginBottom:'10px', marginTop:'10px'}}>Enter Otp</p>
          </div>

          <div className="enter_otp_div">
            <div className="user_detail_div">
              <div>Successfully sent OTP to your registered mobile number</div>
              <div>97XXXXXX08</div>
              <div>
                Recently changed your Mobile Number ?{" "}
                <span
                  style={{
                    color: "blue",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Refresh here
                </span>
              </div>
            </div>

            <div className="otp_enter">
              <Center>
                <FormControl isRequired>
                  <FormLabel fontSize='8px' color='gray.400' >Enter OTP</FormLabel>
                  <Input placeholder="OTP" type='password' />
                </FormControl>
              </Center>
            </div>
            <div>
              <Button
                colorScheme="teal"
                width="29%"
                size="sm"
                variant="outline"
                marginRight='5px'
                onClick = {handleCancelPayment}
              >
                Cancel
              </Button>
              <Button onClick={handlePayment} size="sm" w="60%" colorScheme="messenger">
                Submit
              </Button>
            </div>
          </div>
        </div>

        <div style={{marginTop:'3rem', fontSize:'12px', color:'gray'}}>This screen will automatically time out after 300 seconds</div>
      </div>
    </div>
  );
};
