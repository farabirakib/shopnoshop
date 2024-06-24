import React from "react";
import "./about.css";
import NewsLetter from "../NewsLetter/NewsLetter";

const about = () => {
  return (
    <div className="about-header">
      <div>
        <NewsLetter />
      </div>
    </div>
  );
};

export default about;
