import React from "react";
import Hero from "../components/Hero";
import Schedule from "../components/Schedule";
import Features from "../components/Features";
import bgwave from "../assets/sl.jpg";
import Courses from "../components/Courses";
import About from "./About";
import Contact from "../components/Contact";

const Home = () => {
  return (
    // <div className="m-0 p-0 overflow-hidden">
    //   <div
    //     className="pb-20 pt-10 bg-no-repeat z-10"
    //     style={{
    //       backgroundImage: `url(${bgwave})`,
    //       backgroundSize: '100% 100%',
    //       backgroundPosition: 'top',
    //       minHeight: '100vh',
    //       backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity (0 = fully transparent, 1 = fully opaque)
    //     }}
    //   >
    //     <Hero />
    //     <Features />
    //   </div>

    //   <Schedule />
    // </div>
    <div className="m-0 p-0 overflow-hidden">
      <div
        className="sm:pb-20 pt-10 bg-no-repeat relative z-10"
        style={{
          backgroundImage: `url(${bgwave})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "top",
          minHeight: "100vh",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay for background opacity */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "rgba(0,0,0, 0.9)", // Background opacity layer
            zIndex: -1, // Keep the content in front
          }}
        ></div>
        <Hero />
      </div>

      {/* <Features /> */}

      {/*         
        <About/> */}
    </div>
  );
};

export default Home;
