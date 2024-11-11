import React from "react";
import { Link } from "react-router-dom";
import { icons } from "../../../utils/icons";

const Cart = () => {
  return (
    <Link className="relative">
      <span className="inline-flex justify-center items-center size-5 absolute -right-1 -top-1.5 rounded-full text-xs bg-red-500 text-white">
        00
      </span>
      <span className="size-8 inline-block">
        <img src={icons.cart} alt="" className="size-full" />
      </span>
    </Link>
  );
};

export default Cart;
