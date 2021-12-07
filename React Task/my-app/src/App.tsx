import "./App.css";
import Menu from "./Components/Menu";
import Home from "./Components/Home/Home";
import Order from "./Components/Order/Order";
import Cart from "./Components/Cart/Cart";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import AboutBook from "./Components/Home/AboutBook";
import Checkout from "./Components/Checkout/Checkout";
import NotFound from "./Components/404/NotFound";

function App() {
  return (
    <>
      <Router>
        <Menu />
        <div className="content-display">
          <Switch>
            <Route path="/" element={<Home />} />
            <Route path="/Order" element={<Order />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/:id" element={<AboutBook />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
