import React from "react";
import Logo from "../assets/c1.jpg"; // Image of the course logo
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesome component
import {
  faBook,
  faCamera,
  faUser,
  faVideo,
} from "@fortawesome/free-solid-svg-icons"; // Import specific icon
import Logo2 from "../assets/c2.jpeg";
import offer from "../assets/o3.png";
import "./Schedule.css";

const Schedule = () => {
  return (
    <div className="mx-auto relative py-20 bg-gradient-to-r from-slate-300 to-blue-300  ">
      <div class="custom-shape-divider-top-1732443735">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <h1 className=" w-[90%] sm:w-[70%] mx-auto md:text-4xl text-3xl font-bold text-orange-800  mb-4 group-hover:text-green-600 transition-colors duration-300">
        Selenium Training
      </h1>
      <h1 className="  w-[70%] mx-auto md:text-2xl text-xl pb-10 font-bold  mb-4 group-hover:text-green-600 transition-colors duration-300">
        &#x27A3; Master in Selenium automation with Java
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:gap-5 gap-10 sm:w-[70%] sm:px-0 px-5 mx-auto">
        {/* Course Card */}

        <div className="shadow-lg bg-gradient-to-r from-blue-800 to-blue-950 rounded-[48px] py-8   flex flex-col items-center justify-center border border-blue-600 hover:scale-105 transition-transform duration-300 group relative overflow-hidden">
          {/* Decorative Accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-transparent opacity-10 group-hover:opacity-30 transition-opacity duration-300 rounded-3xl"></div>

          {/* Content */}
          <div className="text-center z-10 space-y-3">
            {/* Header Section */}
            <div className="bg-white rounded-md px-6 py-2 shadow-lg flex gap-4 justify-center   items-center">
              <h1 className="text-2xl font-bold text-orange-600   group-hover:text-green-600 transition-colors duration-300 inline-block ">
                Live
              </h1>
              <FontAwesomeIcon
                icon={faCamera}
                className=" text-2xl text-orange-600"
              />
            </div>

            {/* Timing Section */}
            <div className="space-y-2">
              <p className="text-white text-lg group-hover:text-gray-200 transition-colors duration-300">
                Live
              </p>

              <p className="text-white text-lg group-hover:text-gray-200 transition-colors duration-300">
                Online Training
              </p>
            </div>
          </div>
        </div>

        <div className="shadow-lg bg-gradient-to-r from-blue-800 to-blue-950 rounded-[48px] py-8   flex flex-col items-center justify-center border border-blue-600 hover:scale-105 transition-transform duration-300 group relative overflow-hidden">
          {/* Decorative Accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-transparent opacity-10 group-hover:opacity-30 transition-opacity duration-300 rounded-3xl"></div>

          {/* Content */}
          <div className="text-center z-10 space-y-3">
            {/* Header Section */}
            <div className="bg-white rounded-md px-6 py-2 shadow-lg flex gap-4 justify-center   items-center">
              <h1 className="text-2xl font-bold text-red-600   group-hover:text-green-600 transition-colors duration-300 inline-block ">
                Record
              </h1>
              <FontAwesomeIcon
                icon={faVideo}
                className=" text-2xl text-red-600"
              />
            </div>

            {/* Timing Section */}
            <div className="space-y-2">
              <p className="text-white text-lg group-hover:text-gray-200 transition-colors duration-300">
                Recording
              </p>

              <p className="text-white text-lg group-hover:text-gray-200 transition-colors duration-300">
                Classes
              </p>
            </div>
          </div>
        </div>

        <div className="shadow-lg bg-gradient-to-r from-blue-800 to-blue-950 rounded-[48px] py-8 flex flex-col items-center justify-center border border-blue-600 hover:scale-105 transition-transform duration-300 group relative overflow-hidden">
          {/* Decorative Accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-transparent opacity-10 group-hover:opacity-30 transition-opacity duration-300 rounded-3xl"></div>

          {/* Content */}
          <div className="text-center z-10 space-y-3">
            {/* Header Section */}
            <div className="bg-white rounded-md px-6 py-2 shadow-lg flex gap-4 justify-center   items-center">
              <h1 className="text-2xl font-bold text-orange-500   group-hover:text-green-600 transition-colors duration-300 inline-block ">
                Batch
              </h1>
              <FontAwesomeIcon
                icon={faUser}
                className="text-orange-500 text-2xl"
              />
            </div>

            {/* Timing Section */}
            <div className="space-y-2">
              <p className="text-white text-lg group-hover:text-gray-200 transition-colors duration-300">
                Morning & Evening
              </p>

              <p className="text-white text-lg group-hover:text-gray-200 transition-colors duration-300">
                Batches
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2  sm:gap-32 gap-16 mt-12 w-[90%] sm:w-[70%] mx-auto">
        {/* Course Card */}

        <div className="shadow-lg py-5 pl-5  bg-gradient-to-r from-blue-800 to-blue-950 rounded-2xl border  hover:scale-105  transition-transform duration-300 group">
          <div className="p-6">
            <h1 className="md:text-4xl text-2xl font-bold  text-white mb-4 group-hover:text-green-600 transition-colors duration-300">
              Our Learning Program
            </h1>
            <p className="text-white py-2 md:text-xl ">
              <span className="text-yellow-400 pr-3">&#x27B2;</span>Customized
              notes on all topics.
            </p>
            <p className="text-white py-2  md:text-xl">
              <span className="text-yellow-400 pr-3">&#x27B2;</span>All core
              topic explanation with example
            </p>
            <p className="text-white py-2  md:text-xl">
              <span className="text-yellow-400 pr-3">&#x27B2;</span>Interview
              preparation sessions
            </p>
            <p className="text-white py-2  md:text-xl">
              <span className="text-yellow-400 pr-3">&#x27B2;</span>Resume
              writing assistance and many more sessions
            </p>
            <p className="text-white py-2  md:text-xl">
              <span className="text-yellow-400 pr-3">&#x27B2;</span>Live Classes
              with recorded sessions
            </p>
          </div>
        </div>
        <div className=" sm:relative hover:scale-105  transition-transform duration-300 group flex-col items-center  ">
          <div className=" lg:absolute bottom-16">
            <div className="  flex items-center md:pl-2  md:gap-10 gap-16 ">
              <img
                src={offer}
                alt="offer"
                className="md:h-24  h-16 rotate-[-45deg] "
              ></img>
              <h1 className="md:text-6xl  text-5xl font-bold sm:w-[30vw] animate-bounce   text-red-600  group-hover:text-green-700 transition-colors duration-300">
                &#x20B9; 9,999/-
              </h1>
            </div>
            <div className="flex items-center justify-center flex-col">
              <p className="text-purple-700 text-4xl tracking-wider font-bold text-black my-3 py-5 text-center hover:text-red-500">
                Enroll Now
              </p>
              <p className="text-white bg-lime-600 md:text-4xl text-3xl sm:w-[90%] w-[95%] sm:px-0 px-10 tracking-wider text-black py-3 rounded-full text-center">
                +91 9347938040
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
