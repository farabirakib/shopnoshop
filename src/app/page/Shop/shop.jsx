import React from "react";
import homePhoto from "../../../assets/hero_image.png";
import { Link } from "react-router-dom";
import arrowIcon from "../../../assets/arrow.png";
import Popular from "../Products/Popular/popular";
import Offers from "../Products/Offers/offers";
import NewCollections from "../Products/NewCollections/NewCollections";
import NewsLetter from "../NewsLetter/NewsLetter";

function Shop() {
  return (
    <nav className="w-screen overflow-hidden">
      <div className="w-full h-50 mt-8 custombg ">
        <div className="container">
          <div className="flex justify-between">
            <div className="mt-12">
              <p>NEW ARRIVALS ONLY</p>
              <p className="text-[5vw]  font-bold pt-4">
                <div>New</div>
                <div>Collections</div> For Everyone
              </p>
              <div className="rounded">
                <Link className="btn custom-gradient text-sm font-medium">
                  Latest Collections
                  <img className="w-4 items-center" src={arrowIcon} alt="" />
                </Link>
              </div>
            </div>
            <div className=" pt-[80px] float-right">
              <img className="w-[30vw]" src={homePhoto} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Popular />
        <Offers />
        <NewCollections />
        <NewsLetter />
      </div>
    </nav>
  );
}

export default Shop;
