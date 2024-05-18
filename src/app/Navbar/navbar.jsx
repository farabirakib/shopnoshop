import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/shopnoshop.png";
import "./navbar.css";
import cartIcon from "../../assets/cart_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>

      <ul className="nav-menu">
        <li>
          <Link
            onClick={() => {
              setMenu("shop");
            }}
          >
            Shop {menu === "shop" ? <hr /> : <></>}
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setMenu("men");
            }}
          >
            Men{menu === "men" ? <hr /> : <></>}
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setMenu("women");
            }}
          >
            Women{menu === "women" ? <hr /> : <></>}
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setMenu("kids");
            }}
          >
            Kids{menu === "kids" ? <hr /> : <></>}
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setMenu("about");
            }}
          >
            About Us{menu === "about" ? <hr /> : <></>}
          </Link>
        </li>
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
