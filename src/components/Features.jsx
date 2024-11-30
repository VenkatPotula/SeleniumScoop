import React from "react";
import Ribbon from "./Ribbon";
import Logo from "../assets/sl.jpg";

const Features = () => {
  return (
    <>
      <div className="   grid grid-cols-2 gap-12 w-[80%] mx-auto">
        {/* <Ribbon/> */}
        {/* <div className="w-full h-[300px] bg-red-500  shadow-md shadow-green-500 rounded-md  overflow-hidden">
    <img
      src={Logo} 
      alt="Profile"
      className="w-full  h-full object-center"
    />
  </div> */}
        <div className="flex justify-center items-center bg-white">
          <div className="w-64 h-20 bg-blue-500 transform rotate-45"></div>
        </div>

        <div className="rounded-lg  p-8 flex flex-col justify-center items-center bg-white rounded-md ">
          <h1 className="text-3xl font-bold text-cyan-300 mb-6">
            Customized Notes
          </h1>
          <ul className="space-y-4 text-lg text-gray-600">
            <li className="flex items-center gap-2 text-[#ff3434] font-semibold tracking-widest">
              <span className="text-green-500 text-xl font-bold">&#x21DB;</span>
              Customized Notes On All Topics
            </li>
            <li className="flex items-center gap-2 text-[#ff3434] font-semibold tracking-widest">
              <span className="text-green-500 text-xl font-bold">&#x21DB;</span>
              All Core Topics Explained With Examples
            </li>
            <li className="flex items-center gap-2 text-[#ff3434] font-semibold tracking-widest">
              <span className="text-green-500 text-xl font-bold">&#x21DB;</span>
              All Core Topics Explained With Examples
            </li>
            <li className="flex items-center gap-2 text-[#ff3434] font-semibold tracking-widest">
              <span className="text-green-500 text-xl font-bold">&#x21DB;</span>
              All Core Topics Explained With Examples
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Features;
