import React from "react";
import data_product from "../../../../data/data";
import Item from "../Item/item";

const popular = () => {
  return (
    <div className="h-screen mt-5 flex flex-column items-center gap-2 ">
      <h1 className="text-gray-900 text-5xl font-semibold">POPULAR IN WOMEN</h1>
      <hr className="w-80 h-2 rounded-lg bg-gray-600" />
      <div className=" mt-5  flex gap-8 px-12">
        {data_product.map((item, i) => {
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
        })}
      </div>
    </div>
  );
};

export default popular;
