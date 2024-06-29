import React from "react";
import { Link } from "react-router-dom";

const item = (props) => {
  return (
    <div className="w-[25vw] hover:transform hover:scale-105 hover:transition-all hover:duration-600">
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="" />
      </Link>

      <p className="text-[1.5vw] overflow-hidden">{props.name}</p>
      <div className="flex gap-2">
        <div className="text-[2vw] font-medium text-gray-900 ">
          ${props.new_price}
        </div>
        <div className="text-[2vw] font-medium text-gray-600 text-decoration-line-through">
          ${props.old_price}
        </div>
      </div>
    </div>
  );
};

export default item;
