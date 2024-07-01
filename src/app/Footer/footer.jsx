import React from "react";

import footer_logo from "../../assets/logo_big.png";
import instragram_logo from "../../assets/instagram_icon.png";
import whatsapp_logo from "../../assets/whatsapp_icon.png";
import { Link } from "react-router-dom";

function footer() {
  return (
    <div className="w-full md:h-[40vh] custom-gradientbg flex flex-column justify-center items-center gap-3">
      <div className=" flex items-center gap-8">
        <img className="w-[5vw]" src={footer_logo} alt="" />
        <p className="text-gray-600 text-[3vw] font-bold">SHOPNOSHOP</p>
      </div>
      <div className="footer-container">
        <ul className="flex list-none text-gray-700 [&>li]:cursor-pointer gap-[4vw] text-lg justify-center ">
          <li>
            <Link
              className="font-bold"
              to="."
              style={{ textDecoration: "none" }}
            >
              Company
            </Link>
            <div className="footer-links-content">
              <ul className="text-sm">
                <li>Shop-01</li>
                <li>Shop-02</li>
                <li>Shop-03</li>
                <li>Shop-04</li>
              </ul>
            </div>
          </li>
          <li>
            <Link
              className="font-bold"
              to="."
              style={{ textDecoration: "none" }}
            >
              Offices
            </Link>
            <div className="footer-links-content">
              <ul className="text-sm">
                <li>Dhaka-01</li>
                <li>Khulna-02</li>
                <li>Jessore-03</li>
                <li>NArail-04</li>
              </ul>
            </div>
          </li>
          <li>
            <Link
              className="font-bold"
              to="."
              style={{ textDecoration: "none" }}
            >
              About
            </Link>
            <div className="footer-links-content text-sm">
              Each dress in our <br /> collection is <br />
              meticulously chosen
              <br /> for its craftsmanship
              <br /> and durability.
            </div>
          </li>
          <li>
            <Link
              className="font-bold"
              to="."
              style={{ textDecoration: "none" }}
            >
              Contact
            </Link>
            <div className="footer-links-content">
              <p className="text-sm">
                Mirpur-1,
                <br />
                info@shopno.com
                <br />
                015552223365
              </p>
              <div className="w-[10vw] flex gap-2vw gap-[2vw]">
                <div className="">
                  <img src={instragram_logo} alt=" " />
                </div>
                <div className="">
                  <img src={whatsapp_logo} alt=" " />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="w-full  flex flex-column items-center mb-8 text-[2vw] text-gray-950 ">
        <hr className="w-9/12 h-[3px] bg-slate-700 border-none  rounded-xl" />
        <p>Copyright @ 2023 - All Right Reserved</p>
      </div>
    </div>
  );
}

export default footer;
