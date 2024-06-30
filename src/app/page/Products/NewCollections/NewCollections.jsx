import React from "react";
import new_collections from "../../../../data/new_collections";
import Item from "../Item/item";

const NewCollections = () => {
  return (
    <div className=" flex flex-column items-center  gap-3 ">
      <h1 className="text-[5vw] font-medium text-gray-900 pb-3  border-b-4">
        NEW COLLECTIONS
      </h1>

      <div className="mt-3 text-center grid grid-cols-4 gap-8 flex-wrap">
        {new_collections.map((item, i) => {
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
export default NewCollections;
