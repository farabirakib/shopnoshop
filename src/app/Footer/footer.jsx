import React from "react";
import "./footer.css";
import footer_logo from "../../assets/logo_big.png";
import instragram_logo from "../../assets/instagram_icon.png";
import whatsapp_logo from "../../assets/whatsapp_icon.png";
import { Link } from "react-router-dom";

function footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPNOSHOP</p>
      </div>
      <div className="footer-container">
        <ul className="footer-links">
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
              <div className="footer-social-icon">
                <div className="footer-icons-container">
                  <img src={instragram_logo} alt="" />
                </div>
                <div className="footer-icons-container">
                  <img src={whatsapp_logo} alt="" />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved</p>
      </div>
    </div>
  );
}

export default footer;
