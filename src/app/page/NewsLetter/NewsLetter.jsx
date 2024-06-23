import React from "react";
import "./NewsLetter.css";

function NewsLetter() {
  return (
    <div className="newsLetter">
      <h1>Get Exclusive Ofeers on Your Email</h1>
      <p> Subscribe to our newsletter and stay update</p>
      <div className="newsLetter-container">
        <input type="email" placeholder="Your Email id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default NewsLetter;
