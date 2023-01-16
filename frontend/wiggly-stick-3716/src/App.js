import "./App.css";
import React,{useState} from "react";
import AllRoutes from "./Routes/AllRoutes";
import { Alert } from "react-bootstrap";
import { useSelector } from 'react-redux';
import Login from "./Components/Auth/Login";
import { Signup } from "./Components/Login/Signup";
import SignupCard from "./Components/Auth/Signup";
import LargeWithLogoCentered from "./Components/footer/footer";

function App() {
  const [cartItems,setCartItems] = useState([]);
  // const cartItems=useSelector((state)=>state.cartItems)

// this is for fetching all the cart data
  const handleProducts = (product) =>{
    const ProductExist = cartItems.find((item)=>item.id === product.id);
    if(ProductExist){
      setCartItems(cartItems.map((item)=> item.id === product.id ? {...ProductExist,quantity : ProductExist.quantity + 1}:item
      )
    );
    alert("Items added to the cart")
      
    }else{
      setCartItems([...cartItems,{...product,quantity: 1}]);
      
    }
  
  }
  const handleRemove = (product) =>{
    const ProductExist = cartItems.find((item)=>item.id === product.id);
    // if the id is not match so print the items;
    if(ProductExist.quantity === 1){
      setCartItems(cartItems.filter((item)=>item.id !== product.id));
    }
    else{
      setCartItems(
        cartItems.map((item)=>
          item.id === product.id
          ? {...ProductExist,quantity:ProductExist.quantity-1} : item
        )
      );
    }
  };
  console.log(cartItems);
  return (
    <div >
      <AllRoutes
       cartItems = {cartItems}
       handleProducts = {handleProducts}
       handleRemove = {handleRemove}
       
       
      />
      
     {/* <Login/> */}
     {/* <SignupCard/> */}

     {/* <LargeWithLogoCentered/> */}
    </div>
  );
}

export default App;
