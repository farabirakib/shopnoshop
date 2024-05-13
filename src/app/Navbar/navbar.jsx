import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/shopnoshop.png";
import "./navbar.css";
import cartIcon from "../../assets/cart_icon.png";

function Navbar() {
  return (
    <nav className="navbar-header">
      <div className="row">
        <div className="nav-logo col ">
          <Link to={"/Home"}>
            <img src={logo} alt="" style={{ height: "80px" }} />
          </Link>
        </div>

        <div className="navbar-menu col text-decoration-none m-3">
          <Link className="m-3 text-decoration-none" to={"/Home"}>
            Home
          </Link>
          <Link className="m-3 text-decoration-none" to={"/Women"}>
            Women
          </Link>
          <Link className="m-3 text-decoration-none" to={"/Men"}>
            Men
          </Link>
          <Link className="m-3 text-decoration-none" to={"/Kids"}>
            Kids
          </Link>
          <Link className="m-3 text-decoration-none" to={"/AboutUs"}>
            About Us
          </Link>
        </div>
        <div className="col gap-3 navbar-right-bar">
          <div className="cartIcon">
            <img src={cartIcon} alt="" />

            <Link className="btn  gap-3 m-3">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
