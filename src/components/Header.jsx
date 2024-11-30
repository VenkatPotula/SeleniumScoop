import React from "react";

const Header = () => {
  return (
    <div className="w-full bg-blue-950 text-white sm:py-3 px-8 sm:px-20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 sm:gap-5 items-center justify-between text-xl">
        {/* Contact Info */}
        <div className="flex gap-5">
          <p className="text-white">seleniumscoop@gmail.com</p>
          <p className="text-white">+919347938040</p>
          <p className="text-white">+919347938040</p>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden w-full   sm:mt-0">
          <div className="animate-marquee righ+t  whitespace-nowrap text-white text-xl ">
            1st Batch Starting from 1st-Jan-2025
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
