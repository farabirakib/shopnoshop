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
        <button>
          <Link>Check Now</Link>
        </button>
      </div>
      <div className="offers-right">
        <img src={exclucive_image} alt="" />
      </div>
    </div>
  );
};

export default offers;
