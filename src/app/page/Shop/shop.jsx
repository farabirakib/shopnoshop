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
    <nav>
      <div className="h-[80vh] mt-8   custombg ">
        <div className="container">
          <div className="justify-between flex ">
            <div className=" mt-12 ">
              <p>NEW ARRIVALS ONLY</p>
              <p className="text-6xl  font-bold pt-4">
                <div>New</div>
                <div>Collections</div> For Everyone
              </p>
              <div className="  text-xl rounded">
                <Link className="btn custom-gradient  mt-5 gap-3 m-3 text-xl">
                  Latest Collections
                  <img
                    className="mt-2 pl-2 float-right items-center"
                    src={arrowIcon}
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="h-[50vh] pt-[5%] float-right">
              <img className="h-[30rem] " src={homePhoto} alt="" />
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
