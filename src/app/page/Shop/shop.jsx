import React from "react";
import "./shop.css";
import homePhoto from "../../../assets/hero_image.png";
import { Link } from "react-router-dom";
import arrowIcon from "../../../assets/arrow.png";
import Popular from "../Products/Popular/popular";
import Offers from "../Products/Offers/offers";
import NewCollections from "../Products/NewCollections/NewCollections";

function Shop() {
  return (
    <nav>
      <div className="home-header">
        <div className="container">
          <div className="row">
            <div className="home-container col">
              <p>NEW ARRIVALS ONLY</p>
              <p className="home-intro">
                <div>New</div>
                <div>Collections</div> For Everyone
              </p>
              <div className="home-btn">
                <Link className="btn  gap-3 m-3">
                  Latest Collections <img src={arrowIcon} alt="" />
                </Link>
              </div>
            </div>
            <div className="homePhoto col">
              <img src={homePhoto} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Popular />
        <Offers />
        <NewCollections />
      </div>
    </nav>
  );
}
export default Shop;
