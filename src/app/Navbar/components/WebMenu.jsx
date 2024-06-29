import React from "react";
import { Link } from "react-router-dom";
import links from "../links";

const WebMenu = () => {
  return (
    <ul className="nav-menu flex items-center text-[20px] list-none gap-[50px] [&>li]:no-underline [&>li]:font-semibold [&>li]:text-[#828282]">
      {links.map((item) => {
        return (
          <li key={item.id}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default WebMenu;
