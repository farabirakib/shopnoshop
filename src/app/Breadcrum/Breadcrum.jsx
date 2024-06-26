import React from "react";
import "./Breadcrum.css";
import arrow_icon from "../../assets/arrow.png";

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      <div>
        HOME <img src={arrow_icon} alt="" />
        SHOW <img src={arrow_icon} alt="" />
        {product.category} <img src={arrow_icon} alt="" />
        {product.Name}
      </div>
    </div>
  );
};
export default Breadcrum;
