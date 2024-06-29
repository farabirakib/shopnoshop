import React from "react";
import { Link } from "react-router-dom";

const item = (props) => {
  return (
    <div className="w-80 hover:transform hover:scale-105 hover:transition-all hover:duration-600">
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="" />
      </Link>

      <p className="mx-2">{props.name}</p>
      <div className="flex gap-5">
        <div className="text-lg font-medium text-gray-900 ">
          ${props.new_price}
        </div>
        <div className="text-lg font-medium text-gray-600 text-decoration-line-through">
          ${props.old_price}
        </div>
      </div>
    </div>
  );
};

export default item;
