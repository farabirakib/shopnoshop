import React from "react";
import shop_logo from "../../../../assets/logo_big.png";
import { Link } from "react-router-dom";
import "./contact.css";

function contact() {
  return (
    <div className="contact-container mt-5">
      <div className="contact-content d-flex justify-content-between mt-5 w-75 align-items-center text-center">
        <div className="contact-content-button fs-5">
          <p>
            <h1>Want To Know More?</h1>
          </p>
          <p>
            <h1>Reach out to us!</h1>
          </p>
        </div>
        <div className="contact-content-box">
          <img src={shop_logo} alt="" />
          <div>
            <ul>
              <p>Contact US</p>

              <li>
                <input type="text" placeholder="Name" />
              </li>
              <li>
                <input type="email" placeholder="Email" />
              </li>
              <li>
                <input type="text" placeholder="Text your message..." />
              </li>
            </ul>
            <button>
              <Link>Submit</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contact;
