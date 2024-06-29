import React from "react";
import { Link } from "react-router-dom";

function LoginSignup() {
  return (
    <div className="w-full h-screen pt-20 bg-white ">
      <div className="size-[600px] bg-white m-auto px-10 py-16 text-center rounded-2xl">
        <h1>Sign Up</h1>
        <div className=" mt-5 flex flex-column gap-7 [&>input]:w-full [&>input]:h-8 [&>input]:pl-5  [&>input]:border-b-2 [&>input]:border-dashed [&>input]:border-gray-300 [&>input]:outline-none [&>input]:text-gray-600 [&>input]:text-lg">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Phone Number" />

          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <div className="flex items-center mt-6 gap-5 text-gray-700 text-lg font-medium">
          <p>
            <input type="checkbox" name="" id="" />
            By continuing, i agree to the terms of use & privacy.
          </p>
        </div>
        <div className="loginsignup-fields-btn">
          <button className="w-full h-10 mt-9 border-none text-2xl font-medium cursor-pointer rounded text-w-500 text-white custom-gradient">
            Sign UP
          </button>
        </div>
        <div className="mt-5 text-gray-700 text-lg font-medium ">
          <p>
            Already have an account?{" "}
            <span>
              <Link
                style={{
                  textDecoration: "none",
                  color: "hotpink",
                  fontWeight: 500,
                }}
              >
                Login
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
