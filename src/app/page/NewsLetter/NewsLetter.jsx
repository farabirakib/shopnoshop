import React from "react";

function NewsLetter() {
  return (
    <div className="h-4/5 md:h-[100vh]  custombg">
      <div className="w-full h-2/3 flex flex-col items-center justify-center mt-4 px-140 mb-20  gap-8 [&>h1]:text-gray-700 text-[5vw] font-semibold text-gray-700 [&>p]:text-[3vw] ">
        <h1 className="mt-8 ">Get Exclusive Ofeers on Your Email</h1>
        <p> Subscribe to our newsletter and stay update</p>
        <div className="flex rounded-md border-2 border-gray-500">
          <input type="email" placeholder="Your Email id" />
          <button className="rounded-md border-2 border-gray-500 custom-gradient">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
