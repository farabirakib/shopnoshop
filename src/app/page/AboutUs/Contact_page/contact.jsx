import React from "react";
import contact_box_side from "../../../../assets/contact_box_side.png";
import { Link } from "react-router-dom";
import shopping_photo from "../../../../assets/shopping_photo.png";

function contact() {
  return (
    <div className="w-full text-center items-center justify-between mt-5">
      <div className="w-4/5 justify-between ml-[5%]    flex  mt-5 ">
        <div className=" text-5xl">
          <p>
            <h1>Want To Know More?</h1>
          </p>
          <p>
            <h1>Reach out to us!</h1>
          </p>
          <img className="size-80" src={shopping_photo} alt="" />
        </div>
        <div className="flex aline-center items-center">
          <img className="size-96" src={contact_box_side} alt="" />
          <div className=" p-12 border-2 border-pink-500 rounded-2xl ">
            <p>
              <h2 className="text-2xl fw-bolder mb-8">Contact US</h2>
            </p>

            <ul className="[&>li]:list-none [&>li]:m-0 [&>li]:pr-8 [&>li]:pt-5 [&>li]:border-b-2 border-gray-500 [&>input]:border-none  mb-8 text-lg">
              <li>
                <input type="text" placeholder="Name" />
              </li>
              <li>
                <input type="email" placeholder="Email" />
              </li>
              <li>
                <input type="text" placeholder="Text your message..." />
              </li>
            </ul>
            <button className="mt-10">
              <Link
                className=" border-none text-decoration-none custom-gradient text-2xl text-white rounded px-1 py-2"
                style={{ textDecoration: "none", color: "white" }}
              >
                Submit
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contact;
