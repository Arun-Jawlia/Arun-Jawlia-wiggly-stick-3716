import "./App.css";
// <<<<<<< HEAD
// import Navbar from "../src/Components/Navbar/Navbar.jsx"

// import Home from "./Pages/Home"
// import ScrollButton from "./Components/Scrollbutton";
// import Checkout from "./Components/Checkout/Checkout";
// import Payment from "./Components/Payment/Payment";
// import MostorizerPage from "./Pages/MostorizerPage";
// import Navbar from "./Components/Navbar/Navbar";
// import Address from "./Components/AddressPage/Address";
import AllRoutes from "./Routes/AllRoutes";
function App() {
  return (
    <div className="App">
      <AllRoutes/>
      </div>
  ) 
} 
// =======
import Checkout from "./Components/Checkout/Checkout";
import Payment from "./Components/Payment/Payment";
import Navbar from "./Components/Navbar/Navbar";

import Allroutes from "./Pages/Allroutes";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <Address/>
      <Checkout />
      <Payment />
     
      <Allroutes/>
    </div>
  )
}

export default App;
