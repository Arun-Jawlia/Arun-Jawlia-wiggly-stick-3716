import "./App.css";
import React,{useState} from "react";
import AllRoutes from "./Routes/AllRoutes";
import { Alert } from "react-bootstrap";

function App() {
  const [cartItems,setCartItems] = useState([]);

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
      
     
    </div>
  );
}

export default App;
