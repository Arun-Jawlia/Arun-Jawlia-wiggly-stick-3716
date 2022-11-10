import './App.css';
import ScrollButton from './Components/Scrollbutton';
import Checkout from './components/Checkout/Checkout';
import Payment from './components/Payment/Payment';
import MostorizerPage from './Pages/MostorizerPage';
function App() {
  return (
    <div className="App">
        <Checkout/>
        <Payment/>
        <MostorizerPage/>
        <ScrollButton/>
    </div>
  );
}

export default App;
