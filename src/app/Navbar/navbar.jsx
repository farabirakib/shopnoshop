import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/shopnoshop.png";
import "./navbar.css";
import cartIcon from "../../assets/cart_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <nav className="navbar">
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
            style={{ textDecoration: "none" }}
          >
            Shop {menu === "shop" ? <hr /> : <></>}
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setMenu("men");
            }}
            to={"/men"}
            style={{ textDecoration: "none" }}
          >
            Men{menu === "men" ? <hr /> : <></>}
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setMenu("women");
            }}
            to={"/women"}
            style={{ textDecoration: "none" }}
          >
            Women{menu === "women" ? <hr /> : <></>}
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setMenu("kids");
            }}
            to={"/kids"}
            style={{ textDecoration: "none" }}
          >
            Kids{menu === "kids" ? <hr /> : <></>}
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setMenu("about");
            }}
            to={"/about"}
            style={{ textDecoration: "none" }}
          >
            About Us{menu === "about" ? <hr /> : <></>}
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to={"/login"}>
          <button>Login</button>
        </Link>
        <Link to={"/cartIcon"}>
          <img src={cartIcon} alt="" />
        </Link>

        <div className="nav-cart-count">0</div>
      </div>
    </nav>
  );
};
export default Navbar;
