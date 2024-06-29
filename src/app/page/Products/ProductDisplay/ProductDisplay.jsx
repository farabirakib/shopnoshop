import React from "react";

const ProductDisplay = (props) => {
  const { product } = props;

  return (
    <div className="mx-24 my-12 flex">
      <div className="flex gap-3">
        <div className="flex flex-column gap-3 [&>img]:h-28">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="w-96" src={product.image} alt="" />
        </div>
      </div>
      <div className="my-24 flex  flex-column">
        <h2 className="text-4xl font-medium text-gray-600 ">{product.name}</h2>
        <div className="mx-3 gap-8 flex text-2xl font-semibold">
          <div className="text-gray-400 text-decoration-line-through ">
            ${product.old_price}
          </div>
          <div className="text-pink-600">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          natus dolorem dolorum omnis est tenetur aliquam! At architecto, sint
          nobis nulla corrupti veritatis nostrum, necessitatibus veniam tempore
          optio facere velit.
        </div>
        <div className="productdisplay-right-size">
          <h3 className="mt-6 text-gray-500 text-xl font-medium">
            Select Size
          </h3>
          <div className="mx-3 flex gap-5 [&>div]:px-3 py-5 bg-white rounded-sm border-gray-300 cursor-pointer ">
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
