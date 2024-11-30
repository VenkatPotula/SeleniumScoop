import React from "react";
import Singlecourse from "./Singlecourse";
import Logo from "../assets/sl.jpg";
import Logo2 from "../assets/bg10.svg";
import Course from "./Course";
import "./Courses.css";

const Courses = () => {
  return (
    <div
      className="bg-cover bg-center relative bg-no-repeat min-h-screen bg-gray-200   px-5 py-10 sm:p-20  items-center justify-center"
      // style={{ backgroundImage: `url(${Logo2})` }} // Background image for the top div
    >
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
      <div className="sm:w-[80%] h-full  mx-auto   rounded-lg ">
        <div className="font-hightlight">
          <h1
            className="  my-12 md:text-4xl text-2xl text-center  text-[#fc0545] font-bold group-hover:text-green-700 transition-colors duration-300"
            style={{ fontFamily: "'Copperplate, Papyrus, fantasy" }}
          >
            Confusion తో నేర్చుకోవడం కన్నా Confident గా నేర్చుకోవడం Best!
          </h1>
        </div>

        <h1 className="mb-3 sm:text-3xl text-[18px] font-bold text-green-600  group-hover:text-green-700 transition-colors duration-300">
          &#x27A3; Selenium with Java Course Details
        </h1>
        <h1 className="bg-yellow-300 py-1 text-center text-blue-700 font-semibold text-2xl">
          Selenium with java తెలుగులో
        </h1>
        <div className="w-full relative h-full  bg-red-500">
          <div className="">
            <Course />
          </div>

          <div className=" lg:absolute right-[1px] bottom-[1px] lg:w-[32.5%] bg-red-800 md:h-[51%]    shadow-sky-800 transition-transform duration-300">
            <img
              src={Logo}
              alt="Course Content"
              className="w-full h-full object-stretch"
            />
          </div>
        </div>

        <h1 className="sm:mt-16 mt-8 text-base sm:text-2xl font-medium text-blue-700 group-hover:text-green-700 transition-colors duration-300 tracking-wider ">
          We collaborate closely with our candidates to uncover the most
          effective and efficient ways to master Selenium with Java, ensuring
          they gain the skills needed for real-world automation challenges.
        </h1>
      </div>
    </div>
  );
};

export default Courses;
