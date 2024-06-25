import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import Item from "../../../app/page/Products/Item/item";
import all_product from "../../../data/all_product";
import dropdown_icon from "../../../assets/dropdown_icon.png";
import { ShopContext } from "../../../Context/ShopContext";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img src={props.banner} alt="" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12</span>out of 36 produccts
        </p>
        <div className="shopCategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopCategory-products">
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
