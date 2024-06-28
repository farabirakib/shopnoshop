import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/shopnoshop.png";
import cartIcon from "../../assets/cart_icon.png";

const Navbar = () => {
  const [setMenu] = useState("shop");
  return (
    <nav className="fixed top-0 left-0 w-full h-[60px] mx-auto bg-white flex justify-between items-center shadow-[0_1px_3px_-2px_#000000]">
      <Link
        onClick={() => {
          setMenu("shop");
        }}
        to={"/shop"}
        className="w-40"
      >
        <img className="size-full" src={logo} alt="shopno" />
      </Link>

      <ul className="flex items-center text-[20px] list-none gap-[50px] [&>li]:no-underline [&>li]:font-semibold [&>li]:text-[#828282]">
        <li>
          <Link
            onClick={() => {
              setMenu("shop");
            }}
            to={"/shop"}
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
          >
            Men
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setMenu("women");
            }}
            to="/women"
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
          >
            About Us
          </Link>
        </li>
      </ul>
      <div className="flex items-center justify-between w-40 pr-4">
        <Link to={"/LoginSignup"}>
          <button className="  w-20 h-9 outline-none border border-gray-500 rounded-md text-white text-[20px] font-medium custom-gradient cursor-pointer active:bg-white">
            Login
          </button>
        </Link>
        <Link className="relative">
          <span className="inline-flex justify-center items-center size-5 absolute -right-1 -top-1.5 rounded-full text-xs bg-red-500 text-white">
            00
          </span>
          <span className="size-8 inline-block">
            <img src={cartIcon} alt="" className="size-full" />
          </span>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
