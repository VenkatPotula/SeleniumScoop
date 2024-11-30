import React from "react";

const Ribbon = () => {
  return (
    <div className="flex justify-center items-center   ">
      <h1 className="relative mx-auto my-4 px-10 py-3 text-center font-bold text-lg text-white bg-red-500">
       Course Content
        {/* Left ribbon end */}
        <span
          className="absolute left-[-80px] top-[10px] w-[80px] h-[100%] bg-red-500 transform rotate-135 origin-bottom-left"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 25% 50%)',
            backgroundImage: 'linear-gradient(45deg, transparent 50%, #5d3922 50%)',
            backgroundSize: '20px 20px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom right',
          }}
        ></span>
        {/* Right ribbon end */}
        <span
          className="absolute right-[0px] top-[-40px] w-[80px] h-[100%] bg-red-500 transform rotate-180 origin-bottom-right"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 25% 50%)',
            backgroundImage: 'linear-gradient(45deg, transparent 50%, #5d3922 50%)',
            backgroundSize: '20px 20px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom right',
          }}
        ></span>
      </h1>
    </div>
  );
};

export default Ribbon;
