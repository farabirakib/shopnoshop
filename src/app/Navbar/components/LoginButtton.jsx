import React from "react";
import { Link } from "react-router-dom";

const LoginButtton = () => {
  return (
    <Link
      to="/LoginSignup"
      className="flex justify-center items-center py-1.5 leading-6 px-4 bg-gradient-to-r from-[#ff66b2] to-[#ff6666] hover:bg-gradient-to-l transition duration-200 border border-gray-500 rounded-md text-white text-base font-normal cursor-pointer text-center"
    >
      Login
    </Link>
  );
};

export default LoginButtton;
