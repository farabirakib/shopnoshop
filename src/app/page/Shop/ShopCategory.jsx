import React, { useState } from "react";
import "./CSS/ShopCategory.css";
import Item from "../../../app/page/Products/Item/item";
import all_product from "../../../data/all_product";

const ShopCategory = (props) => {
  const { all_product } = useState();
  return (
    <div className="shop-category">
      <img src={props.banner} alt="" />
      <div className="shopCategory-product">
        {all_product.map((item, i) => {
          if (props.ShopCategory === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
