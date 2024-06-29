import React, { useEffect, useState } from "react";
import "./navbar.css";
import MobileMenu from "./components/MobileMenu";
import HeaderLogo from "./components/HeaderLogo";
import WebMenu from "./components/WebMenu";
import Cart from "./components/Cart";
import LoginButtton from "./components/LoginButtton";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth || 0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full h-15 mx-auto bg-white flex justify-between items-center shadow-[0_1px_3px_-2px_#000000] px-4 md:px-8">
      <HeaderLogo />
      {screenWidth > 767 ? <WebMenu /> : null}

      <div className="flex items-center gap-3">
        {screenWidth > 767 ? <LoginButtton /> : null}
        <Cart />
        {screenWidth < 767 ? <MobileMenu /> : null}
      </div>
      {/* Close Icon */}
    </nav>
  );
};
export default Navbar;
