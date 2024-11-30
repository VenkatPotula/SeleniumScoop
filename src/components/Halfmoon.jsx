import React from "react";

const Halfmoon = () => {
  return (
    <div className="flex items-center justify-center h-52 ">
    {/* Outer circle (Moon) */}
    <div className="relative w-[30vw] h-[30vw] bg-green-500 rounded-full">
      {/* Inner circle to create the crescent shape */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw]  rounded-full"></div>
    </div>
  </div>
  );
};

export default Halfmoon;
