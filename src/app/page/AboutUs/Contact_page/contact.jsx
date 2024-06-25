import React from "react";
import contact_box_side from "../../../../assets/contact_box_side.png";
import { Link } from "react-router-dom";
import "./contact.css";
import shopping_photo from "../../../../assets/shopping_photo.png";

function contact() {
  return (
    <div className="contact-container mt-5">
      <div className="contact-content d-flex  mt-5 ">
        <div className="contact-content-button fs-5">
          <p>
            <h1>Want To Know More?</h1>
          </p>
          <p>
            <h1>Reach out to us!</h1>
          </p>
          <img src={shopping_photo} alt="" />
        </div>
        <div className="contact-form">
          <img src={contact_box_side} alt="" />
          <div className="contact-form-box">
            <p>
              <h2>Contact US</h2>
            </p>

            <ul>
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
              <Link style={{ textDecoration: "none", color: "white" }}>
                {" "}
                Submit
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contact;
