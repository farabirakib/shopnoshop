import React from "react";
import arrow_icon from "../../assets/arrow.png";

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="flex items-center gap-2 text-gray-600 text-base font-semibold capitalize">
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
