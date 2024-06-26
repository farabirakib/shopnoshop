import React from "react";
import { Link } from "react-router-dom";
import "./loginSignup.css";

function LoginSignup() {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Phone Number" />

          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <div className="loginsignup-agree">
          <p>
            <input type="checkbox" name="" id="" />
            By continuing, i agree to the terms of use & privacy.
          </p>
        </div>
        <div className="loginsignup-fields-btn">
          <button>Sign UP</button>
        </div>
        <div className="loginsignup-fields-login">
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
