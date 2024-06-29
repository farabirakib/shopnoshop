import React from "react";

function NewsLetter() {
  return (
    <div className=" h-[60vh]  custombg">
      <div className="w-full h-2/3 flex flex-col items-center justify-center mt-4 px-140 mb-20  gap-8 [&>h1]:text-gray-700 text-5xl font-semibold text-gray-700 [&>p]:text-xl ">
        <h1 className="mt-20 ">Get Exclusive Ofeers on Your Email</h1>
        <p> Subscribe to our newsletter and stay update</p>
        <div className="w-96 h-12 flex  items-center justify-between bg-white  rounded-lg border-2 border-gray-300 ">
          <input
            type="email"
            placeholder="Your Email id"
            className="w-[500px] ml-0 border-none outline-none text-gray-700 font-sans text-2xl"
          />
          <div className="rounded-md">
            <button className="mb-3   p-1  text-2xl rounded-md custom-gradient">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
