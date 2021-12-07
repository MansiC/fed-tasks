// import "./menu.style.scss";
// import * as constant from "../Constant/Constant";
import { NavLink, useLocation } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
} from "reactstrap";
// import Home from './Home/Home';
// import Order from './Order/Order';
// import Cart from './Cart/Cart';

const Menu = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  console.log(splitLocation[1]);

  return (
    <>
      <div>
        <Navbar color="light" expand="md" light bg-light>
          <NavbarBrand href="/">eCommerce Site</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar justify-content-sm-end>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/Order">
                  My Orders
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/Cart">
                  Cart
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      {/* <div className="menu">
        <div className="nav">
          <label htmlFor="appNameTitle" className="app-name">
            {constant.APP_NAME}
          </label>
          <ul className="nav--list">
            <li key="home">
              <Link
                to="/"
                className={
                  splitLocation[1] === "" ? "nav--active" : "nav--inactive"
                }
              >
                Home
              </Link>
            </li>
            <li key="null1">|</li>
            <li key="order">
              <Link
                to="/Order"
                className={
                  splitLocation[1] === "Order" ? "nav--active" : "nav--inactive"
                }
              >
                Order
              </Link>
            </li>
            <li key="null2">|</li>
            <li key="cart">
              <Link
                to="/Cart"
                className={
                  splitLocation[1] === "Cart" ? "nav--active" : "nav--inactive"
                }
              >
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div> */}
    </>
  );
};

export default Menu;
