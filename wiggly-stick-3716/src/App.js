import "./App.css";
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
  );
}

export default App;
