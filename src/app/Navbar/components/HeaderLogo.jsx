import React from "react";
import { Link } from "react-router-dom";
import { icons } from "../../../utils/icons";

const HeaderLogo = () => {
  return (
    <Link to={"/shop"} className="w-32 md:w-40 inline-block">
      <img className="size-full" src={icons.mainLogo} alt="shopno" />
    </Link>
  );
};

export default HeaderLogo;
