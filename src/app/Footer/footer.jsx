import React from "react";

import footer_logo from "../../assets/logo_big.png";
import instragram_logo from "../../assets/instagram_icon.png";
import whatsapp_logo from "../../assets/whatsapp_icon.png";
import { Link } from "react-router-dom";

function footer() {
  return (
    <div className="w-full custom-gradientbg flex flex-column justify-center items-center gap-3">
      <div className="h-1/2 flex items-center gap-8">
        <img src={footer_logo} alt="" />
        <p className="text-gray-500 text-6xl ">SHOPNOSHOP</p>
      </div>
      <div className="footer-container">
        <ul className="flex list-none gap-52 text-gray-700 [&>li]:cursor-pointer no-underline text-lg">
          <li>
            <Link to="." style={{ textDecoration: "none" }}>
              Company
            </Link>
            <div className="footer-links-content">
              Lorem ipsum dolor sit <br /> amet consectetur <br /> adipisicing
              elit.
            </div>
          </li>
          <li>
            <Link to="." style={{ textDecoration: "none" }}>
              Offices
            </Link>
            <div className="footer-links-content">
              Lorem ipsum dolor sit <br /> amet consectetur <br /> adipisicing
              elit.
            </div>
          </li>
          <li>
            <Link to="." style={{ textDecoration: "none" }}>
              About
            </Link>
            <div className="footer-links-content">
              Lorem ipsum dolor sit <br /> amet consectetur <br /> adipisicing
              elit.
            </div>
          </li>
          <li>
            <Link to="." style={{ textDecoration: "none" }}>
              Contact
            </Link>
            <div className="footer-links-content">
              <div className="flex gap-5">
                <div className="p-3 pb-2">
                  <img src={instragram_logo} alt="" />
                </div>
                <div className="p-3 pb-2">
                  <img src={whatsapp_logo} alt="" />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="w-full  flex flex-column items-center mb-8 text-xl text-gray-950 ">
        <hr className="w-9/12 h-[3px] bg-slate-700 border-none  rounded-xl" />
        <p>Copyright @ 2023 - All Right Reserved</p>
      </div>
    </div>
  );
}

export default footer;
