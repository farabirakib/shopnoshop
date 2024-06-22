import React from "react";
import "./offers.css";
import { Link } from "react-router-dom";
import exclucive_image from "../../../../assets/exclusive_image.png";

const offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <div className="offer-Check-box">
          <Link className="offer-Check">Check Now</Link>
        </div>
      </div>
      <div className="offers-right">
        <img src={exclucive_image} alt="" />
      </div>
    </div>
  );
};

export default offers;
