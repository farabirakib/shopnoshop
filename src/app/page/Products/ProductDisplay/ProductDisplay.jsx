import React from "react";
import "./ProductDisplay.css";

const ProductDisplay = (props) => {
  const { product } = props;

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h2>{product.name}</h2>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          natus dolorem dolorum omnis est tenetur aliquam! At architecto, sint
          nobis nulla corrupti veritatis nostrum, necessitatibus veniam tempore
          optio facere velit.
        </div>
        <div className="productdisplay-right-size">
          <h3>Select Size</h3>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
          <button>ADD TO CART</button>
          <p className="productdisplay-right-category">
            <span>Category:</span>Women , T-shirt , Crop Top
          </p>
          <p className="productdisplay-right-tags">
            <span>tags:</span>Shop, Latest , new
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
