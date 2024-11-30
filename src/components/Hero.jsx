import React from "react";
import "./Hero.css"; // Ensure the CSS file is in the same directory or adjust the path
import Halfmoon from "./Halfmoon";
import bgwave from "../assets/herobg.svg";
import Logo from "../assets/sl.jpg";
import TextCover from "../assets/ribbon5.png";

const Hero = () => {
  return (
    <>
      <div
        className="w-[90%] mx-auto flex sm:gap-10 mt-20   items-center sm:pb-8 md:px-5 px-0"
        // style={{
        //   backgroundImage: `url(${bgwave})`,
        //   backgroundSize: 'contain', // Ensures the full image is visible
        //   backgroundRepeat: 'no-repeat', // Prevents the image from tiling
        //   backgroundPosition: 'center', // Centers the image
        //   minHeight: '50vh', // Ensures the container is at least the height of the viewport
        // }}
      >
        {/* <div className="w-36 h-36  border-4  ring-4  overflow-hidden rounded-full">
      <img
      src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" // Replace with your image URL
      alt="Profile"
      className="w-full h-full object-cover"
       />
       </div> */}
        <div className="md:pl-0 ">
          <h1 className="font-semibold text-lg md:text-4xl text-2xl tracking-widest text-white ">
            Venkatesh{" "}
            <span className="text-orange-400 tracking-widest">Pothula</span>
          </h1>
          <h2 className="font-medium  text-xs md:text-lg text-white ">
            13 Years of IT experience in{" "}
            <span className="text-orange-400 font-bold">QA</span>
          </h2>
        </div>
      </div>
      {/* <div className="flex gap-10 justify-center text-orange-400 ">
        <p className=" text-xl font-medium"> seleniumscoop@gmail.com</p>
        <p className=" text-xl font-medium"> +919705253365</p>
        <p className=" text-xl font-medium"> +919705253365</p>
      </div> */}

      <h1 className="md:text-6xl text-4xl font-bold text-cyan-300 text-center mt-12 md:mt-10 tracking-wide">
        Automation Testing Training in తెలుగు
      </h1>
      <h1 className="sm:text-3xl text-xl font-serif font-bold text-yellow-600 text-right  tracking-wide flex justify-center md:mt-10 mt-5">
        (Selenium with Java)
      </h1>
      {/* <div className="w-full flex justify-center">
        <div className="relative flex justify-center items-center h-64 w-72 ">
          <img
            src={TextCover}
            alt="Background"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />
          <div className="absolute z-10 text-center">
            <p className="text-l font-small text-blue-600">Duration</p>
            <p className="text-l font-small text-blue-600">30-40 Days</p>
          </div>
        </div>
      </div> */}

      <div className="flex justify-center items-center overflow-hidden md:mt-10 mt-5 ">
        <h1 className="relative md:w-60 w-[130px] md:h-[50px] h-[50px]  mx-auto my-4 md:px-10 px-3 md:py-3 py-1 text-center font-bold md:text-lg text-sm text-sky-700 bg-yellow-500">
          Duration 30-40 Days
          {/* Left ribbon end */}
          <span
            className="absolute left-[-50px] md:left-[-80px] top-[10px] w-[50px] md:w-[80px] h-[100%] bg-yellow-500 transform rotate-135 origin-bottom-left"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%, 25% 50%)",
              backgroundImage:
                "linear-gradient(45deg, transparent 50%, #5d3922 50%)",
              backgroundSize: "20px 20px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom right",
            }}
          ></span>
          {/* Right ribbon end */}
          <span
            className="absolute right-[0px] top-[-40px] md:w-[80px] w-[50px] h-[100%] bg-yellow-500 transform rotate-180 origin-bottom-right"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%, 25% 50%)",
              backgroundImage:
                "linear-gradient(45deg, transparent 50%, #5d3922 50%)",
              backgroundSize: "20px 20px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom right",
            }}
          ></span>
        </h1>
      </div>

      <div className="sm:flex gap-10  justify-center text-sky-600 md:mt-20 mt-20">
        <p className=" text-xl font-medium text-center">
          {" "}
          seleniumscoop@gmail.com
        </p>
        <p className=" text-xl font-medium text-center my-5 sm:my-0">
          {" "}
          +91 9347938040
        </p>
      </div>
      {/* <div className="overflow-hidden w-[90%] mx-auto mt-5  py-2 bg-gray-100    sm:mt-0 rounded-md">
        <div className="animate-marquee righ+t  whitespace-nowrap   text-red  py-3  text-xl flex justify-center ">
          1st Batch Starting from 1st-Jan-2025
        </div>
      </div> */}
    </>
  );
};

export default Hero;
