import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import Schedule from "./components/Schedule";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Element } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import bgwave from "./assets/sl.jpg"; // Ensure this file exists

function App() {
  return (
    <>
      <div className="sm:relative">
        {/* WhatsApp Floating Button */}
        <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50 group">
          <div className="bg-green-600 animate-pulse text-white w-12 h-12 flex items-center justify-center cursor-pointer rounded-l-full hover:bg-white hover:text-green-600">
            <a
              href="https://wa.me/9347938040" // Replace with your WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
          </div>
        </div>

        {/* Navbar */}
        <Navbar />

        {/* Sections */}
        <Element name="home">
          <div className="m-0 p-0 overflow-hidden">
            <div
              className="p-0 sm:pb-20 pt-10 bg-no-repeat relative z-10"
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
        </Element>

        <Element name="courses" id="courses">
          <Courses />
        </Element>

        <Element name="schedule">
          <Schedule />
        </Element>

        <Element name="contact" id="contact">
          <Contact />
        </Element>

        <Footer />
      </div>
    </>
  );
}

export default App;
