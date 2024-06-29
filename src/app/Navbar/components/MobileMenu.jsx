import React, { useRef } from "react";
import { Link } from "react-router-dom";
import HeaderLogo from "./HeaderLogo";
import links from "../links";
import LoginButtton from "./LoginButtton";

const MobileMenu = () => {
  const leftModalRef = useRef();

  const handleMobileMenuOpen = () => {
    leftModalRef.current.classList.remove("w-0");
    leftModalRef.current.classList.add("w-full");
  };
  const handleModalOutsideClick = (event) => {
    if (event.target.classList.contains("left-modal")) {
      leftModalRef.current.classList.add("w-0");
      leftModalRef.current.classList.remove("w-full");
    }
  };
  const handleModalRemoveItemClick = (targetId) => {
    leftModalRef.current.classList.add("w-0");
    leftModalRef.current.classList.remove("w-full");
  };

  return (
    <div className="mobile-menu">
      <div>
        <button
          type="button"
          className="text-xl md:text-[22px] pt-1 md:pt-0.5"
          onClick={handleMobileMenuOpen}
        >
          &#9776;
        </button>
      </div>
      <div
        className="left-modal fixed w-0 overflow-hidden h-screen left-0 top-0  bg-gray-800/90 z-[9999] transition-all duration-500 opacity-100 "
        ref={leftModalRef}
        role="button"
        tabIndex={-1}
        onClick={handleModalOutsideClick}
      >
        <div className="bg-white w-80 h-full">
          <HeaderLogo />
          <ul className=" mt-3 items-center text-center fw-bolder  [&>li]:py-7 [&>li]:border-b-2 border-b-gray-500 ">
            {links.map((item) => {
              return (
                <li key={item.id} onClick={handleModalRemoveItemClick}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
          <div className="flex justify-center">
            <LoginButtton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
