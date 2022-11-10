import "./App.css";

import ScrollButton from "./Components/Scrollbutton";
import Checkout from "./Components/Checkout/Checkout";
import Payment from "./Components/Payment/Payment";
import MostorizerPage from "./Pages/MostorizerPage";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Checkout />
      <Payment />
      <MostorizerPage />
      <ScrollButton />
    </div>
  );
}

export default App;
