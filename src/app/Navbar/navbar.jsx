import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/shopnoshop.png";
import "./navbar.css";
import cartIcon from "../../assets/cart_icon.png";

const Navbar = () => {
  const [setMenu] = useState("shop");
  return (
    <nav className="fixed top-0 left-0 w-full h-[90px] mx-auto bg-white flex justify-between items-center shadow-[0_1px_3px_-2px_#000000]">
      <Link
        onClick={() => {
          setMenu("shop");
        }}
        to={"/shop"}
      >
        <div className="nav-logo">
          <img src={logo} alt="" />
        </div>
      </Link>

      <ul className="nav-menu">
        <li>
          <Link
            onClick={() => {
              setMenu("shop");
            }}
            to={"/shop"}
            style={{
              textDecoration: "none",
              color: "#828282",
              fontWeight: 700,
            }}
          >
            Shop
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setMenu("men");
            }}
            to={"/men"}
            style={{
              textDecoration: "none",
              color: "#828282",
              fontWeight: 700,
            }}
          >
            Men
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setMenu("women");
            }}
            to={"/women"}
            style={{
              textDecoration: "none",
              color: "#828282",
              fontWeight: 700,
            }}
          >
            Women
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setMenu("kids");
            }}
            to={"/kids"}
            style={{
              textDecoration: "none",
              color: "#828282",
              fontWeight: 700,
            }}
          >
            Kids
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setMenu("about");
            }}
            to={"/about"}
            style={{
              textDecoration: "none",
              color: "#828282",
              fontWeight: 700,
            }}
          >
            About Us
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to={"/LoginSignup"}>
          <button>Login</button>
        </Link>
        <Link>
          <img src={cartIcon} alt="" className="cart-icon" />
        </Link>

        <div className="nav-cart-count">0</div>
      </div>
    </nav>
  );
};
export default Navbar;
