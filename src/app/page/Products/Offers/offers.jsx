import React from "react";
import { Link } from "react-router-dom";
import exclucive_image from "../../../../assets/exclusive_image.png";

const offers = () => {
  return (
    <div className="h-[80vh] flex offerbg">
      <div className="ml-[2vw] py-[2vw] justify-end ">
        <h1 className="text-[7vw] text-gray-900 font-medium">Exclusive</h1>
        <h1 className="text-[ 5vw] text-gray-900 font-medium">
          Offers For You
        </h1>
        <p className="mt-7 text-[3vw]">ONLY ON BEST SELLERS PRODUCTS</p>
        <div className="mt-14">
          <Link className="w-44 h-16 p-2 custom-gradient text-[3vw] font-medium cursor-pointer  text-black no-underline  rounded border border-1 border-black">
            Check Now
          </Link>
        </div>
      </div>
      <div className="size-[30vw] pr-[2vw] ">
        <img src={exclucive_image} alt="" />
      </div>
    </div>
  );
};

export default offers;
