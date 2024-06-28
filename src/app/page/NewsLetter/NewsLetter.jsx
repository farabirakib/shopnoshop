import React from "react";

function NewsLetter() {
  return (
    <div className="w-full h-[40] flex flex-col items-center justify-center mt-4 px-140 mb-20 custombg gap-8 [&>h1]:text-gray-700 text-5xl font-semibold text-gray-700 [&>p]:text-xl ">
      <h1>Get Exclusive Ofeers on Your Email</h1>
      <p> Subscribe to our newsletter and stay update</p>
      <div className="flex items-center justify-between bg-white w-96 h-12 rounded-lg border-2 border-gray-300 ">
        <input type="email" placeholder="Your Email id" />
        <div className="newsLetter-container-btn">
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
