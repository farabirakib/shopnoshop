import React from "react";
import "./about.css";
import NewsLetter from "../NewsLetter/NewsLetter";
import Contact from "./Contact_page/contact";

const about = () => {
  return (
    <div className="about-header">
      <div>
        <Contact />
        <NewsLetter />
      </div>
    </div>
  );
};

export default about;
