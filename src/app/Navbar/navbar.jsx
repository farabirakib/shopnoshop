import React from "react";
//import { Link } from "react-router-dom";
import logo from "../../assets/shopnoshop.png";
import "./navbar.css";
import cartIcon from "../../assets/cart_icon.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>

      <ul className="nav-menu">
        <li>
          Shop <hr />
        </li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        <li>About Us</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cartIcon} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </nav>
  );
};
export default Navbar;
