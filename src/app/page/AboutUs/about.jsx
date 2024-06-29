import React from "react";
import NewsLetter from "../NewsLetter/NewsLetter";
import Contact from "./Contact_page/contact";

const about = () => {
  return (
    <div className="mt-8">
      <div>
        <Contact />
        <NewsLetter />
      </div>
    </div>
  );
};

export default about;
