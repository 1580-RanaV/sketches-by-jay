"use client";
import React from "react";
import BackButton from "../component/BackButton";

const Page = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b shadow border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-24">
            <div className="font-bold text-3xl text-black">
              SKETCHES BY JAY
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black px-4">
        <p className="text-xs sm:text-sm md:text-lg font-regular text-gray-700 text-center">
          We do not collect or use cookies on this website. Cheers.
        </p>
      </div>
      <BackButton />
    </div>
  );
};

export default Page;
