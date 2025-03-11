
import React from "react";
import MotionCar from "./Motion";

export default function Banner() {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-200 py-6 px-8 rounded-lg">
      <div className="overflow-visible">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="md:w-2/5 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Explore the Finest <span className="text-red-500">Global</span>{" "}
              Offers
            </h1>
            <h4 className="text-lg md:text-xl text-gray-600 mt-4">
              Find your ideal ride for any adventure with our diverse range of
              affordable and dependable car rentals.
            </h4>
            <div className="mt-6">{/* <BannerButton /> */}</div>
          </div>

          {/* Right Image */}
          <div className="w-full flex justify-center">
            <MotionCar />
          </div>
        </div>
      </div>
    </div>
  );
}
