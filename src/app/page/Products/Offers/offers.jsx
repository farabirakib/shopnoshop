import React from "react";
import { Link } from "react-router-dom";
import exclucive_image from "../../../../assets/exclusive_image.png";

const offers = () => {
  return (
    <div className="h-[60vh] flex mb-36  offerbg">
      <div className="ml-28 flex flex-1 flex-column  justify-end py-24">
        <h1 className="text-7xl text-gray-900 font-medium">Exclusive</h1>
        <h1 className="text-5xl text-gray-900 font-medium">Offers For You</h1>
        <p className="mt-7 text-xl">ONLY ON BEST SELLERS PRODUCTS</p>
        <div className="mt-14">
          <Link className="w-44 h-16 p-2 custom-gradient text-3xl font-medium cursor-pointer  text-black no-underline  rounded border border-1 border-black">
            Check Now
          </Link>
        </div>
      </div>
      <div className="pr-10">
        <img src={exclucive_image} alt="" />
      </div>
    </div>
  );
};

export default offers;
